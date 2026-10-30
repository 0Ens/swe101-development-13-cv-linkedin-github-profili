import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { extractUrls } from './extract-urls.js';

const ATLANAN_KLASORLER = new Set(['node_modules', 'repolar', '.git']);
// LinkedIn botlara 999 doner; link elle teyit edilir.
const ATLANAN_HOSTLAR = ['linkedin.com'];
// Render ucretsiz planda uyanmasi 20 saniyeyi gecebiliyor.
const ZAMAN_ASIMI_MS = 90_000;

async function mdDosyalariniBul(klasor) {
  const girdiler = await readdir(klasor, { withFileTypes: true });
  const dosyalar = [];
  for (const girdi of girdiler) {
    const yol = path.join(klasor, girdi.name);
    if (girdi.isDirectory()) {
      if (!ATLANAN_KLASORLER.has(girdi.name)) {
        dosyalar.push(...(await mdDosyalariniBul(yol)));
      }
    } else if (girdi.name.endsWith('.md')) {
      dosyalar.push(yol);
    }
  }
  return dosyalar;
}

function atlanacakMi(url) {
  const host = new URL(url).hostname;
  return ATLANAN_HOSTLAR.some((atlanan) => host === atlanan || host.endsWith(`.${atlanan}`));
}

async function istekAt(url, method) {
  try {
    const cevap = await fetch(url, {
      method,
      redirect: 'follow',
      signal: AbortSignal.timeout(ZAMAN_ASIMI_MS),
      headers: { 'User-Agent': 'check-links (SWE-101)' },
    });
    return { ok: cevap.ok, durum: cevap.status };
  } catch (hata) {
    return { ok: false, durum: hata.name };
  }
}

async function linkiKontrolEt(url) {
  // Bazi siteler HEAD'i reddeder, bu yuzden GET ile bir kez daha denenir.
  const head = await istekAt(url, 'HEAD');
  return head.ok ? head : istekAt(url, 'GET');
}

async function main() {
  const kokKlasor = process.argv[2] ?? '.';
  const dosyalar = await mdDosyalariniBul(kokKlasor);

  const urlKaynaklari = new Map();
  for (const dosya of dosyalar) {
    for (const url of extractUrls(await readFile(dosya, 'utf8'))) {
      if (!urlKaynaklari.has(url)) urlKaynaklari.set(url, new Set());
      urlKaynaklari.get(url).add(dosya);
    }
  }

  const urller = [...urlKaynaklari.keys()];
  const atlananlar = urller.filter(atlanacakMi);
  const denenecekler = urller.filter((url) => !atlanacakMi(url));
  const sonuclar = await Promise.all(denenecekler.map(linkiKontrolEt));

  const kiriklar = [];
  denenecekler.forEach((url, i) => {
    const { ok, durum } = sonuclar[i];
    console.log(`${ok ? 'OK' : 'KIRIK'} ${durum} ${url}`);
    if (!ok) kiriklar.push(url);
  });
  for (const url of atlananlar) console.log(`ATLANDI ${url}`);

  for (const url of kiriklar) {
    console.error(`Kirik link: ${url} (${[...urlKaynaklari.get(url)].join(', ')})`);
  }
  console.log(
    `${dosyalar.length} dosya, ${urller.length} link: ` +
      `${denenecekler.length - kiriklar.length} OK, ${kiriklar.length} kirik, ${atlananlar.length} atlandi`,
  );
  process.exitCode = kiriklar.length > 0 ? 1 : 0;
}

main();
