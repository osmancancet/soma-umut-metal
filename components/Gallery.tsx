"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

/**
 * Görsel galeri ızgarası + lightbox (Client Component).
 * - Görseli olan öğeler tıklanınca tam ekran büyür.
 * - Görseli olmayan öğeler etiketli placeholder olarak gösterilir.
 */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  // Sadece gerçek görseli olan öğeler lightbox'ta gezilebilir
  const withImage = items.filter((it) => it.src);
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % withImage.length)),
    [withImage.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + withImage.length) % withImage.length
      ),
    [withImage.length]
  );

  // Klavye ile gezinme + arka plan kaydırmasını kilitleme
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => {
          // Lightbox indeksini, görselli öğeler arasındaki sıraya göre hesapla
          const imgIndex = item.src
            ? withImage.findIndex((w) => w === item)
            : -1;

          return (
            <figure
              key={item.caption + i}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-steel to-anthracite"
            >
              {item.src ? (
                <button
                  type="button"
                  onClick={() => setActive(imgIndex)}
                  className="absolute inset-0 h-full w-full cursor-zoom-in"
                  aria-label={`${item.caption} - büyüt`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
                  <ImageIcon className="h-8 w-8 text-white/20" />
                </div>
              )}

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite/90 to-transparent p-3 text-xs font-medium text-slate-200">
                {item.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Lightbox */}
      {active !== null && withImage[active] && (
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

          {withImage.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
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
                src={withImage[active].src as string}
                alt={withImage[active].alt}
                fill
                sizes="100vw"
                className="rounded-lg object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {withImage[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
