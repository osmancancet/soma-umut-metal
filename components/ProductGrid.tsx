"use client";

import { useState, useMemo } from "react";
import { products, categories, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import WhatsAppButton from "./WhatsAppButton";

type Filter = "all" | ProductCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Tümü" },
  ...categories.map((c) => ({ value: c.slug as Filter, label: c.name })),
];

/**
 * Ürün ızgarası — kategori filtreli (Client Component, filtre etkileşimi için).
 * Izgara: mobil 1, tablet 2, masaüstü 3-4 sütun (rules.md).
 */
export default function ProductGrid() {
  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="urunler" className="bg-anthracite py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Aldığımız Malzemeler</span>
          <h2 className="section-title">Ürün &amp; Hurda Kataloğu</h2>
          <p className="mt-4 text-slate-400">
            Aşağıdaki malzemelerin tamamını alıyoruz. İlgilendiğiniz ürün için
            anında WhatsApp'tan güncel fiyat teklifi alabilirsiniz.
          </p>
        </div>

        {/* Kategori filtreleri */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f.value
                  ? "bg-ember text-white"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Izgara */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Alt CTA — aradığını bulamayanlar için */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-anthracite-light to-steel/40 p-8 text-center sm:p-10">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Listede olmayan bir malzemeniz mi var?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Her türlü metal ve hurdayı alıyoruz. Elinizdekinin fotoğrafını
            WhatsApp'tan gönderin, size en kısa sürede fiyat verelim.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton label="Fotoğraf Gönder, Fiyat Al" />
          </div>
        </div>
      </div>
    </section>
  );
}
