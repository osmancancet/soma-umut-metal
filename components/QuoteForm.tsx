"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { products } from "@/data/products";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-anthracite px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember";

/**
 * Teklif formu (Client Component) — talebi WhatsApp üzerinden iletir.
 * Form gönderilince bilgilerden otomatik bir WhatsApp mesajı oluşturulup
 * işletmenin hattına yönlendirir. Sunucu/e-posta gerektirmez.
 */
export default function QuoteForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setSent(false);
      setError("Lütfen ad, telefon ve mesaj alanlarını doldurun.");
      return;
    }
    setError("");

    const text = [
      "Merhaba, teklif almak istiyorum.",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Ürün / Malzeme: ${product || "Belirtilmedi"}`,
      "",
      `Mesaj: ${message}`,
    ].join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-anthracite-light p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold text-white">Hızlı Teklif Formu</h3>
      <p className="mt-1 text-sm text-slate-400">
        Bilgilerinizi doldurun; talebiniz WhatsApp üzerinden bize iletilsin.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
              Ad Soyad <span className="text-ember">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Adınız" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm text-slate-300">
              Telefon <span className="text-ember">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="05xx xxx xx xx" />
          </div>
        </div>

        <div>
          <label htmlFor="product" className="mb-1.5 block text-sm text-slate-300">
            Ürün / Malzeme
          </label>
          <select id="product" name="product" defaultValue="" className={inputClass}>
            <option value="">Seçiniz (opsiyonel)</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Diğer">Diğer / Listede yok</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
            Mesajınız <span className="text-ember">*</span>
          </label>
          <textarea id="message" name="message" required rows={4} className={inputClass} placeholder="Elinizdeki malzeme, yaklaşık miktar ve konumunuzu yazın." />
        </div>

        <button type="submit" className="btn-whatsapp w-full">
          <Send className="h-5 w-5" />
          WhatsApp'tan Gönder
        </button>

        {sent && (
          <div
            role="status"
            className="flex items-start gap-2 rounded-lg border border-whatsapp/40 bg-whatsapp/10 px-4 py-3 text-sm text-whatsapp"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <span>
              WhatsApp açılıyor… Pencere açılmadıysa lütfen üstteki
              &quot;WhatsApp'tan Yazın&quot; butonunu kullanın.
            </span>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <p className="text-xs text-slate-500">
          Fotoğraf göndermek için, WhatsApp açıldıktan sonra görselinizi sohbete
          ekleyebilirsiniz.
        </p>
      </div>
    </form>
  );
}
