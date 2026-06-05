import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { site, telLink, mapsLink } from "@/lib/site";

const navItems = [
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Ürünler", href: "/#urunler" },
  { label: "Yorumlar", href: "/#yorumlar" },
  { label: "S.S.S.", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Footer() {
  const year = 2026; // build anında sabitlenir; istenirse new Date().getFullYear() yapılabilir

  const socials = [
    { url: site.social.instagram, Icon: Instagram, label: "Instagram" },
    { url: site.social.facebook, Icon: Facebook, label: "Facebook" },
    { url: site.social.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((s) => s.url);

  return (
    <footer className="border-t border-white/10 bg-anthracite-light">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-ember font-black text-white">
                SU
              </span>
              <span className="text-lg font-bold text-white">
                Soma Umut <span className="text-ember">Metal</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.address.district} / {site.address.city} bölgesinde her türlü
              hurda ve metal alımı, geri dönüşümü. Güvenilir tartı, güncel
              fiyat.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-ember hover:text-ember"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Menü */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Menü
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-ember"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-ember"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <span>{site.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={telLink}
                  className="flex items-center gap-3 transition-colors hover:text-ember"
                >
                  <Phone className="h-5 w-5 shrink-0 text-ember" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-ember"
                >
                  <Mail className="h-5 w-5 shrink-0 text-ember" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-ember" />
                <span>{site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/gizlilik" className="transition-colors hover:text-ember">
              Gizlilik Politikası
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/kvkk" className="transition-colors hover:text-ember">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
