# Hero Drone Videosu

Ana sayfadaki Hero bölümünün arka planında oynayan drone videosunu buraya ekleyin.

## Gerekli dosya

- `drone-hero.mp4` — Hero arka plan videosu (otomatik oynar, sessiz, döngülü)

## Öneriler

- **Format:** MP4 (H.264). En geniş tarayıcı desteği için.
- **Çözünürlük:** 1920x1080 (Full HD) yeterli; 4K dosyaları büyük olur.
- **Süre:** 10–25 sn arası, sorunsuz döngü (loop) için başı-sonu uyumlu.
- **Boyut:** Mümkünse 5–8 MB altı. Büyük videolar mobilde yavaş açılır.
- **Sıkıştırma:** Handbrake veya `ffmpeg` ile sıkıştırın:

  ```bash
  ffmpeg -i kaynak.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 28 -preset slow -an drone-hero.mp4
  ```

  (`-an` sesi kaldırır — video zaten muted oynar.)

Dosya eklenmezse site bozulmaz; Hero bölümünde koyu metalik degrade arka plan görünür.
İlk kare (poster) için `/public/images/hero-poster.jpg` ekleyebilirsiniz.
