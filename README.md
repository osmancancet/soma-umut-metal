# Soma Umut Metal — Kurumsal Web Sitesi

Soma / Manisa bölgesinde faaliyet gösteren hurda ve metal geri dönüşüm
işletmesi **Soma Umut Metal** için geliştirilen Next.js 14 (App Router)
kurumsal web sitesi. Drone video hero, ürün kataloğu ve WhatsApp üzerinden
anlık teklif sistemi içerir.

## Teknoloji

- **Next.js 14** (App Router, `app/` dizini)
- **Tailwind CSS 3** (endüstriyel/metal renk paleti)
- **lucide-react** (ikonlar)
- **TypeScript**

## Kurulum & Çalıştırma

```bash
npm install      # bağımlılıkları kur
npm run dev      # geliştirme sunucusu → http://localhost:3000
npm run build    # üretim derlemesi
npm start        # üretim sunucusu
```

## ⚙️ Yapmanız Gerekenler (Önemli)

### 1. İletişim bilgileri — `lib/site.ts`

Tüm telefon, WhatsApp, e-posta ve adres bilgileri **tek dosyada**:
[lib/site.ts](lib/site.ts). Şu alanları gerçek bilgilerle değiştirin:

- `phoneRaw` / `whatsappRaw` → `905xxxxxxxxx` (başında **+ ve boşluk olmadan**)
- `phoneDisplay` → ekranda görünecek biçim
- `email`, `address`, `workingHours`, `social` (Instagram/Facebook/YouTube)
- `url` → yayına çıkınca gerçek alan adı

> WhatsApp linkleri `https://wa.me/<numara>?text=<mesaj>` formatında otomatik
> üretilir; teklif mesajı ürün adıyla otomatik doldurulur.

### 2. Drone videosu

`drone-hero.mp4` dosyasını [public/videos/](public/videos/) klasörüne ekleyin.
Detaylar: [public/videos/README.md](public/videos/README.md).
Video yoksa Hero'da metalik degrade arka plan görünür (site bozulmaz).

### 3. Ürün görselleri

Görselleri [public/images/products/](public/images/products/) klasörüne ekleyin.
Dosya adları için: [public/images/products/README.md](public/images/products/README.md).
Görsel yoksa kartta ikonlu placeholder gösterilir.

### 4. (Opsiyonel) Sosyal paylaşım görseli

Sosyal medyada link paylaşımında görünecek `og-image.jpg` (1200x630) dosyasını
`public/images/` klasörüne ekleyin.

## SEO Çalışması (Yerleşik)

Site, yerel arama (Local SEO) için hazır gelir:

- **Metadata API:** Tüm sayfalarda title/description, OpenGraph ve Twitter
  kartları — [app/layout.tsx](app/layout.tsx).
- **Yapısal veri (JSON-LD):** `LocalBusiness` + `RecyclingCenter` (adres,
  coğrafi konum, çalışma saatleri, ürün kataloğu, **müşteri puanı /
  AggregateRating**), `WebSite`, `FAQPage`, ürün sayfalarında `Product` ve
  `BreadcrumbList` şemaları — [lib/jsonld.ts](lib/jsonld.ts). Google'da harita,
  yıldız ve zengin sonuçlarda (rich results) görünmeyi destekler.
- **Ürün detay sayfaları:** `/urunler/[slug]` — 27 ürünün her biri build anında
  statik üretilir ([app/urunler/[slug]/page.tsx](app/urunler/%5Bslug%5D/page.tsx)),
  hepsi sitemap'te.
- **Sıkça Sorulan Sorular:** [data/faq.ts](data/faq.ts) — "Soma hurda
  fiyatları", "geri dönüşüm", "Manisa" gibi uzun kuyruklu yerel aramaları
  yakalayan içerik + `FAQPage` şeması.
- **Otomatik OG görseli:** [app/opengraph-image.tsx](app/opengraph-image.tsx)
  — sosyal paylaşımlarda görünen 1200x630 görsel kod ile üretilir (ayrıca
  dosya hazırlamanıza gerek yok).
- **Favicon & PWA:** [app/icon.svg](app/icon.svg) ve
  [app/manifest.ts](app/manifest.ts).
- **`sitemap.xml` & `robots.txt`:** [app/sitemap.ts](app/sitemap.ts),
  [app/robots.ts](app/robots.ts).
- **Anahtar kelimeler & konum:** [lib/site.ts](lib/site.ts) içindeki
  `keywords`, `geo` ve `foundingYear` alanlarını gerçek bilgilerle güncelleyin
  (özellikle `geo` koordinatlarını işletmenin konumuna göre düzeltin).

## Teklif Formu (WhatsApp)

İletişim bölümündeki form ([components/QuoteForm.tsx](components/QuoteForm.tsx)),
girilen bilgilerden (ad, telefon, ürün, mesaj) otomatik bir WhatsApp mesajı
oluşturup işletmenin hattına yönlendirir. Sunucu, e-posta servisi veya API
anahtarı gerektirmez — yalnızca [lib/site.ts](lib/site.ts) içindeki WhatsApp
numarasını kullanır. Kullanıcı, WhatsApp açıldıktan sonra fotoğraf da
ekleyebilir.

## Galeri & Yorum Yönetimi

- **Galeri:** [data/gallery.ts](data/gallery.ts) — görselleri
  [public/images/gallery/](public/images/gallery/) klasörüne ekleyip `src`
  alanını doldurun. `src` dolu görseller tıklanıp büyütülebilir (lightbox);
  boş olanlar fotoğraf eklenene kadar etiketli placeholder olarak görünür.
- **Müşteri yorumları:** [data/reviews.ts](data/reviews.ts) — örnek yorumları
  gerçek müşteri yorumlarınızla değiştirin. Sayfadaki yıldız puanı bu listeden
  otomatik hesaplanır ve JSON-LD `AggregateRating` ile birebir tutarlı kalır
  (Google bunu şart koşar — uydurma puan girmeyin).

## Yasal Sayfalar (KVKK / Gizlilik)

[/gizlilik](app/gizlilik/page.tsx) ve [/kvkk](app/kvkk/page.tsx) sayfaları ile
çerez onayı banner'ı ([components/CookieConsent.tsx](components/CookieConsent.tsx))
hazır gelir. Metinler genel bilgilendirme amaçlıdır; **yayına almadan önce bir
hukuk danışmanına gözden geçirtin** ve işletme bilgilerinizi kontrol edin.

## Ürün / Kategori Yönetimi

Ürünler ve kategoriler statik olarak [data/products.ts](data/products.ts)
dosyasında tutulur. **Mevcut 27 ürün sektöre uygun TAHMİNİ/örnek bir
katalogdur** — işletmenin gerçekte aldığı malzemelere göre düzenleyin. Ürün
eklemek/çıkarmak veya güncellemek için yalnızca bu dosyayı düzenleyin;
bileşenleri değiştirmenize gerek yoktur. İleride bir CMS/API'ye geçilirse
sadece bu dosyanın veri kaynağı değişir.

## Proje Yapısı

```
app/
  layout.tsx        # Kök layout, SEO metadata, JSON-LD, Header/Footer
  page.tsx          # Ana sayfa (bölümleri birleştirir)
  globals.css       # Tailwind + ortak buton/komponent sınıfları
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/
  Header.tsx        # Sabit menü (mobil hamburger) — "use client"
  Hero.tsx          # Drone videolu hero
  Services.tsx      # Hizmetler / neden biz
  About.tsx         # Hakkımızda
  ProductGrid.tsx   # Kategori filtreli ürün ızgarası — "use client"
  ProductCard.tsx   # Ürün kartı + WhatsApp teklif butonu
  Contact.tsx       # İletişim + Google Maps
  Footer.tsx        # Alt bilgi
  WhatsAppButton.tsx / FloatingWhatsApp.tsx / WhatsAppIcon.tsx
data/products.ts    # Statik ürün/kategori verisi
lib/site.ts         # İşletme bilgileri + WhatsApp link yardımcıları
```
