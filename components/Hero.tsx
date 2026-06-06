import { ArrowRight, Phone, Truck, Scale, Recycle, ChevronDown } from "lucide-react";
import { site, telLink } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

const stats = [
  { icon: Scale, label: "Hassas ve Şeffaf Tartı" },
  { icon: Recycle, label: "Lisanslı Geri Dönüşüm" },
  { icon: Truck, label: "Yerinde Söküm & Nakliye" },
];

/**
 * Hero bölümü — animasyonlu degrade/ızgara arka plan, opsiyonel drone videosu,
 * staggered (sıralı) giriş animasyonları ve scroll göstergesi.
 *
 * Video dosyasını /public/videos/drone-hero.mp4 olarak ekleyin; yoksa
 * animasyonlu metalik arka plan görünür, site yine düzgün çalışır.
 */
export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Arka plan katmanı */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-anthracite via-steel to-anthracite-light" />

        {/* Drone arka plan videosu (varsa) */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/drone-hero.mp4" type="video/mp4" />
        </video>

        {/* Animasyonlu ışık blob'ları */}
        <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-ember/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 animate-blob rounded-full bg-sky-500/10 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-float-slow rounded-full bg-ember/10 blur-3xl" />

        {/* Endüstriyel ızgara dokusu */}
        <div className="bg-grid absolute inset-0 opacity-50" />

        {/* Okunabilirlik için koyu overlay */}
        <div className="absolute inset-0 bg-anthracite/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/40 to-transparent" />
      </div>

      {/* İçerik */}
      <div className="container-site relative py-28 lg:py-32">
        <div className="max-w-3xl">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-sm font-medium text-ember-light opacity-0"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
            {site.address.district} / {site.address.city} — Hurda &amp; Metal
            Geri Dönüşüm
          </span>

          <h1
            className="mt-6 animate-fade-up text-4xl font-black leading-tight tracking-tight text-white text-balance opacity-0 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Hurdanızı{" "}
            <span className="text-gradient animate-gradient bg-[length:200%_auto]">
              En İyi Fiyata
            </span>{" "}
            Değerlendirin
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 text-pretty opacity-0"
            style={{ animationDelay: "240ms" }}
          >
            {site.name}, Soma ve çevresinde bakır, alüminyum, demir, pirinç ve
            her türlü metal hurda alımında güvenilir adresinizdir. Güncel hurda
            fiyatları için WhatsApp'tan saniyeler içinde teklif alın.
          </p>

          {/* CTA'lar */}
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row"
            style={{ animationDelay: "360ms" }}
          >
            <WhatsAppButton label="WhatsApp'tan Teklif Al" />
            <a href="#urunler" className="btn-outline group">
              Ürünleri İncele
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={telLink} className="btn-outline sm:hidden">
              <Phone className="h-4 w-4" />
              Hemen Ara
            </a>
          </div>

          {/* Güven rozetleri */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="flex animate-fade-up items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 opacity-0 backdrop-blur-sm transition-colors hover:border-ember/40 hover:bg-white/10"
                style={{ animationDelay: `${480 + i * 120}ms` }}
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

      {/* Scroll göstergesi */}
      <a
        href="#hizmetler"
        aria-label="Aşağı kaydır"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-ember sm:flex"
      >
        <span className="text-xs">Keşfet</span>
        <ChevronDown className="h-5 w-5 animate-bounce-subtle" />
      </a>
    </section>
  );
}
