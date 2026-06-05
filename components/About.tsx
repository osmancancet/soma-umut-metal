import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

const highlights = [
  "Soma ve Manisa genelinde hızlı hizmet",
  "Demirli ve demir dışı tüm metallerin alımı",
  "Kurumsal ve bireysel müşterilere özel çözümler",
  "Lisanslı ve çevreye duyarlı geri dönüşüm süreci",
];

const figures = [
  { value: "15+", label: "Yıllık Tecrübe" },
  { value: "100%", label: "Şeffaf Tartı" },
  { value: "7/24", label: "WhatsApp Destek" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-anthracite-light py-20 lg:py-28">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Metin */}
          <div>
            <span className="eyebrow">Hakkımızda</span>
            <h2 className="section-title">
              Soma&apos;nın Güvenilir Hurda &amp; Metal Adresi
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              {site.name} olarak, Soma ve çevresinde uzun yıllardır hurda metal
              alımı ve geri dönüşümü alanında faaliyet gösteriyoruz.
              Sanayicisinden esnafına, fabrikasından hane halkına kadar herkese
              dürüst tartı, güncel fiyat ve hızlı ödeme garantisi veriyoruz.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Bakır, alüminyum, pirinç, demir ve çelik başta olmak üzere her
              türlü metali değerinde alıyor, ekonomiye ve doğaya geri
              kazandırıyoruz.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton label="Bizimle İletişime Geçin" />
            </div>
          </div>

          {/* Görsel + rakamlar */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-steel to-anthracite shadow-2xl">
              {/* Buraya istenirse tesisten bir görsel/Image eklenebilir */}
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.18),transparent_55%)]">
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
                  <span className="text-6xl font-black text-white/90">
                    Umut
                  </span>
                  <span className="text-xl font-semibold tracking-wide text-ember">
                    METAL
                  </span>
                  <span className="mt-2 text-sm text-slate-300">
                    {site.slogan}
                  </span>
                </div>
              </div>
            </div>

            {/* Rakamlar */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {figures.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-white/10 bg-anthracite p-4 text-center"
                >
                  <div className="text-2xl font-black text-ember">{f.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
