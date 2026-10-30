# SWE-101 Development-13: CV, LinkedIn ve GitHub Profili

Path boyunca ürettiğim 12 repoyu işe başvuru setine çevirdim ve vitrindeki linkleri denetleyen, testli bir script yazdım.

## Başvuru seti

- **GitHub profili:** https://github.com/0Ens
- **Kişisel sayfa:** https://0ens.github.io/development-04-html-css-temelleri/
- **LinkedIn:** https://www.linkedin.com/in/enes-erul/ ([metinler](linkedin.md))
- **CV:** [cv/cv.pdf](cv/cv.pdf) ([kaynak](cv/cv.md))
- **Envanter ve pin gerekçeleri:** [vitrin.md](vitrin.md)

## Pinlenen 6 repo

- [development-10-deployment-ve-docker](https://github.com/0Ens/development-10-deployment-ve-docker)
- [swe101-development-12-rol-turu-embedded-game](https://github.com/0Ens/swe101-development-12-rol-turu-embedded-game)
- [development-11-rol-turu-mobile](https://github.com/0Ens/development-11-rol-turu-mobile)
- [development-08-auth-ve-guvenlik-temelleri](https://github.com/0Ens/development-08-auth-ve-guvenlik-temelleri)
- [development-05-javascript-dom-fetch](https://github.com/0Ens/development-05-javascript-dom-fetch)
- [swe101-development-02-veri-yapilari-algoritmik-dusunme](https://github.com/0Ens/swe101-development-02-veri-yapilari-algoritmik-dusunme)

## Canlı URL'ler

- Ziyaretçi defteri: https://development-10-deployment-ve-docker.vercel.app
- API sağlık kontrolü: https://development-10-deployment-ve-docker.onrender.com/health
- Oyun: https://eneserul.itch.io/engellerden-kacma

## Kurulum

Gereksinim: Node.js 22.

```bash
git clone https://github.com/0Ens/swe101-development-13-cv-linkedin-github-profili.git
cd swe101-development-13-cv-linkedin-github-profili
npm install
```

## Link kontrolü

```bash
npm run check-links
```

Repodaki tüm `.md` dosyalarını tarar, her URL'ye HTTP isteği atar ve kırık link varsa sıfır dışı kodla çıkar. Başka bir klasörü denetlemek için: `node src/check-links.js <klasor>`.

- LinkedIn botlara 999 döndüğü için istek atılmaz, çıktıda `ATLANDI` yazar. Bu link elle kontrol edilir.
- Render'ın uyanması sürebildiği için zaman aşımı 90 saniyedir.
- HEAD başarısız olursa aynı link GET ile tekrar denenir.

## Test

```bash
npm test
```

URL ayıklama fonksiyonunun 6 testini çalıştırır.

## CV'yi yeniden üretme

```bash
npm run cv
```

## Ne öğrendim

- Düzenli bir GitHub profili, LinkedIn ve CV'nin nasıl hazırlanacağını öğrendim. Bunların İK tarafından nasıl görüldüğünü, hangi bilgilerin gerektiğini ve nasıl bir düzende olması gerektiğini gördüm.
- Hangi teknolojilerde gerçekten iyi olduğumu değerlendirmeyi öğrendim. Mülakatta anlatmakta zorlanacağımı düşündüğüm SQL, JWT, bcrypt ve Docker gibi teknolojileri CV'nin Skills bölümüne yazmadım, kendimi geliştirdikçe ekleyeceğim.
- Profesyonel görünümümü nasıl yöneteceğimi öğrendim. İyi olduğum teknolojileri ve projelerimi bu mecralarda göstermeye çalıştım.
