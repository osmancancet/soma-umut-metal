import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Product, getCategory } from "@/data/products";
import { getProductVisual } from "@/lib/productVisuals";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Ürün kartı (Server Component) — fotoğraf yerine ürüne özel ikon + degrade.
 * - Başlık/medya, ürün detay sayfasına (/urunler/[slug]) link verir.
 * - Her kartta ürüne özel "WhatsApp'tan Teklif Al" butonu bulunur.
 */
export default function ProductCard({ product }: { product: Product }) {
  const href = `/urunler/${product.id}`;
  const { icon: Icon, gradient, accent } = getProductVisual(product);
  const categoryName = getCategory(product.category)?.name;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-anthracite-light transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-2xl hover:shadow-black/40">
      {/* İkonlu medya alanı */}
      <Link
        href={href}
        aria-label={`${product.name} detayları`}
        className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-steel/40 to-anthracite"
      >
        {/* Kategori degradesi */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
        />
        {/* Izgara dokusu */}
        <div className="bg-grid absolute inset-0 opacity-40" />
        {/* Ember parıltısı */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/20 blur-3xl transition-all duration-500 group-hover:bg-ember/30" />

        {/* Filigran (büyük arka ikon) */}
        <Icon
          className={`absolute -bottom-5 -right-4 h-32 w-32 ${accent} opacity-10 transition-transform duration-500 group-hover:scale-110`}
          strokeWidth={1.25}
        />

        {/* Ön plan ikon karosu */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-anthracite/60 text-ember shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-8 w-8" strokeWidth={1.75} />
          </div>
        </div>

        {/* Öne çıkan rozeti */}
        {product.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white shadow-lg">
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
        {categoryName && (
          <span className={`text-xs font-semibold uppercase tracking-wider ${accent}`}>
            {categoryName}
          </span>
        )}
        <h3 className="mt-1 text-lg font-semibold text-white">
          <Link href={href} className="transition-colors hover:text-ember">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {product.description}
        </p>

        <Link
          href={href}
          className="group/link mt-3 inline-flex items-center gap-1 text-sm font-medium text-ember transition-colors hover:text-ember-light"
        >
          Detayları Gör
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>

        <div className="mt-4">
          <WhatsAppButton productName={product.name} label="Teklif Al" fullWidth />
        </div>
      </div>
    </article>
  );
}
