/**
 * Galeri öğeleri (Statik / Düzenlenebilir).
 * ------------------------------------------------------------------
 * Düzen "bento" tarzıdır: `wide: true` olan öğe (genelde drone videosu)
 * BÜYÜK ve geniş gösterilir; diğerleri küçük karelerdir.
 *
 * - Video için: type: "video", src: "/videos/...mp4" (otomatik oynar, sessiz).
 *   Hero ile aynı drone videosunu kullanır: /public/videos/drone-hero.mp4
 * - Fotoğraf için: src: "/images/gallery/...jpg" (boşsa etiketli placeholder).
 */
export interface GalleryItem {
  /** "image" (varsayılan) veya "video" */
  type?: "image" | "video";
  /** Medya yolu. Boşsa fotoğraf placeholder'ı gösterilir. */
  src?: string;
  /** Erişilebilirlik + SEO açıklaması (zorunlu). */
  alt: string;
  /** Kart üzerinde görünen kısa başlık. */
  caption: string;
  /** true ise büyük/geniş hücre (2x2). */
  wide?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: "/videos/drone-hero.mp4",
    alt: "Soma Umut Metal tesisi drone çekimi",
    caption: "Drone Çekimi",
    wide: true,
  },
  { src: "", alt: "Hurda metal stok sahası", caption: "Stok Sahası" },
  { src: "", alt: "Kalibreli kantar ile hurda tartımı", caption: "Hassas Kantar" },
  { src: "", alt: "Hurda bakır ve demir dışı metaller", caption: "Demir Dışı Metaller" },
  { src: "", alt: "Demir hurdası ve çelik konstrüksiyon", caption: "Demir & Çelik" },
  { src: "", alt: "Hurda yükleme ve nakliye aracı", caption: "Söküm & Nakliye" },
  { src: "", alt: "Kablo hurdası ve geri dönüşüm", caption: "Kablo & Elektronik" },
  { src: "", alt: "Geri dönüşüm için ayrıştırılmış metaller", caption: "Geri Dönüşüm" },
];
