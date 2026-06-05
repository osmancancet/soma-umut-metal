import { Star } from "lucide-react";

/** Yıldız puanı gösterimi (Server Component). value: 0–5, yarım destekli. */
export default function StarRating({
  value,
  className = "h-4 w-4",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`5 üzerinden ${value} yıldız`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i)); // 0..1
        return (
          <span key={i} className="relative inline-block">
            {/* Boş yıldız */}
            <Star className={`${className} text-slate-600`} />
            {/* Dolu kısım (kırpılmış) */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className={`${className} fill-ember text-ember`} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
