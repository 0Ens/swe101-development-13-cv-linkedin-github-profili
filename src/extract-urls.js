const URL_DESENI = /https?:\/\/[^\s<>"'`)\]]+/g;
const SONDAKI_NOKTALAMA = /[.,;:!?]+$/;

export function extractUrls(metin) {
  const bulunanlar = metin.match(URL_DESENI) ?? [];
  return bulunanlar.map((url) => url.replace(SONDAKI_NOKTALAMA, ''));
}
