"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function Guarantee() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12111a] via-[#1a1830] to-[#12111a]" />
      <div className="absolute inset-0 noise" />

      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-40 h-[400px] bg-white/[0.02] rotate-[15deg] blur-[1px]" />
      <div className="absolute top-0 right-1/4 w-40 h-[400px] bg-white/[0.02] -rotate-[15deg] blur-[1px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-[500px] bg-white/[0.015] blur-[1px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateIn>
          <span className="inline-block bg-gold-400/10 border border-gold-400/20 text-gold-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            해결하지 못했는데 요금청구? 절대 NO!
          </span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            저희 업체는
          </h2>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
            <span className="text-gradient-gold">미해결시</span>{" "}
            <span className="text-white">금액을 받지 않습니다.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(241,196,15,0.15)",
                "0 0 80px rgba(241,196,15,0.3)",
                "0 0 40px rgba(241,196,15,0.15)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-36 h-36 md:w-44 md:h-44 mx-auto mt-10 mb-8 bg-gradient-to-br from-gold-400 to-yellow-600 rounded-[2rem] flex items-center justify-center"
          >
            <span className="text-5xl md:text-6xl font-black text-brand-900">₩0</span>
          </motion.div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-white/50 text-base leading-relaxed max-w-lg mx-auto">
            배관사무소는 고객님의 문제를 완벽하게 해결할 때까지 책임집니다.
            <br />
            해결하지 못하면 비용을 청구하지 않는 것이 저희의 원칙입니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
