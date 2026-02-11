"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { ShieldCheck, BadgeCheck, Banknote } from "lucide-react";

const features = [
  { icon: ShieldCheck, text: "완벽 해결 보장" },
  { icon: Banknote, text: "미해결시 전액 무료" },
  { icon: BadgeCheck, text: "추가 요금 없음" },
];

export default function Guarantee() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080816] via-[#10102a] to-[#080816]" />
      <div className="absolute inset-0 noise" />

      {/* Spotlight rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
        <div className="absolute top-0 left-1/4 w-40 h-[600px] bg-gold-400/[0.02] rotate-[15deg] blur-md" />
        <div className="absolute top-0 right-1/4 w-40 h-[600px] bg-gold-400/[0.02] -rotate-[15deg] blur-md" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-[700px] bg-gold-400/[0.015] blur-md" />
      </div>

      {/* Radial glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.08) 0%, transparent 60%)" }} />

      {/* Animated concentric rings */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-gold-400/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full border border-gold-400/[0.06]"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateIn>
          <span className="section-badge bg-gold-400/[0.08] border border-gold-400/15 text-gold-400 mb-8 backdrop-blur-sm">
            해결하지 못했는데 요금청구? 절대 NO!
          </span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white leading-tight tracking-tight mb-3">
            저희 업체는
          </h2>
          <h2 className="text-3xl md:text-[2.75rem] font-black leading-tight tracking-tight">
            <span className="text-gradient-gold">미해결시</span>{" "}
            <span className="text-white">금액을 받지 않습니다.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="relative mt-12 mb-10">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(241,196,15,0.15) 25%, transparent 50%, rgba(241,196,15,0.1) 75%, transparent 100%)",
                }} />
            </motion.div>

            {/* Main card */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px rgba(241,196,15,0.1), 0 0 120px rgba(241,196,15,0.05), 0 20px 60px rgba(0,0,0,0.3)",
                  "0 0 80px rgba(241,196,15,0.2), 0 0 160px rgba(241,196,15,0.08), 0 20px 60px rgba(0,0,0,0.3)",
                  "0 0 60px rgba(241,196,15,0.1), 0 0 120px rgba(241,196,15,0.05), 0 20px 60px rgba(0,0,0,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-40 h-40 md:w-52 md:h-52 mx-auto bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 rounded-[2.5rem] flex flex-col items-center justify-center rotate-3"
            >
              {/* Inner shine */}
              <div className="absolute inset-[1px] rounded-[2.4rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              <span className="text-brand-900/30 text-sm font-bold tracking-wider -rotate-3 mb-1">GUARANTEED</span>
              <span className="text-5xl md:text-6xl font-black text-brand-900 -rotate-3">₩0</span>
            </motion.div>
          </div>
        </AnimateIn>

        {/* Feature pills */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {features.map((f, i) => (
              <div key={i} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <f.icon className="w-4 h-4 text-gold-400/70" />
                <span className="text-white/50 text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <p className="text-white/35 text-[15px] md:text-base leading-relaxed max-w-lg mx-auto">
            배관사무소는 고객님의 문제를 완벽하게 해결할 때까지 책임집니다.
            <br />
            해결하지 못하면 비용을 청구하지 않는 것이 저희의 원칙입니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
