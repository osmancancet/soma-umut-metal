# Ürün Görselleri

`data/products.ts` dosyasındaki her ürünün `image` alanı bu klasördeki bir
dosyaya işaret eder. Görselleri aşağıdaki adlarla ekleyin:

**Demir Dışı Metaller**
- `bakir.jpg` — Bakır Hurdası
- `kablo-bakiri.jpg` — Kablo & Bobin Bakırı
- `aluminyum.jpg` — Alüminyum Hurdası
- `aluminyum-profil.jpg` — Alüminyum Profil & Döküm
- `pirinc.jpg` — Pirinç Hurdası
- `bronz.jpg` — Bronz & Sarı Döküm
- `kursun.jpg` — Kurşun Hurdası
- `aku.jpg` — Hurda Akü
- `cinko.jpg` — Çinko Hurdası
- `krom.jpg` — Krom & Nikel

**Demir & Çelik**
- `demir.jpg` — Demir Hurdası
- `sac.jpg` — Sac Hurdası
- `talas.jpg` — Çelik & Demir Talaşı
- `dokum.jpg` — Döküm (Pik) Hurdası
- `paslanmaz.jpg` — Paslanmaz Çelik
- `ray.jpg` — Ray & Demiryolu Hurdası
- `dkp.jpg` — DKP & Galvaniz Sac

**Kablo & Elektronik**
- `kablo.jpg` — Kablo Hurdası
- `motor.jpg` — Elektrik Motoru & Jeneratör
- `trafo.jpg` — Trafo Hurdası
- `elektronik.jpg` — Elektronik Hurda (PCB)
- `beyaz-esya.jpg` — Beyaz Eşya & Klima Hurdası

**İkinci El & Hurda Malzeme**
- `sac-profil.jpg` — İkinci El Sac & Profil
- `konstruksiyon.jpg` — Çelik Konstrüksiyon
- `boru.jpg` — Demir & Çelik Boru
- `arac.jpg` — Hurda Araç & Karoseri
- `makine.jpg` — Makine & Teçhizat

## Öneriler

- **Oran:** 4:3 (kartlar bu orana göre kırpar). Örn. 800x600 px.
- **Format:** JPG veya WebP. Next.js zaten otomatik AVIF/WebP'e çevirir.
- **Boyut:** Her görsel ~150–300 KB yeterli.

Görsel eklenmezse kartta ikonlu bir placeholder gösterilir; site bozulmaz.
Yeni ürün eklemek/çıkarmak için yalnızca `data/products.ts` dosyasını düzenleyin.
Görsel dosya adı, ürünün `image` alanındaki yolla birebir aynı olmalıdır.
