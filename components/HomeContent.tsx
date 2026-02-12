"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inspection from "@/components/Inspection";
import Guarantee from "@/components/Guarantee";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import KoreaMap from "@/components/KoreaMap";
import Process from "@/components/Process";
import CtaBottom from "@/components/CtaBottom";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function HomeContent() {
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
      <KoreaMap />
      <Process />
      <CtaBottom />
      <Footer />
      <FloatingCta />
    </main>
  );
}
