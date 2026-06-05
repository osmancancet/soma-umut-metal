/**
 * Müşteri Yorumları (Statik / Düzenlenebilir).
 * ------------------------------------------------------------------
 * NOT: Aşağıdaki yorumlar ÖRNEK/temsilîdir. Gerçek müşteri yorumlarınızla
 * (mümkünse Google Yorumlar'dan) değiştirin. JSON-LD AggregateRating,
 * bu listedeki gerçek puanlardan hesaplanır; Google, sayfada GÖRÜNEN
 * puanla yapısal verinin tutarlı olmasını ister.
 */

export interface Review {
  name: string;
  /** 1–5 arası puan */
  rating: number;
  text: string;
  /** ISO tarih (yyyy-mm-dd) */
  date: string;
  /** Konum/etiket (ör. "Soma") */
  location?: string;
}

export const reviews: Review[] = [
  {
    name: "Mehmet K.",
    rating: 5,
    text: "Fabrikamızın demir hurdasını yerinden söküp aldılar, nakliye dahil. Tartı şeffaftı, ödeme aynı gün yapıldı. Soma'da güvenebileceğiniz bir firma.",
    date: "2026-05-18",
    location: "Soma",
  },
  {
    name: "Ayşe T.",
    rating: 5,
    text: "Evden çıkan eski beyaz eşya ve kabloları aldılar. WhatsApp'tan fotoğraf attım, hemen fiyat verdiler. Çok ilgili ve dürüstler.",
    date: "2026-05-02",
    location: "Soma",
  },
  {
    name: "Hüseyin Y.",
    rating: 5,
    text: "Bakır ve pirinç fiyatları bölgedeki en iyisiydi. Kantar gözümün önündeydi, gram şaşmadı. Kesinlikle tavsiye ederim.",
    date: "2026-04-21",
    location: "Kırkağaç",
  },
  {
    name: "Sanayi Ltd. Şti.",
    rating: 5,
    text: "Üretim fireleri için düzenli toplama anlaşması yaptık. Faturalı, zamanında ve profesyonel çalışıyorlar. Kurumsal iş için ideal.",
    date: "2026-04-09",
    location: "Manisa",
  },
  {
    name: "Ramazan D.",
    rating: 4,
    text: "Hurda aküleri sorunsuz aldılar, lisanslı süreç olması güven verdi. Yoğun günde biraz bekledik ama fiyat ve hizmet gayet iyiydi.",
    date: "2026-03-27",
    location: "Soma",
  },
  {
    name: "Fatih S.",
    rating: 5,
    text: "Eski çelik konstrüksiyon çatımızı komple söküp aldılar. Hem yerimiz boşaldı hem de iyi para kazandık. Teşekkürler.",
    date: "2026-03-15",
    location: "Akhisar",
  },
];

/** Görünen puanlardan AggregateRating değerleri. */
export function getAggregateRating() {
  const count = reviews.length;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const average = count > 0 ? sum / count : 0;
  return {
    count,
    // 1 ondalık (ör. 4.8)
    value: Math.round((average + Number.EPSILON) * 10) / 10,
  };
}
