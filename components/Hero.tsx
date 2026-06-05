import { ArrowRight, Phone, Truck, Scale, BadgePercent } from "lucide-react";
import { site, telLink } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

const stats = [
  { icon: Scale, label: "Hassas ve Şeffaf Tartı" },
  { icon: BadgePercent, label: "Güncel Piyasa Fiyatı" },
  { icon: Truck, label: "Yerinde Söküm & Nakliye" },
];

/**
 * Hero bölümü — arka planda drone videosu, üzerinde koyu overlay.
 *
 * Video dosyasını /public/videos/drone-hero.mp4 olarak ekleyin.
 * Dosya yoksa arka plandaki degrade görünür, site yine düzgün çalışır.
 * Poster (ilk kare) için /public/images/hero-poster.jpg eklenebilir.
 */
export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Arka plan degrade (video yüklenene / yokken görünür) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-anthracite via-steel to-anthracite-light" />

      {/* Drone arka plan videosu */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/drone-hero.mp4" type="video/mp4" />
      </video>

      {/* Koyu overlay — yazıların okunabilirliği için */}
      <div className="absolute inset-0 -z-10 bg-anthracite/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-anthracite via-anthracite/40 to-transparent" />

      {/* İçerik */}
      <div className="container-site relative py-28 lg:py-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-sm font-medium text-ember-light">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
            {site.address.district} / {site.address.city} — Hurda &amp; Metal
            Geri Dönüşüm
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hurdanızı{" "}
            <span className="text-ember">En İyi Fiyata</span> Değerlendirin
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {site.name}, Soma ve çevresinde bakır, alüminyum, demir, pirinç ve
            her türlü metal hurda alımında güvenilir adresinizdir. Güncel hurda
            fiyatları için WhatsApp'tan saniyeler içinde teklif alın.
          </p>

          {/* CTA'lar */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="WhatsApp'tan Teklif Al" />
            <a href="#urunler" className="btn-outline">
              Ürünleri İncele
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={telLink} className="btn-outline sm:hidden">
              <Phone className="h-4 w-4" />
              Hemen Ara
            </a>
          </div>

          {/* Güven rozetleri */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 shrink-0 text-ember" />
                <span className="text-sm font-medium text-slate-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt kenar geçişi */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
