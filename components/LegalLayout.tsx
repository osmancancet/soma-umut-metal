import Breadcrumbs from "./Breadcrumbs";

/**
 * Yasal / metin ağırlıklı sayfalar için ortak düzen (Server Component).
 * Sabit header'ı geçmek için üst boşluk + breadcrumb + prose alanı içerir.
 */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-anthracite pt-24 lg:pt-32">
      <div className="container-site py-12 lg:py-16">
        <Breadcrumbs
          items={[{ name: "Ana Sayfa", href: "/" }, { name: title }]}
        />
        <article className="mt-8 max-w-3xl">
          <h1 className="section-title">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-slate-500">
              Son güncelleme: {updated}
            </p>
          )}
          <div className="legal-prose mt-8 space-y-5 text-sm text-slate-400">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
