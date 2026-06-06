"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ImageIcon, Film, Video, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import Reveal from "./Reveal";

/**
 * Bento galeri (Client Component).
 * - `wide` öğe (drone videosu) büyük/geniş hücrede otomatik oynar.
 * - Fotoğraflar küçük karelerde; görseli olanlar tıklanınca lightbox'ta açılır.
 */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  // Lightbox yalnızca gerçek fotoğraflar için
  const photos = items.filter((it) => it.src && it.type !== "video");
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 [grid-auto-rows:130px] sm:gap-4 sm:[grid-auto-rows:150px] md:grid-cols-4 lg:[grid-auto-rows:175px]">
        {items.map((item, i) => {
          const span = item.wide ? "col-span-2 row-span-2" : "col-span-1";
          const isVideo = item.type === "video";
          const photoIndex = !isVideo && item.src ? photos.indexOf(item) : -1;

          return (
            <Reveal key={item.caption + i} delay={(i % 4) * 70} className={span}>
              <figure className="group relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-steel to-anthracite sm:rounded-2xl">
                {/* Placeholder (medya yokken görünür) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isVideo ? (
                    <Film className="h-10 w-10 text-white/20" />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-white/20" />
                  )}
                </div>

                {/* Video (drone) — otomatik oynar */}
                {isVideo && item.src && (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-poster.jpg"
                    aria-label={item.alt}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                {/* Fotoğraf (tıklanınca lightbox) */}
                {!isVideo && item.src && (
                  <button
                    type="button"
                    onClick={() => setActive(photoIndex)}
                    className="absolute inset-0 h-full w-full cursor-zoom-in"
                    aria-label={`${item.caption} - büyüt`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>
                )}

                {/* Video rozeti */}
                {isVideo && (
                  <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-anthracite/80 px-2.5 py-1 text-xs font-semibold text-ember-light backdrop-blur-sm">
                    <Video className="h-3.5 w-3.5" />
                    Drone
                  </span>
                )}

                {/* Başlık */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite/90 to-transparent p-3 text-xs font-medium text-slate-200 sm:text-sm">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>

      {/* Lightbox */}
      {active !== null && photos[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-anthracite/95 p-4 backdrop-blur"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Görsel önizleme"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Kapat"
          >
            <X className="h-6 w-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Önceki"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Sonraki"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] w-full">
              <Image
                src={photos[active].src as string}
                alt={photos[active].alt}
                fill
                sizes="100vw"
                className="rounded-lg object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {photos[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
