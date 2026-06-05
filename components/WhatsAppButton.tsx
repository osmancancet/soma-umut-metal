import WhatsAppIcon from "./WhatsAppIcon";
import { productQuoteLink, generalWhatsappLink } from "@/lib/site";

/**
 * Tekrar kullanılabilir "WhatsApp'tan Teklif Al" butonu (Server Component).
 *
 * - `productName` verilirse o ürüne özel, otomatik doldurulmuş mesajla
 *   WhatsApp linki üretilir.
 * - Verilmezse genel iletişim linki kullanılır.
 * - `label` ile buton metni özelleştirilebilir.
 */
export default function WhatsAppButton({
  productName,
  label = "WhatsApp'tan Teklif Al",
  className = "",
  fullWidth = false,
}: {
  productName?: string;
  label?: string;
  className?: string;
  fullWidth?: boolean;
}) {
  const href = productName ? productQuoteLink(productName) : generalWhatsappLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        productName ? `${productName} için WhatsApp'tan teklif al` : label
      }
      className={`btn-whatsapp ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}
