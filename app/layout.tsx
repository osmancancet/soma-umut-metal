import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Soma Hurda ve Metal Geri Dönüşüm`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Soma Hurda ve Metal Geri Dönüşüm`,
    description: site.description,
    // og:image, app/opengraph-image.tsx ile otomatik üretilir.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Soma Hurda ve Metal Geri Dönüşüm`,
    description: site.description,
    // twitter:image, og:image üzerinden otomatik gelir.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        {/* Yerel işletme + web sitesi yapısal verisi (Local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
