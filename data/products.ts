/**
 * Soma Umut Metal — Ürün / Malzeme Kataloğu (Statik Veri Katmanı)
 * ------------------------------------------------------------------
 * Şimdilik veriler statik tutulur. İleride bir CMS veya API'ye
 * geçildiğinde sadece bu dosyadaki `products` ve `categories`
 * dizilerini besleyen kaynak değişir; bileşenler aynı kalır.
 *
 * NOT: Aşağıdaki ürünler sektöre uygun TAHMİNİ/örnek katalogdur.
 * İşletmenin gerçekte aldığı malzemelere göre ekleme/çıkarma yapın.
 *
 * Görseller: /public/images/products/ altına ürünün `image` yoluyla
 * eklenir. Henüz görsel yoksa bileşen otomatik bir placeholder
 * (ikon + degrade) gösterir.
 */

export type ProductCategory =
  | "demir-disi"
  | "demir-celik"
  | "kablo-elektronik"
  | "ikinci-el";

export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  /** Kart üzerinde gösterilecek kısa etiketler (ör. "Yüksek Alım") */
  tags?: string[];
  /** /public/images/products/... yolu. Yoksa placeholder gösterilir. */
  image?: string;
  /** true ise ana sayfada "Öne Çıkan" rozetiyle vurgulanır. */
  featured?: boolean;
}

export const categories: Category[] = [
  {
    slug: "demir-disi",
    name: "Demir Dışı Metaller",
    description:
      "Bakır, alüminyum, pirinç, kurşun ve çinko gibi yüksek değerli demir dışı metaller.",
  },
  {
    slug: "demir-celik",
    name: "Demir & Çelik",
    description:
      "Demir hurdası, sac, talaş, döküm ve paslanmaz çelik malzemeler.",
  },
  {
    slug: "kablo-elektronik",
    name: "Kablo & Elektronik",
    description:
      "Her tür kablo, trafo, elektrik motoru ve elektronik hurda alımı.",
  },
  {
    slug: "ikinci-el",
    name: "İkinci El & Hurda Malzeme",
    description:
      "Tekrar kullanılabilir sac, profil, boru, makine ve hurda araç.",
  },
];

export const products: Product[] = [
  // ---------------- Demir Dışı Metaller ----------------
  {
    id: "bakir-hurdasi",
    name: "Bakır Hurdası",
    category: "demir-disi",
    description:
      "Kızıl bakır, levha ve boru bakırı dahil her türlü bakır hurdası. Soma'nın en yüksek hurda bakır alım fiyatları.",
    tags: ["Yüksek Alım", "Günlük Fiyat"],
    image: "/images/products/bakir.jpg",
    featured: true,
  },
  {
    id: "kablo-bakiri",
    name: "Kablo & Bobin Bakırı",
    category: "demir-disi",
    description:
      "Sıyrılmış kablo bakırı, motor ve trafo bobini bakırı. Saflık oranına göre en doğru fiyatlandırma.",
    tags: ["Yüksek Alım"],
    image: "/images/products/kablo-bakiri.jpg",
  },
  {
    id: "aluminyum-hurdasi",
    name: "Alüminyum Hurdası",
    category: "demir-disi",
    description:
      "Hurda alüminyum levha, kutu ve karışık alüminyum alımı. Sanayi ve hane fazlası için anında değerlendirme.",
    tags: ["Günlük Fiyat"],
    image: "/images/products/aluminyum.jpg",
    featured: true,
  },
  {
    id: "aluminyum-profil",
    name: "Alüminyum Profil & Döküm",
    category: "demir-disi",
    description:
      "Pencere/cephe profili, döküm ve talaş alüminyum. Temiz profil için ayrı, yüksek fiyat.",
    tags: ["Hassas Tartı"],
    image: "/images/products/aluminyum-profil.jpg",
  },
  {
    id: "pirinc-hurdasi",
    name: "Pirinç Hurdası",
    category: "demir-disi",
    description:
      "Sarı pirinç, kırpıntı, musluk ve döküm pirinç malzeme alımı. Şeffaf tartı, güncel pirinç fiyatı.",
    tags: ["Günlük Fiyat"],
    image: "/images/products/pirinc.jpg",
  },
  {
    id: "bronz-hurdasi",
    name: "Bronz & Sarı Döküm",
    category: "demir-disi",
    description:
      "Bronz yatak, rakor, vana ve sarı döküm parçaları. Alaşıma göre değerinde alım.",
    image: "/images/products/bronz.jpg",
  },
  {
    id: "kursun-hurdasi",
    name: "Kurşun Hurdası",
    category: "demir-disi",
    description:
      "Kurşun levha, boru ve sanayi kurşunu alımı. Çevreye duyarlı, lisanslı geri dönüşüm süreci.",
    tags: ["Lisanslı Süreç"],
    image: "/images/products/kursun.jpg",
  },
  {
    id: "hurda-aku",
    name: "Hurda Akü",
    category: "demir-disi",
    description:
      "Araç, jeneratör ve UPS aküleri. Lisanslı toplama ve geri dönüşüm; tonajlı akü alımı yapılır.",
    tags: ["Lisanslı Süreç"],
    image: "/images/products/aku.jpg",
  },
  {
    id: "cinko-hurdasi",
    name: "Çinko Hurdası",
    category: "demir-disi",
    description:
      "Çinko levha, döküm ve galvaniz kaplama atıkları. Endüstriyel çinko hurdası alımı.",
    image: "/images/products/cinko.jpg",
  },
  {
    id: "krom-nikel",
    name: "Krom & Nikel",
    category: "demir-disi",
    description:
      "Krom, nikel ve özel alaşımlı metallerin alımı ve geri dönüşümü. Analize göre fiyatlandırma.",
    image: "/images/products/krom.jpg",
  },

  // ---------------- Demir & Çelik ----------------
  {
    id: "demir-hurdasi",
    name: "Demir Hurdası (Ağır / Ekstra)",
    category: "demir-celik",
    description:
      "Ağır demir, çelik konstrüksiyon ve karışık demir hurdası. Tonajlı alımlarda yerinde söküm ve nakliye.",
    tags: ["Nakliye Dahil", "Tonajlı Alım"],
    image: "/images/products/demir.jpg",
    featured: true,
  },
  {
    id: "sac-hurdasi",
    name: "Sac Hurdası",
    category: "demir-celik",
    description:
      "İnce/kalın sac, kırpıntı sac ve pres balya sac alımı. Sanayi fireleri için düzenli toplama.",
    tags: ["Tonajlı Alım"],
    image: "/images/products/sac.jpg",
  },
  {
    id: "celik-talasi",
    name: "Çelik & Demir Talaşı",
    category: "demir-celik",
    description:
      "Torna, freze ve işleme talaşı. Yağlı/temiz talaş ayrımıyla doğru fiyatlandırma.",
    image: "/images/products/talas.jpg",
  },
  {
    id: "dokum-hurdasi",
    name: "Döküm (Pik) Hurdası",
    category: "demir-celik",
    description:
      "Motor bloğu, radyatör ve sanayi döküm parçaları dahil pik döküm hurdası alımı.",
    tags: ["Tonajlı Alım"],
    image: "/images/products/dokum.jpg",
  },
  {
    id: "paslanmaz-celik",
    name: "Paslanmaz Çelik (304 / 316)",
    category: "demir-celik",
    description:
      "Paslanmaz sac, boru, tank ve mutfak ekipmanı hurdası. Tüm kalitelerde alım, magnet testiyle ayrım.",
    tags: ["Tüm Kaliteler"],
    image: "/images/products/paslanmaz.jpg",
    featured: true,
  },
  {
    id: "ray-hurdasi",
    name: "Ray & Demiryolu Hurdası",
    category: "demir-celik",
    description:
      "Ray, makas ve ağır çelik profil hurdası. Komple söküm ve nakliye dahil tonajlı alım.",
    tags: ["Tonajlı Alım"],
    image: "/images/products/ray.jpg",
  },
  {
    id: "dkp-galvaniz-sac",
    name: "DKP & Galvaniz Sac",
    category: "demir-celik",
    description:
      "Beyaz eşya ve otomotiv kaynaklı DKP sac, galvaniz ve kaplamalı sac hurdası.",
    image: "/images/products/dkp.jpg",
  },

  // ---------------- Kablo & Elektronik ----------------
  {
    id: "kablo-hurdasi",
    name: "Kablo Hurdası",
    category: "kablo-elektronik",
    description:
      "İnce/kalın enerji, telefon ve veri kabloları. Bakır oranına göre en yüksek kablo hurdası fiyatı.",
    tags: ["Bakır Oranına Göre"],
    image: "/images/products/kablo.jpg",
    featured: true,
  },
  {
    id: "elektrik-motoru",
    name: "Elektrik Motoru & Jeneratör",
    category: "kablo-elektronik",
    description:
      "Hurda elektrik motorları, pompa, kompresör ve jeneratör alımı. Bakır bobin içeriğiyle değerlendirilir.",
    image: "/images/products/motor.jpg",
  },
  {
    id: "trafo-hurdasi",
    name: "Trafo Hurdası",
    category: "kablo-elektronik",
    description:
      "Kuru tip ve yağlı tip trafo hurdası. Bakır/alüminyum sargı içeriğine göre alım.",
    image: "/images/products/trafo.jpg",
  },
  {
    id: "elektronik-hurda",
    name: "Elektronik Hurda (PCB)",
    category: "kablo-elektronik",
    description:
      "Anakart, devre kartı, sunucu ve telekom ekipmanı. Değerli metal içeriğine göre fiyatlandırma.",
    image: "/images/products/elektronik.jpg",
  },
  {
    id: "beyaz-esya-klima",
    name: "Beyaz Eşya & Klima Hurdası",
    category: "kablo-elektronik",
    description:
      "Buzdolabı, çamaşır makinesi, klima ve diğer beyaz eşya hurdası. Yerinden toplama yapılır.",
    tags: ["Yerinden Alım"],
    image: "/images/products/beyaz-esya.jpg",
  },

  // ---------------- İkinci El & Hurda Malzeme ----------------
  {
    id: "sac-profil",
    name: "İkinci El Sac & Profil",
    category: "ikinci-el",
    description:
      "Tekrar kullanılabilir sac levha, kutu profil, NPU/NPI ve sanayi malzemeleri.",
    tags: ["Tekrar Kullanılabilir"],
    image: "/images/products/sac-profil.jpg",
  },
  {
    id: "celik-konstruksiyon",
    name: "Çelik Konstrüksiyon",
    category: "ikinci-el",
    description:
      "Sökülmüş çelik çatı, hangar ve depo konstrüksiyonları. Komple proje alımı yapılır.",
    tags: ["Komple Alım"],
    image: "/images/products/konstruksiyon.jpg",
  },
  {
    id: "hurda-boru",
    name: "Demir & Çelik Boru",
    category: "ikinci-el",
    description:
      "Sanayi borusu, su/gaz borusu ve hurda boru alımı. İkinci el ve hurda olarak değerlendirilir.",
    image: "/images/products/boru.jpg",
  },
  {
    id: "hurda-arac",
    name: "Hurda Araç & Karoseri",
    category: "ikinci-el",
    description:
      "Hurdaya çıkan araç, kasa ve karoseri alımı. MTV/hurda belgesi süreçlerinde yardımcı oluyoruz.",
    tags: ["Belge Desteği"],
    image: "/images/products/arac.jpg",
  },
  {
    id: "makine-techizat",
    name: "Makine & Teçhizat",
    category: "ikinci-el",
    description:
      "Atıl tezgah, makine ve sanayi teçhizatı. İkinci el veya hurda olarak yerinde değerlendirme.",
    image: "/images/products/makine.jpg",
  },
];

/** Ana sayfada öne çıkarılacak ürünler. */
export const featuredProducts = products.filter((p) => p.featured);

/** Belirli bir kategoriye ait ürünleri döndürür. */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

/** Ürünü id/slug ile bulur (detay sayfası için). */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

/** Aynı kategorideki diğer ürünleri döndürür (ilgili ürünler). */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

/** Kategori slug'ından kategori nesnesini döndürür. */
export function getCategory(slug: ProductCategory): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
