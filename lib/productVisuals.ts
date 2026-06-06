/**
 * Ürün görselleştirme — fotoğraf yerine ürüne özel ikon + kategori degradesi.
 * ProductCard ve ürün detay sayfası bu haritayı kullanır.
 */
import {
  Cable,
  Plug,
  Layers,
  Construction,
  Hexagon,
  Atom,
  Cylinder,
  Battery,
  Grid3x3,
  Gem,
  Boxes,
  Waves,
  Flame,
  Utensils,
  Zap,
  Cog,
  CircuitBoard,
  Refrigerator,
  Warehouse,
  Car,
  Settings,
  Recycle,
  type LucideIcon,
} from "lucide-react";
import type { Product, ProductCategory } from "@/data/products";

interface CategoryVisual {
  /** Kart medya alanı degrade rengi */
  gradient: string;
  /** İkon/accent rengi */
  accent: string;
  /** Kategori için varsayılan ikon */
  icon: LucideIcon;
}

export const categoryVisual: Record<ProductCategory, CategoryVisual> = {
  "demir-disi": {
    gradient: "from-amber-500/20 via-ember/10 to-transparent",
    accent: "text-amber-400",
    icon: Atom,
  },
  "demir-celik": {
    gradient: "from-sky-500/20 via-slate-500/10 to-transparent",
    accent: "text-sky-400",
    icon: Layers,
  },
  "kablo-elektronik": {
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accent: "text-cyan-400",
    icon: Cable,
  },
  "ikinci-el": {
    gradient: "from-emerald-500/20 via-green-600/10 to-transparent",
    accent: "text-emerald-400",
    icon: Recycle,
  },
};

const productIcons: Record<string, LucideIcon> = {
  // Demir dışı
  "bakir-hurdasi": Cable,
  "kablo-bakiri": Plug,
  "aluminyum-hurdasi": Layers,
  "aluminyum-profil": Construction,
  "pirinc-hurdasi": Hexagon,
  "bronz-hurdasi": Atom,
  "kursun-hurdasi": Cylinder,
  "hurda-aku": Battery,
  "cinko-hurdasi": Grid3x3,
  "krom-nikel": Gem,
  // Demir & çelik
  "demir-hurdasi": Boxes,
  "sac-hurdasi": Layers,
  "celik-talasi": Waves,
  "dokum-hurdasi": Flame,
  "paslanmaz-celik": Utensils,
  "ray-hurdasi": Construction,
  "dkp-galvaniz-sac": Grid3x3,
  // Kablo & elektronik
  "kablo-hurdasi": Cable,
  "elektrik-motoru": Cog,
  "trafo-hurdasi": Zap,
  "elektronik-hurda": CircuitBoard,
  "beyaz-esya-klima": Refrigerator,
  // İkinci el & hurda
  "sac-profil": Construction,
  "celik-konstruksiyon": Warehouse,
  "hurda-boru": Cylinder,
  "hurda-arac": Car,
  "makine-techizat": Settings,
};

export interface ProductVisual extends CategoryVisual {
  icon: LucideIcon;
}

/** Ürün için ikon + kategori degradesi/accent döndürür. */
export function getProductVisual(product: Product): ProductVisual {
  const cat = categoryVisual[product.category];
  return { ...cat, icon: productIcons[product.id] ?? cat.icon };
}
