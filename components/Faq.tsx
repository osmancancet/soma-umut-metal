import { faqs } from "@/data/faq";
import { faqJsonLd } from "@/lib/jsonld";
import FaqAccordion from "./FaqAccordion";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

/**
 * SSS bölümü (Server Component).
 * FAQPage JSON-LD'yi başlangıç HTML'ine gömer (Google rich result için),
 * etkileşimli akordeonu client bileşene devreder.
 */
export default function Faq() {
  return (
    <section id="sss" className="bg-anthracite py-20 lg:py-28">
      {/* FAQPage yapısal verisi — arama motorları için */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Sıkça Sorulan Sorular</span>
          <h2 className="section-title text-balance">Aklınıza Takılanlar</h2>
          <p className="mt-4 text-slate-400 text-pretty">
            Hurda fiyatları, alım süreci ve hizmet bölgemiz hakkında en çok
            sorulan sorular. Cevabını bulamadıysanız WhatsApp'tan yazın.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <FaqAccordion items={faqs} />
        </Reveal>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Sorunuzu WhatsApp'tan Sorun" />
        </div>
      </div>
    </section>
  );
}
