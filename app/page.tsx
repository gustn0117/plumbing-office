import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inspection from "@/components/Inspection";
import Guarantee from "@/components/Guarantee";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBottom from "@/components/CtaBottom";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Inspection />
      <Guarantee />
      <Trust />
      <Reviews />
      <BeforeAfter />
      <Services />
      <Process />
      <CtaBottom />
      <Footer />
      <FloatingCta />
    </main>
  );
}
