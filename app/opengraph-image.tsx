import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Sosyal medya paylaşım görseli — otomatik üretilir (1200x630).
// Harici font kullanılmaz; metinler güvenli karakterlerle tasarlanmıştır.
export const alt = `${site.name} — Soma Hurda ve Metal Geri Dönüşüm`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  // Türkçe glyph sorunlarını önlemek için element sembolleri kullanıldı.
  const elements = ["Cu", "Al", "Fe", "Pb", "Zn", "Cr", "Ni"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #334155 55%, #1e293b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Üst: marka rozeti */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "16px",
              background: "#f97316",
              fontSize: "44px",
              fontWeight: 900,
            }}
          >
            SU
          </div>
          <div style={{ fontSize: "30px", letterSpacing: "6px", color: "#fb923c" }}>
            SOMA / MANISA
          </div>
        </div>

        {/* Orta: başlık */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "92px", fontWeight: 900, lineHeight: 1 }}>
            SOMA UMUT METAL
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              fontSize: "38px",
              color: "#cbd5e1",
            }}
          >
            Hurda &amp; Metal Alimi · Geri Donusum
          </div>
        </div>

        {/* Alt: element sembolleri + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {elements.map((el) => (
              <div
                key={el}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "76px",
                  height: "76px",
                  borderRadius: "12px",
                  border: "2px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#e2e8f0",
                }}
              >
                {el}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "18px 30px",
              borderRadius: "12px",
              background: "#25D366",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            WhatsApp&apos;tan Teklif Al
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
