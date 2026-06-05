import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: site.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/gizlilik`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/kvkk`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/urunler/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
