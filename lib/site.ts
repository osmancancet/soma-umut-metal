/**
 * Soma Umut Metal — Site Geneli Yapılandırma
 * ------------------------------------------------------------------
 * İşletmeye ait tüm iletişim bilgileri TEK yerden buradan yönetilir.
 *
 * ⚠️ ÖNEMLİ: Aşağıdaki telefon numarasını ve diğer bilgileri
 * işletmenin GERÇEK bilgileriyle değiştirin.
 *
 * WhatsApp numarası uluslararası formatta, başında "+" veya boşluk
 * OLMADAN yazılmalıdır (wa.me bunu ister). Örn: 905xxxxxxxxx
 */

export const site = {
  name: "Soma Umut Metal",
  legalName: "Soma Umut Metal Hurda ve Geri Dönüşüm",
  slogan: "Hurdanız Değerinde, Hizmetimiz Güvenilir",
  description:
    "Soma / Manisa bölgesinde bakır, alüminyum, demir, pirinç ve her türlü hurda metal alım-satımı ve geri dönüşümü. Güncel hurda fiyatları için WhatsApp'tan hemen teklif alın.",

  // --- İletişim ---
  // WhatsApp & telefon için kullanılacak ham numara (sadece rakam, ülke koduyla)
  phoneRaw: "905555555555", // ⚠️ DEĞİŞTİRİN: işletmenin gerçek numarası
  phoneDisplay: "+90 555 555 55 55", // ekranda görünecek biçim
  whatsappRaw: "905555555555", // ⚠️ DEĞİŞTİRİN (genelde telefonla aynı)

  email: "info@somaumutmetal.com", // ⚠️ DEĞİŞTİRİN

  address: {
    full: "Sanayi Mah. Hurdacılar Sitesi, Soma / Manisa",
    city: "Manisa",
    district: "Soma",
    // Google Maps embed/yönlendirme için (gerçek koordinat/adresle güncelleyin)
    mapsQuery: "Soma Umut Metal, Soma, Manisa",
  },

  workingHours: "Pzt - Cmt: 08:00 - 19:00",

  // İşletmenin kuruluş yılı (yapısal veri / "X+ yıl tecrübe" için)
  foundingYear: "2008", // ⚠️ Gerçek kuruluş yılıyla güncelleyin

  // Harita / yapısal veri için yaklaşık koordinatlar (Soma merkez)
  // ⚠️ İşletmenin GERÇEK konumuyla güncelleyin (Google Maps > sağ tık > koordinat)
  geo: {
    latitude: 39.1857,
    longitude: 27.6094,
  },

  // --- Sosyal Medya (opsiyonel; boş bırakılanlar gösterilmez) ---
  social: {
    instagram: "", // örn: "https://instagram.com/somaumutmetal"
    facebook: "",
    youtube: "",
  },

  // --- SEO ---
  url: "https://www.somaumutmetal.com", // ⚠️ Yayına çıkınca gerçek domain
  keywords: [
    "Soma hurda",
    "Soma hurdacı",
    "Soma hurda fiyatları",
    "Manisa hurda fiyatları",
    "hurda bakır fiyatları",
    "hurda alüminyum fiyatları",
    "hurda pirinç fiyatı",
    "demir hurda fiyatı",
    "metal geri dönüşüm Soma",
    "Soma metal alımı",
    "hurda demir alımı Manisa",
    "alüminyum hurda alımı",
    "kablo hurdası alımı",
    "hurda akü alımı Soma",
    "paslanmaz çelik hurda",
    "ikinci el malzeme Soma",
    "hurda araç alımı",
    "sanayi hurdası alımı",
    "Soma Umut Metal",
  ],
} as const;

/**
 * Verilen mesajla WhatsApp yönlendirme linki üretir.
 * Mesaj `encodeURIComponent` ile güvenli hale getirilir.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Bir ürün için otomatik doldurulmuş teklif mesajı içeren WhatsApp linki. */
export function productQuoteLink(productName: string): string {
  return whatsappLink(
    `Merhaba, "${productName}" için fiyat teklifi almak istiyorum.`
  );
}

/** Genel teklif/iletişim için WhatsApp linki. */
export const generalWhatsappLink = whatsappLink(
  `Merhaba, ${site.name} ile iletişime geçmek istiyorum.`
);

/** tel: linki (rakamlar başında +). */
export const telLink = `tel:+${site.phoneRaw}`;

/** Google Maps yönlendirme linki. */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery
)}`;

/** Dolu olan sosyal medya linkleri (JSON-LD `sameAs` ve footer için). */
export const socialLinks: string[] = [
  site.social.instagram,
  site.social.facebook,
  site.social.youtube,
].filter(Boolean);
