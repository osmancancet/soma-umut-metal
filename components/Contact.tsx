import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, telLink, mapsLink } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";
import QuoteForm from "./QuoteForm";

const items = [
  {
    icon: MapPin,
    label: "Adres",
    value: site.address.full,
    href: mapsLink,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: site.phoneDisplay,
    href: telLink,
    external: false,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: site.workingHours,
    href: undefined,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="bg-anthracite-light py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">İletişim</span>
          <h2 className="section-title">Hemen Teklif Alın</h2>
          <p className="mt-4 text-slate-400">
            Hurdanızı değerinde nakde çevirmek çok kolay. Aşağıdaki formu
            doldurun, WhatsApp'tan yazın veya bizi telefonla arayın.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* Sol: bilgiler + hızlı aksiyonlar */}
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="WhatsApp'tan Yazın" />
              <a href={telLink} className="btn-ember">
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {items.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <dt className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Icon className="h-5 w-5 text-ember" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm text-slate-400">{value}</dd>
                  </>
                );
                return (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-anthracite p-5"
                  >
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="block transition-colors hover:text-ember"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </dl>

            {/* Harita */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-anthracite shadow-xl">
              <iframe
                title={`${site.name} konum haritası`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.address.mapsQuery
                )}&output=embed`}
                className="h-full min-h-[280px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Sağ: teklif formu */}
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
