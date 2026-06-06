/**
 * Yapısal Veri (JSON-LD) Üreticileri — Local SEO
 * ------------------------------------------------------------------
 * Google'ın işletmeyi "yerel işletme / geri dönüşüm merkezi" olarak
 * anlaması, harita ve zengin sonuçlarda (rich results) görünmesi için.
 */
import { site, socialLinks } from "./site";
import { products, categories, type Product } from "@/data/products";
import { faqs } from "@/data/faq";
import { reviews, getAggregateRating } from "@/data/reviews";

/** Yerel işletme + sunulan hurda/metal ürünleri kataloğu. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["RecyclingCenter", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    slogan: site.slogan,
    description: site.description,
    url: site.url,
    telephone: `+${site.phoneRaw}`,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Nakit, Havale/EFT",
    foundingDate: site.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.full,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`,
    areaServed: ["Soma", "Kırkağaç", "Akhisar", "Manisa", "Balıkesir"].map(
      (name) => ({ "@type": "City", name })
    ),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getAggregateRating().value,
      reviewCount: getAggregateRating().count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
    })),
    makesOffer: {
      "@type": "Offer",
      description:
        "Bakır, alüminyum, demir, pirinç ve her türlü hurda metal alımı.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hurda ve Metal Alımı",
      itemListElement: categories.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.name,
        itemListElement: products
          .filter((p) => p.category === cat.slug)
          .map((p) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: p.name,
              category: cat.name,
            },
          })),
      })),
    },
  };
}

/** Sıkça Sorulan Sorular — FAQ rich result için. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Tek bir ürün için Product şeması (ürün detay sayfasında kullanılır). */
export function productJsonLd(product: Product) {
  const category = categories.find((c) => c.slug === product.category);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${site.url}/urunler/${product.id}#product`,
    name: product.name,
    description: product.description,
    ...(category ? { category: category.name } : {}),
    image: `${site.url}/opengraph-image`,
    brand: { "@type": "Brand", name: site.name },
    url: `${site.url}/urunler/${product.id}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "TRY",
      seller: { "@id": `${site.url}/#business` },
      url: `${site.url}/urunler/${product.id}`,
      // Hurda fiyatı günlük değiştiği için sabit fiyat verilmez;
      // teklif WhatsApp üzerinden alınır.
      description: "Güncel fiyat için WhatsApp'tan teklif alınır.",
    },
  };
}

/** Breadcrumb (sayfa yolu) şeması. items: [{name, url}] */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Web sitesi şeması (site adı + arama eylemi temeli). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#business` },
  };
}
