# Galeri Görselleri

Ana sayfadaki **Galeri** bölümü "bento" düzendedir: en büyük/geniş hücrede
**drone videosu** otomatik oynar (`/public/videos/drone-hero.mp4` — Hero ile
aynı video), diğer küçük karelerde fotoğraflar yer alır.

Fotoğrafları buraya ekleyin.

## Nasıl eklenir?

1. Fotoğrafları bu klasöre kopyalayın (ör. `tesis.jpg`, `kantar.jpg`).
2. [data/gallery.ts](../../../data/gallery.ts) dosyasında ilgili öğenin `src`
   alanını doldurun:

   ```ts
   { src: "/images/gallery/tesis.jpg", alt: "...", caption: "Tesisimiz" }
   ```

3. `src` dolu olan görseller otomatik olarak tıklanıp büyütülebilir (lightbox)
   hale gelir.

## Öneriler

- **Oran:** Kare (1:1) tercih edilir; örn. 800x800 px. Diğer oranlar kırpılır.
- **Format:** JPG/WebP. Next.js otomatik AVIF/WebP'e çevirir.
- **Boyut:** Her görsel ~150–300 KB yeterli.

`src` boş bırakılan öğeler, fotoğraf eklenene kadar etiketli bir placeholder
olarak görünür; site bozulmaz.
