"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "su-cookie-consent";

/**
 * Çerez onayı banner'ı (Client Component).
 * Seçim localStorage'da saklanır; tekrar gösterilmez.
 * (İleride analytics eklenirse, "accepted" durumuna göre koşullandırılabilir.)
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage erişilemezse banner gösterilmez
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* yoksay */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:left-4 sm:right-auto sm:max-w-md">
      <div className="rounded-2xl border border-white/10 bg-anthracite-light/95 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-ember" />
          <div>
            <p className="text-sm leading-relaxed text-slate-300">
              Bu site, deneyiminizi iyileştirmek için çerezler kullanır.
              Detaylar için{" "}
              <Link href="/gizlilik" className="text-ember hover:underline">
                Gizlilik Politikası
              </Link>{" "}
              ve{" "}
              <Link href="/kvkk" className="text-ember hover:underline">
                KVKK
              </Link>{" "}
              metnine bakabilirsiniz.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ember-dark"
              >
                Kabul Et
              </button>
              <button
                type="button"
                onClick={() => decide("rejected")}
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/5"
              >
                Reddet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
