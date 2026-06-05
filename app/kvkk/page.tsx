import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${site.legalName} 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.`,
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalLayout title="KVKK Aydınlatma Metni" updated="5 Haziran 2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        uyarınca, veri sorumlusu sıfatıyla <strong>{site.legalName}</strong>{" "}
        olarak kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek
        isteriz.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        <strong>{site.legalName}</strong>
        <br />
        Adres: {site.address.full}
        <br />
        Telefon: <a href={`tel:+${site.phoneRaw}`}>{site.phoneDisplay}</a>
        <br />
        E-posta: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <ul>
        <li>
          <strong>Kimlik:</strong> ad-soyad,
        </li>
        <li>
          <strong>İletişim:</strong> telefon numarası, e-posta adresi,
        </li>
        <li>
          <strong>Talep/İşlem:</strong> mesaj içeriği, yüklediğiniz görseller ve
          teklif talebine ilişkin bilgiler.
        </li>
      </ul>

      <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
      <ul>
        <li>Teklif/fiyat taleplerinin alınması ve yanıtlanması,</li>
        <li>Mal ve hizmet satış/alım süreçlerinin yürütülmesi,</li>
        <li>İletişim faaliyetlerinin yürütülmesi,</li>
        <li>Talep ve şikâyetlerin takibi.</li>
      </ul>

      <h2>4. İşlemenin Hukuki Sebebi</h2>
      <p>
        Kişisel verileriniz; bir sözleşmenin kurulması veya ifasıyla doğrudan
        ilgili olması, meşru menfaat ve açık rızanız gibi KVKK md. 5&apos;te
        belirtilen hukuki sebeplere dayanılarak işlenir.
      </p>

      <h2>5. Kişisel Verilerin Aktarılması</h2>
      <p>
        Kişisel verileriniz; yalnızca yukarıdaki amaçlarla sınırlı olmak üzere,
        hizmet aldığımız altyapı/e-posta sağlayıcıları gibi tedarikçilere ve
        yasal yükümlülükler kapsamında yetkili kamu kurumlarına aktarılabilir.
        Pazarlama amacıyla üçüncü kişilerle paylaşılmaz.
      </p>

      <h2>6. Veri Toplama Yöntemi</h2>
      <p>
        Verileriniz; web sitemizdeki form, telefon, e-posta ve WhatsApp gibi
        kanallar aracılığıyla elektronik ortamda toplanır.
      </p>

      <h2>7. İlgili Kişinin Hakları (KVKK md. 11)</h2>
      <p>Kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>KVKK&apos;da öngörülen şartlarda silinmesini/yok edilmesini isteme,</li>
        <li>İşlemenin kanuna aykırılığı hâlinde zararın giderilmesini talep etme.</li>
      </ul>

      <h2>8. Başvuru</h2>
      <p>
        Haklarınızı kullanmak için taleplerinizi yukarıda belirtilen adres,
        telefon veya <a href={`mailto:${site.email}`}>{site.email}</a> e-posta
        adresi üzerinden bize iletebilirsiniz. Başvurularınız en kısa sürede ve
        en geç 30 gün içinde sonuçlandırılır.
      </p>

      <p className="text-xs text-slate-500">
        Not: Bu metin genel bilgilendirme amaçlıdır. Yayına almadan önce bir
        hukuk danışmanına gözden geçirtmeniz önerilir.
      </p>
    </LegalLayout>
  );
}
