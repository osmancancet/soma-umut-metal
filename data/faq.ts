/**
 * Sıkça Sorulan Sorular (Local SEO için içerik + FAQPage şeması).
 * Cevaplar; "Soma", "Manisa", "hurda fiyatları", "geri dönüşüm" gibi
 * yerel anahtar kelimeleri DOĞAL biçimde içerecek şekilde yazılmıştır.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Soma'da güncel hurda fiyatlarını nasıl öğrenebilirim?",
    answer:
      "Hurda bakır, alüminyum, demir ve pirinç fiyatları piyasaya göre her gün değişir. En doğru ve güncel hurda fiyatını almak için elinizdeki malzemeyi WhatsApp'tan yazın ya da bizi telefonla arayın; ekibimiz aynı gün size net fiyat versin.",
  },
  {
    question: "Hangi metalleri ve malzemeleri alıyorsunuz?",
    answer:
      "Bakır, alüminyum, pirinç, kurşun, çinko ve krom gibi demir dışı metaller; demir, sac, talaş, döküm ve paslanmaz çelik; kablo, elektrik motoru, trafo ve elektronik hurda; ayrıca ikinci el sac-profil, çelik konstrüksiyon ve hurda araç dahil hemen her türlü metali alıyoruz.",
  },
  {
    question: "Evden veya iş yerinden hurda alımı yapıyor musunuz?",
    answer:
      "Evet. Soma ve çevresinde ev, iş yeri, fabrika ve şantiyelerden yerinde söküm ve nakliye hizmeti veriyoruz. Tonajlı hurdalarda nakliye genellikle tarafımıza aittir; detayı WhatsApp'tan netleştirelim.",
  },
  {
    question: "Tartı nasıl yapılıyor, ödeme ne zaman yapılıyor?",
    answer:
      "Tartım, kalibreli kantarlarımızda gözünüzün önünde şeffaf biçimde yapılır. Tartı sonrası ödemeniz anında ve eksiksiz olarak nakit veya havale/EFT ile gerçekleştirilir.",
  },
  {
    question: "Soma dışına, Manisa ve çevre ilçelere hizmet veriyor musunuz?",
    answer:
      "Soma merkez başta olmak üzere Kırkağaç, Akhisar ve Manisa geneline hurda alımı ve geri dönüşüm hizmeti veriyoruz. Tonajlı alımlarda çevre il ve ilçelere de gidebiliyoruz.",
  },
  {
    question: "Sanayi ve tonajlı hurda alımı yapıyor musunuz?",
    answer:
      "Evet. Fabrika fireleri, üretim atıkları ve toplu hurda için tonajlı alım, kurumsal fatura ve düzenli toplama anlaşmaları yapıyoruz. Sanayi tesisleri için periyodik konteyner/toplama çözümleri sunuyoruz.",
  },
  {
    question: "Hurda akü ve kablo gibi malzemeleri de alıyor musunuz?",
    answer:
      "Evet. Hurda akü alımını lisanslı ve çevreye duyarlı süreçle yapıyoruz. Kablo hurdasını ise içindeki bakır oranına göre değerlendirip en yüksek fiyatı veriyoruz.",
  },
  {
    question: "Listede olmayan bir malzemem var, yine de alır mısınız?",
    answer:
      "Büyük olasılıkla evet. Katalogdaki ürünler örnektir; her türlü metal ve hurdayı değerlendiriyoruz. Elinizdeki malzemenin fotoğrafını WhatsApp'tan gönderin, en kısa sürede fiyat verelim.",
  },
];
