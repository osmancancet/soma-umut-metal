"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

// Bölüm linkleri "/#..." biçiminde — alt sayfalardan da ana sayfaya gider.
const navItems = [
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Ürünler", href: "/#urunler" },
  { label: "Yorumlar", href: "/#yorumlar" },
  { label: "S.S.S.", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Sadece ana sayfanın en üstünde header şeffaf; diğer sayfalarda dolu.
  const isHome = pathname === "/";

  // Sayfa kaydırıldığında header'a arka plan ekle
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken arka plan kaydırmasını engelle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open || !isHome
          ? "border-b border-white/10 bg-anthracite/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded bg-ember font-black text-white">
            SU
          </span>
          <span className="text-lg font-bold leading-tight text-white sm:text-xl">
            Soma Umut <span className="text-ember">Metal</span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-200 transition-colors hover:text-ember"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Masaüstü aksiyonlar */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-ember"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <WhatsAppButton label="Teklif Al" />
        </div>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobil menü paneli */}
      {open && (
        <div className="border-t border-white/10 bg-anthracite lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-ember"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-3 px-3">
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 rounded-lg border border-steel-light px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <WhatsAppButton fullWidth />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
