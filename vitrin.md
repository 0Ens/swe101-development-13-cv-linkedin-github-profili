# Vitrin Envanteri

SWE-101 path'inde ürettiğim 12 reponun envanteri. Bu tablo hem pin seçiminin gerekçesi hem CV'nin hammaddesi.

Test sayıları README'lerden alınmadı: 30.10.2026'da her repo temiz kurulup `npm test` ile çalıştırıldı. Toplam **204 test, hepsi geçiyor**.

| # | Repo | Ne yapıyor | Canlı URL | Test | README |
|---|------|------------|-----------|------|--------|
| 01 | [programlama-temelleri-1](https://github.com/0Ens/swe101-development-01-programlama-temelleri-1) | Değer, kaynak birim ve hedef birim alıp km↔mile, kg↔lb ve °C↔°F çevirimi yapan terminal uygulaması. | Yok | 6 | Kurulum, test, ne öğrendim var; görsel yok |
| 02 | [veri-yapilari-algoritmik-dusunme](https://github.com/0Ens/swe101-development-02-veri-yapilari-algoritmik-dusunme) | 25 kayıtlık sipariş verisi üzerinde çalışan 5 saf dönüştürme fonksiyonu ve AI'ın yazdığı O(n×m) kodun Set ile O(n+m)'e iyileştirilmesi. | Yok | 33 | Tam: görsel, kurulum, test, AI kullanımı, ne öğrendim |
| 03 | [http-ve-web-anatomisi](https://github.com/0Ens/development-03-http-ve-web-anatomisi) | Open-Meteo API'sinin 4 endpoint'ini belgeleyip seçilen şehrin 7 günlük tahmininden en sıcak günü bulan Node.js script'i. | Yok | 8 | Kurulum, test, ne öğrendim var; görsel yok |
| 04 | [html-css-temelleri](https://github.com/0Ens/development-04-html-css-temelleri) | Framework kullanmadan HTML ve CSS ile yaptığım, ekran boyutuna uyum sağlayan kişisel portfolyo sayfası. | [GitHub Pages](https://0ens.github.io/development-04-html-css-temelleri/) | Yok | Görsel, canlı link, ne öğrendim var |
| 05 | [javascript-dom-fetch](https://github.com/0Ens/development-05-javascript-dom-fetch) | Şehir aratınca Open-Meteo'dan 5 günlük tahmini gösteren, yükleniyor ve hata durumlarını yöneten tarayıcı uygulaması. | Yok | 16 | Tam: görsel, kurulum, test, ne öğrendim |
| 06 | [ilk-api-express](https://github.com/0Ens/development-06-ilk-api-express) | Notları bellekte tutan, doğrulama ve tutarlı hata cevapları olan Express REST API'si. | Yok | 15 | Kurulum, test, ne öğrendim var; görsel yok |
| 07 | [sql-ve-veritabani](https://github.com/0Ens/development-07-sql-ve-veritabani) | Notlar API'sinin verisini bellekten SQLite'a taşıyıp sunucu kapansa da kalıcı hale getirdiğim sürüm; kategoriler de eklendi. | Yok | 21 | Kurulum, test, ne öğrendim var; görsel yok |
| 08 | [auth-ve-guvenlik-temelleri](https://github.com/0Ens/development-08-auth-ve-guvenlik-temelleri) | Notlar API'sine bcrypt ile parola saklama, JWT ile stateless oturum ve kullanıcı bazlı not sahipliği ekledim. | Yok | 12 | Tam: görsel, kurulum, test, ne öğrendim |
| 09 | [react-komponent-dusuncesi](https://github.com/0Ens/development-09-react-komponent-dusuncesi) | 06-08'de geliştirdiğim API'nin önüne React ve TypeScript ile ziyaretçi defteri arayüzü yazdım. | Yok | 22 (17 API, 5 arayüz) | Tam: görsel, kurulum, test, ne öğrendim |
| 10 | [deployment-ve-docker](https://github.com/0Ens/development-10-deployment-ve-docker) | Ziyaretçi defterini Vercel, Render ve Turso ile canlıya aldım; API için Dockerfile ve her push'ta testleri koşan CI kurdum. | [Vercel](https://development-10-deployment-ve-docker.vercel.app) + [Render](https://development-10-deployment-ve-docker.onrender.com/health) | 24 (17 API, 7 arayüz) | Tam: görsel, canlı URL, kurulum, test, AI kullanımı, ne öğrendim |
| 11 | [rol-turu-mobile](https://github.com/0Ens/development-11-rol-turu-mobile) | Open-Meteo'dan anlık hava durumu gösteren, şehir listesini telefonda saklayan Expo (React Native) uygulaması. | Yok (Expo Go ile çalışır) | 11 | Tam: görsel, kurulum, test, ne öğrendim |
| 12 | [rol-turu-embedded-game](https://github.com/0Ens/swe101-development-12-rol-turu-embedded-game) | TypeScript ve HTML Canvas ile yazıp itch.io'da yayınladığım 3 şeritli engelden kaçma oyunu. | [itch.io](https://eneserul.itch.io/engellerden-kacma) | 36 | Tam: görsel, canlı URL, kurulum, test, AI kullanımı, ne öğrendim |

Not: 07'de 15 API testi eskimiş olduğu için düşüyordu. Düzeltirken testler, SQLite'a geçişte kaybolan `GET /notes?q=` aramasını da yakaladı; ikisi de giderildi.

## Pin seçimi

| Pin | Repo | Neden seçildi |
|-----|------|---------------|
| 1 | 10 deployment-ve-docker | Canlı çalışan tek tam uygulama: arayüz, API, veritabanı, Dockerfile ve CI bir arada. |
| 2 | 11 rol-turu-mobile | Path'te en sevdiğim proje; web dışında mobil geliştirme yaptığımı gösteriyor. |
| 3 | 12 rol-turu-embedded-game | Herkesin tıklayıp oynayabildiği yayınlanmış bir ürün; 36 testle en çok test içeren repo. |
| 4 | 05 javascript-dom-fetch | Yükleniyor ve hata durumları olan, framework'süz JavaScript örneği. |
| 5 | 08 auth-ve-guvenlik-temelleri | Backend'e yatkın olduğumu ve güvenlik kararlarını gerekçelendirebildiğimi gösteriyor. |
| 6 | 02 veri-yapilari-algoritmik-dusunme | AI'ın yazdığı kodu değerlendirip ölçerek iyileştirdiğimi gösteriyor. |

Pinlenmeyenler: 01, 03, 04, 06, 07 ve 09. 01 ve 03 temel alıştırmalar; 06 ve 07 aynı API'nin ara sürümleri, son hali 08'de; 09'daki uygulamanın canlı hali 10'da. 04 kişisel sayfa olduğu için profilden ayrıca linkleniyor.
