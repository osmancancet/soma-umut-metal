import Image from "next/image";
import Link from "next/link";
import { Boxes, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Tek bir ürün kartı (Server Component).
 * - Görsel/başlık, ürün detay sayfasına (/urunler/[slug]) link verir.
 * - Görsel yoksa ikon + degrade placeholder gösterilir (site bozulmaz).
 * - Her kartta ürüne özel "WhatsApp'tan Teklif Al" butonu bulunur.
 */
export default function ProductCard({ product }: { product: Product }) {
  const href = `/urunler/${product.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-anthracite-light transition-all hover:-translate-y-1 hover:border-ember/40 hover:shadow-xl hover:shadow-black/40">
      {/* Görsel alanı (detay sayfasına link) */}
      <Link
        href={href}
        className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-steel to-anthracite"
        aria-label={`${product.name} detayları`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} - Soma hurda alımı`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Boxes className="h-16 w-16 text-white/20" />
          </div>
        )}

        {/* Öne çıkan rozeti */}
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Öne Çıkan
          </span>
        )}

        {/* Etiketler */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-anthracite/80 px-2.5 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>

      {/* İçerik */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">
          <Link href={href} className="transition-colors hover:text-ember">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {product.description}
        </p>

        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ember transition-colors hover:text-ember-light"
        >
          Detayları Gör
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-4">
          <WhatsAppButton productName={product.name} label="Teklif Al" fullWidth />
        </div>
      </div>
    </article>
  );
}
