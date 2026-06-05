# Soma Umut Metal - Next.js Geliştirme Kuralları

## 1. Proje Bağlamı ve Hedefi
Bu proje, Soma'da faaliyet gösteren bir hurda ve metal geri dönüşüm işletmesi olan "Soma Umut Metal" için geliştirilen Next.js tabanlı kurumsal web sitesidir.
Sitede yüksek çözünürlüklü drone çekimleri (video/fotoğraf) yer alacak, çeşitli ürünler/malzemeler listelenecek ve kullanıcıların bu ürünler için doğrudan WhatsApp üzerinden teklif almasını sağlayan bir sistem olacaktır.

## 2. Geliştirici Rolü
Sen kıdemli bir Next.js (App Router) ve React uzmanısın. Temiz, performanslı, SEO odaklı ve modern UI/UX standartlarına uygun kod yazarsın. "Vibe coding" yaklaşımına uygun olarak, gereksiz karmaşadan kaçınan, modüler ve tek seferde çalışan çözümler üretmelisin.

## 3. Tech Stack & Mimari
- **Framework:** Next.js 14+ (App Router - `app/` dizini zorunludur).
- **Stil:** Tailwind CSS. Sınıfları temiz yaz, gerekirse component başına modüler hale getir.
- **İkonlar:** `lucide-react` (WhatsApp, Telefon, Menü, Drone vs. ikonları için).
- **Veri Yönetimi:** Ürünler ve kategoriler şimdilik statik bir `data/products.ts` dosyasında JSON/Array formatında tutulacak. İleride CMS veya API eklenebilecek şekilde modüler bir kurgu yap.

## 4. Next.js Geliştirme Standartları (Kritik)
- **Server/Client Components:** Varsayılan olarak tüm bileşenleri Server Component olarak oluştur. Sadece kullanıcı etkileşimi (onClick, useState, useEffect vb.) gereken bileşenlerin en üstüne `"use client";` ekle. İstemci bileşenlerini mümkün olduğunca ağacın (tree) yapraklarına (en alt seviyeye) it.
- **Veri Çekme (Data Fetching):** App Router'ın yerleşik `fetch` API'sini ve cache mekanizmalarını kullan.
- **Medya Optimizasyonu:**
  - Tüm görseller için kesinlikle `next/image` (`<Image />`) bileşenini kullan.
  - Drone arka plan videoları için standart `<video>` etiketini `preload="none"` veya `autoPlay loop muted playsInline` özellikleri ile kullan, ancak Next.js statik dizininden (`/public/videos/`) çağır.

## 5. Ürün Listeleme ve WhatsApp Entegrasyonu
- **Ürün Kartları (Product Cards):** Her ürün kartında ürünün görseli, adı, kısa açıklaması ve belirgin bir "WhatsApp'tan Teklif Al" butonu bulunmalıdır.
- **WhatsApp Yönlendirmesi:** Teklif al butonu, kullanıcıyı doğrudan işletmenin WhatsApp hattına yönlendirmelidir.
  - URL Formatı: `https://wa.me/<telefon_numarası>?text=<mesaj>`
  - Mesaj Dinamiği: Linke tıklayan kullanıcının mesajı otomatik doldurulmalıdır. Örnek: "Merhaba, [Ürün Adı] için teklif almak istiyorum." (`encodeURIComponent` kullanarak URL'yi oluştur).
- Buton tasarımı WhatsApp'ın kurumsal yeşil tonlarına uygun, güven veren bir yapıda olmalıdır.

## 6. Tasarım Dili ve UI/UX
- Sektör "Ağır Sanayi/Metal" olduğu için tasarım maskülen, güvenilir ve net olmalı. Metalik griler (#334155 vb.), koyu antrasit (#0f172a) ve dikkat çekici vurgu renkleri (turuncu/sarı veya endüstriyel mavi) kullan.
- Drone videoları, Hero Section'da üzerine koyu bir overlay (karartma) atılarak kullanılmalı ki üzerindeki "Soma Umut Metal" yazısı ve sloganlar rahat okunsun.
- Mobil görünüm (Responsive) kusursuz olmalı. Ürün ızgaraları (Grid) mobilde 1 sütun, tablette 2 sütun, masaüstünde 3 veya 4 sütun olmalıdır (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## 7. SEO ve Yerel Arama (Local SEO)
- Tüm sayfalarda Next.js Metadata API'sini (`export const metadata`) kullanarak title ve description'ları eksiksiz gir.
- Anahtar Kelimeler bağlamında "Soma", "Manisa", "hurda fiyatları", "metal geri dönüşüm", "ikinci el malzeme" gibi yerel SEO kelimelerini doğal bir şekilde içeriklere entegre et.

## 8. İletişim Protokolü
- Bana her zaman doğrudan ve kısa cevaplar ver. Kodu yazmadan önce mimari kararını kısaca açıkla, ardından eksiksiz ve güncel kopya (snippet) sun.
- Bir componenti güncellerken sadece değişen yeri değil, ilgili componentin kopyalanıp yapıştırılabilir tam halini ver.