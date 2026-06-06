import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Product, getCategory } from "@/data/products";
import { getProductVisual } from "@/lib/productVisuals";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Ürün kartı (Server Component) — fotoğrafsız, sade ikonlu tasarım.
 * Küçük ikon rozeti + kategori + açıklama + WhatsApp teklif butonu.
 */
export default function ProductCard({ product }: { product: Product }) {
  const href = `/urunler/${product.id}`;
  const { icon: Icon, accent } = getProductVisual(product);
  const categoryName = getCategory(product.category)?.name;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-anthracite-light p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-2xl hover:shadow-black/40">
      {/* Köşe parıltısı (dekoratif) */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-ember/10 blur-2xl transition-all duration-500 group-hover:bg-ember/20" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ember/10 text-ember transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-ember group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </div>
        {product.featured && (
          <span className="rounded-full bg-ember/15 px-3 py-1 text-xs font-semibold text-ember-light">
            Öne Çıkan
          </span>
        )}
      </div>

      {categoryName && (
        <span
          className={`mt-5 text-xs font-semibold uppercase tracking-wider ${accent}`}
        >
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

      {product.tags && product.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={href}
        className="group/link mt-4 inline-flex items-center gap-1 text-sm font-medium text-ember transition-colors hover:text-ember-light"
      >
        Detayları Gör
        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>

      <div className="mt-4">
        <WhatsAppButton productName={product.name} label="Teklif Al" fullWidth />
      </div>
    </article>
  );
}
