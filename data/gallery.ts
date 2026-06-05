/**
 * Galeri görselleri (Statik / Düzenlenebilir).
 * ------------------------------------------------------------------
 * Görselleri /public/images/gallery/ altına ekleyip `src` alanını
 * doldurun. `src` boş bırakılan öğeler, fotoğraf eklenene kadar
 * etiketli bir placeholder (degrade + başlık) olarak gösterilir;
 * site bozulmaz. Gerçek görsel eklendiğinde otomatik büyütülebilir
 * (lightbox) hale gelir.
 */
export interface GalleryItem {
  /** /images/gallery/... yolu. Boşsa placeholder gösterilir. */
  src?: string;
  /** Erişilebilirlik + SEO için açıklama (zorunlu). */
  alt: string;
  /** Kart üzerinde görünen kısa başlık. */
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  { src: "", alt: "Soma Umut Metal tesisi drone çekimi", caption: "Tesisimiz (Drone)" },
  { src: "", alt: "Hurda metal stok sahası", caption: "Stok Sahası" },
  { src: "", alt: "Kalibreli kantar ile hurda tartımı", caption: "Hassas Kantar" },
  { src: "", alt: "Hurda bakır ve demir dışı metaller", caption: "Demir Dışı Metaller" },
  { src: "", alt: "Demir hurdası ve çelik konstrüksiyon", caption: "Demir & Çelik" },
  { src: "", alt: "Hurda yükleme ve nakliye aracı", caption: "Söküm & Nakliye" },
  { src: "", alt: "Kablo hurdası ve geri dönüşüm", caption: "Kablo & Elektronik" },
  { src: "", alt: "Geri dönüşüm için ayrıştırılmış metaller", caption: "Geri Dönüşüm" },
];
