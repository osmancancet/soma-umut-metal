import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import GallerySection from "@/components/GallerySection";
import ProductGrid from "@/components/ProductGrid";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <GallerySection />
      <ProductGrid />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
