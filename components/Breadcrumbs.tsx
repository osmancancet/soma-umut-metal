import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export interface Crumb {
  name: string;
  /** Göreli yol (ör. "/urunler"). Son öğede genelde verilmez. */
  href?: string;
}

/**
 * Sayfa yolu (breadcrumb) — görünür gezinme + BreadcrumbList JSON-LD.
 * Server Component.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonItems = items.map((it) => ({
    name: it.name,
    url: `${site.url}${it.href ?? ""}`,
  }));

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(jsonItems)),
        }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-400">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.name} className="flex items-center gap-1.5">
              {it.href && !last ? (
                <Link
                  href={it.href}
                  className="transition-colors hover:text-ember"
                >
                  {it.name}
                </Link>
              ) : (
                <span className={last ? "text-slate-200" : ""}>{it.name}</span>
              )}
              {!last && (
                <ChevronRight className="h-4 w-4 text-slate-600" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
