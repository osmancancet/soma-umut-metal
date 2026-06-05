import { Recycle, Truck, Scale, Banknote, Factory, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Güncel Fiyat Garantisi",
    description:
      "Bakır, alüminyum ve demir hurda fiyatlarını günlük piyasaya göre belirliyor, en yüksek alım fiyatını sunuyoruz.",
  },
  {
    icon: Scale,
    title: "Hassas & Şeffaf Tartı",
    description:
      "Kalibreli kantarlarımızda tartım gözünüzün önünde yapılır. Gram şaşmaz, ödemeniz net olur.",
  },
  {
    icon: Truck,
    title: "Yerinde Söküm & Nakliye",
    description:
      "Fabrika, şantiye ve hane fazlası hurdalarınız için yerinde söküm ve ücretsiz nakliye hizmeti veriyoruz.",
  },
  {
    icon: Recycle,
    title: "Çevreci Geri Dönüşüm",
    description:
      "Topladığımız tüm metalleri doğaya kazandırıyor, sürdürülebilir bir geri dönüşüm zinciri kuruyoruz.",
  },
  {
    icon: Factory,
    title: "Sanayi & Tonajlı Alım",
    description:
      "Sanayi tesisleri ve toplu hurda için tonajlı alım, kurumsal fatura ve düzenli toplama anlaşmaları.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir & Anında Ödeme",
    description:
      "Tartı sonrası ödemeniz anında ve eksiksiz yapılır. Yılların verdiği güvenle çalışıyoruz.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-anthracite py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Neden Soma Umut Metal?</span>
          <h2 className="section-title">Hurdanız İçin Tam Hizmet</h2>
          <p className="mt-4 text-slate-400">
            Metal hurdanızı değerinde nakde çevirmeniz için ihtiyacınız olan
            her şey tek çatı altında.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-anthracite-light p-7 transition-all hover:-translate-y-1 hover:border-ember/40 hover:shadow-xl hover:shadow-ember/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ember/10 text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
