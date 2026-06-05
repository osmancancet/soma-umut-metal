import type { Metadata } from "next";
import { site, mapsLink } from "@/lib/site";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.name} gizlilik politikası: kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.`,
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <LegalLayout title="Gizlilik Politikası" updated="5 Haziran 2026">
      <p>
        Bu Gizlilik Politikası, <strong>{site.legalName}</strong> (&quot;
        {site.name}&quot;, &quot;biz&quot;) tarafından işletilen{" "}
        <a href={site.url}>{site.url}</a> web sitesini ziyaret ettiğinizde
        kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu
        açıklar.
      </p>

      <h2>1. Topladığımız Bilgiler</h2>
      <p>
        Sitemizde yer alan <strong>teklif/iletişim formunu</strong>{" "}
        doldurduğunuzda; ad-soyad, telefon numarası, (girdiyseniz) e-posta
        adresiniz, mesajınız ve isteğe bağlı olarak yüklediğiniz fotoğraf
        tarafımıza iletilir. Bu bilgileri yalnızca talebinizi değerlendirmek ve
        size dönüş yapmak için kullanırız.
      </p>
      <p>
        Ayrıca site kullanımına ilişkin teknik veriler (tarayıcı türü, ziyaret
        edilen sayfalar gibi) çerezler aracılığıyla anonim olarak toplanabilir.
      </p>

      <h2>2. Bilgilerin Kullanım Amaçları</h2>
      <ul>
        <li>Teklif ve fiyat taleplerinizi yanıtlamak,</li>
        <li>Sizinle telefon, e-posta veya WhatsApp üzerinden iletişim kurmak,</li>
        <li>Hizmet kalitemizi ve web sitesi deneyimini iyileştirmek.</li>
      </ul>

      <h2>3. Üçüncü Taraf Hizmetler</h2>
      <p>
        Sitemiz bazı işlevler için üçüncü taraf hizmetlerinden yararlanır:
      </p>
      <ul>
        <li>
          <strong>WhatsApp:</strong> İletişim için yönlendirme yapılır; mesaj
          içeriği WhatsApp üzerinden iletilir.
        </li>
        <li>
          <strong>Google Haritalar:</strong> Konumumuzu göstermek için harita
          gömülür (<a href={mapsLink}>harita</a>).
        </li>
        <li>
          <strong>E-posta gönderim sağlayıcısı:</strong> Form talepleri,
          tarafımıza e-posta iletmek için bir e-posta servisi üzerinden
          işlenebilir.
        </li>
      </ul>

      <h2>4. Çerezler</h2>
      <p>
        Site, temel işlevsellik ve deneyimi iyileştirmek için çerezler
        kullanabilir. Tarayıcı ayarlarınızdan çerezleri reddedebilir veya
        silebilirsiniz; ancak bu durumda bazı özellikler düzgün çalışmayabilir.
      </p>

      <h2>5. Verilerin Saklanması ve Güvenliği</h2>
      <p>
        Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır
        ve yetkisiz erişime karşı makul teknik/idari tedbirlerle korunur.
        Verileriniz, yasal zorunluluklar dışında üçüncü kişilerle pazarlama
        amacıyla paylaşılmaz.
      </p>

      <h2>6. Haklarınız</h2>
      <p>
        Kişisel verilerinize ilişkin haklarınız hakkında ayrıntılı bilgi için{" "}
        <a href="/kvkk">KVKK Aydınlatma Metni</a> sayfamızı inceleyebilirsiniz.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Gizlilikle ilgili sorularınız için: <br />
        <strong>{site.legalName}</strong>
        <br />
        Adres: {site.address.full}
        <br />
        Telefon: <a href={`tel:+${site.phoneRaw}`}>{site.phoneDisplay}</a>
        <br />
        E-posta: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <p className="text-xs text-slate-500">
        Not: Bu metin genel bilgilendirme amaçlıdır. Yayına almadan önce bir
        hukuk danışmanına gözden geçirtmeniz önerilir.
      </p>
    </LegalLayout>
  );
}
