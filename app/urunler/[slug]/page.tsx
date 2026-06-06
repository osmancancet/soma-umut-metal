import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  getCategory,
} from "@/data/products";
import { getProductVisual } from "@/lib/productVisuals";
import { site, telLink } from "@/lib/site";
import { productJsonLd } from "@/lib/jsonld";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

// Tüm ürünleri build anında statik üret (SEO + hız)
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Ürün Bulunamadı" };

  const title = `${product.name} Alımı (Soma / Manisa)`;
  const description = `${product.description} ${site.name} ile ${product.name.toLowerCase()} için güncel fiyat ve teklif WhatsApp'tan.`;

  return {
    title,
    description,
    alternates: { canonical: `/urunler/${product.id}` },
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description,
      url: `${site.url}/urunler/${product.id}`,
    },
  };
}

const sellPoints = [
  "Bölgenin en yüksek güncel alım fiyatı",
  "Hassas ve şeffaf tartı",
  "Yerinde söküm ve nakliye imkânı",
  "Tartı sonrası anında ödeme",
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const { icon: Icon, gradient, accent } = getProductVisual(product);

  return (
    <div className="bg-anthracite pt-24 lg:pt-32">
      {/* Product yapısal verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />

      <div className="container-site py-12 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Ürünler", href: "/#urunler" },
            ...(category ? [{ name: category.name, href: "/#urunler" }] : []),
            { name: product.name },
          ]}
        />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          {/* İkonlu görsel panel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-steel/40 to-anthracite">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-16 -top-16 h-56 w-56 animate-blob rounded-full bg-ember/20 blur-3xl" />
            <Icon
              className={`absolute -bottom-10 -right-8 h-64 w-64 ${accent} opacity-10`}
              strokeWidth={1}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-anthracite/60 text-ember shadow-2xl backdrop-blur-sm">
                <Icon className="h-14 w-14" strokeWidth={1.5} />
              </div>
              {category && (
                <span className={`text-sm font-semibold uppercase tracking-widest ${accent}`}>
                  {category.name}
                </span>
              )}
            </div>
            {product.featured && (
              <span className="absolute left-4 top-4 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white shadow-lg">
                Öne Çıkan
              </span>
            )}
          </div>

          {/* Bilgi */}
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white text-balance sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 leading-relaxed text-slate-300 text-pretty">
              {product.description}
            </p>

            {product.tags && product.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {sellPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <span className="text-sm text-slate-300">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                productName={product.name}
                label="WhatsApp'tan Teklif Al"
              />
              <a href={telLink} className="btn-outline">
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {product.name} için güncel fiyat piyasaya göre değişir; kesin
              teklif WhatsApp veya telefon ile verilir.
            </p>
          </div>
        </div>

        {/* İlgili ürünler */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-white">Benzer Malzemeler</h2>
              <Link
                href="/#urunler"
                className="inline-flex items-center gap-1 text-sm font-medium text-ember hover:text-ember-light"
              >
                Tümü
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
