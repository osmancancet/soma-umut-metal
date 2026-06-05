import WhatsAppIcon from "./WhatsAppIcon";
import { generalWhatsappLink } from "@/lib/site";

/**
 * Sağ altta sabit duran yüzen WhatsApp butonu (Server Component).
 * Tüm sayfalarda hızlı erişim sağlar.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan bize yazın"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp p-4 text-white shadow-xl shadow-black/30 transition-all hover:bg-whatsapp-dark hover:pr-5 sm:bottom-6 sm:right-6"
    >
      {/* Dikkat çekmek için yumuşak nabız efekti */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-30" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs sm:inline">
        Bize Yazın
      </span>
    </a>
  );
}
