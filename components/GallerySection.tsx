import { galleryItems } from "@/data/gallery";
import { site } from "@/lib/site";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

/**
 * Galeri bölümü (#galeri, Server Component).
 * Gerçek görsel varsa ImageGallery JSON-LD'sini de gömer.
 */
export default function GallerySection() {
  const withImage = galleryItems.filter((it) => it.src);

  const jsonLd =
    withImage.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${site.name} Galeri`,
          image: withImage.map((it) => `${site.url}${it.src}`),
        }
      : null;

  return (
    <section id="galeri" className="bg-anthracite-light py-20 lg:py-28">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Galeri</span>
          <h2 className="section-title text-balance">Tesisimizden Kareler</h2>
          <p className="mt-4 text-slate-400 text-pretty">
            Stok sahamız, kantarımız ve geri dönüşüm sürecimizden görüntüler.
            Drone çekimleri ve fotoğraflar yakında burada.
          </p>
        </Reveal>

        <div className="mt-12">
          <Gallery items={galleryItems} />
        </div>
      </div>
    </section>
  );
}
