import { Quote } from "lucide-react";
import { reviews, getAggregateRating } from "@/data/reviews";
import StarRating from "./StarRating";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

/**
 * Müşteri yorumları bölümü (#yorumlar, Server Component).
 * Sayfada görünen puan ile JSON-LD AggregateRating tutarlıdır
 * (LocalBusiness şemasına lib/jsonld.ts üzerinden de eklenir).
 */
export default function Reviews() {
  const agg = getAggregateRating();

  return (
    <section id="yorumlar" className="bg-anthracite py-20 lg:py-28">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Müşteri Yorumları</span>
          <h2 className="section-title text-balance">Bizi Tercih Edenler Ne Diyor?</h2>

          {/* Toplam puan */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <StarRating value={agg.value} className="h-6 w-6" />
            <span className="text-lg font-bold text-white">
              {agg.value.toLocaleString("tr-TR")}
            </span>
            <span className="text-slate-400">
              / 5 · {agg.count} değerlendirme
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={`${r.name}-${r.date}`} delay={(i % 3) * 90} className="h-full">
            <figure
              className="flex h-full flex-col rounded-xl border border-white/10 bg-anthracite-light p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/30 hover:shadow-xl hover:shadow-black/30"
            >
              <Quote className="h-8 w-8 text-ember/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{r.name}</span>
                  <StarRating value={r.rating} />
                </div>
                {r.location && (
                  <span className="mt-1 block text-xs text-slate-500">
                    {r.location}
                  </span>
                )}
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton label="Siz de Teklif Alın" />
        </div>
      </div>
    </section>
  );
}
