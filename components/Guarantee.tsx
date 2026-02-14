"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { ShieldCheck, Banknote, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, text: "완벽 해결 보장", desc: "책임감 있는 작업" },
  { icon: Banknote, text: "미해결시 전액 무료", desc: "비용 부담 제로" },
];

export default function Guarantee() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] to-[#0369a1]" />
      <div className="absolute inset-0 noise" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(241,196,15,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(241,196,15,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Spotlight rays - more vivid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
        <div className="absolute top-0 left-1/4 w-48 h-[700px] bg-gold-400/[0.03] rotate-[15deg] blur-lg" />
        <div className="absolute top-0 right-1/4 w-48 h-[700px] bg-gold-400/[0.03] -rotate-[15deg] blur-lg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[800px] bg-gold-400/[0.025] blur-lg" />
      </div>

      {/* Radial glow behind card - bigger */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.1) 0%, transparent 60%)" }}
      />

      {/* Animated concentric rings - more visible */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border-[3px] border-gold-400/10"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full border-2 border-gold-400/[0.08]"
      />
      <motion.div
        animate={{ scale: [1.05, 1.2, 1.05], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[750px] md:h-[750px] rounded-full border border-gold-400/[0.05]"
      />

      {/* Floating gold particles */}
      <div className="hidden md:block">
      {[
        { top: "20%", left: "15%", size: "w-1.5 h-1.5", dur: 5 },
        { top: "30%", right: "20%", size: "w-1 h-1", dur: 6.5 },
        { bottom: "25%", left: "25%", size: "w-2 h-2", dur: 4.5 },
        { bottom: "35%", right: "15%", size: "w-1 h-1", dur: 7 },
        { top: "50%", left: "10%", size: "w-1.5 h-1.5", dur: 5.5 },
        { top: "15%", right: "35%", size: "w-0.5 h-0.5", dur: 4 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.size} bg-gold-400/30`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
          animate={{ y: [0, i % 2 === 0 ? -20 : 15, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateIn>
          <span className="section-badge bg-gold-400/[0.1] border border-gold-400/20 text-gold-400 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4" />
            해결하지 못했는데 요금청구? 절대 NO!
          </span>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-[2rem] md:text-[3.5rem] font-black leading-tight tracking-tight">
            <span className="text-white text-glow-white">배관사무소는</span>
            <br className="md:hidden" />
            <span className="text-gradient-gold text-glow-gold"> 해결 못할 시</span>
            <br className="md:hidden" />
            <span className="text-white text-glow-white"> 금액을 받지 않습니다!</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="relative mt-14 mb-12">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72"
            >
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(241,196,15,0.2) 25%, transparent 50%, rgba(241,196,15,0.15) 75%, transparent 100%)",
                }} />
            </motion.div>

            {/* Counter-rotating inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60"
            >
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, transparent 0%, rgba(241,196,15,0.1) 15%, transparent 30%, rgba(241,196,15,0.08) 50%, transparent 65%, rgba(241,196,15,0.12) 85%, transparent 100%)",
                }} />
            </motion.div>

            {/* Main card */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px rgba(241,196,15,0.12), 0 0 120px rgba(241,196,15,0.06), 0 25px 60px rgba(0,0,0,0.35)",
                  "0 0 120px rgba(241,196,15,0.35), 0 0 250px rgba(241,196,15,0.15), 0 25px 60px rgba(0,0,0,0.35)",
                  "0 0 60px rgba(241,196,15,0.12), 0 0 120px rgba(241,196,15,0.06), 0 25px 60px rgba(0,0,0,0.35)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-72 h-40 md:w-96 md:h-48 mx-auto bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 rounded-[2.5rem] flex flex-col items-center justify-center rotate-3"
            >
              {/* Inner shine */}
              <div className="absolute inset-[1px] rounded-[2.4rem] bg-gradient-to-br from-white/25 via-transparent to-transparent" />
              <div className="absolute inset-[1px] rounded-[2.4rem] bg-gradient-to-tl from-black/10 via-transparent to-transparent" />
              <span className="text-brand-900/40 text-xs md:text-sm font-black tracking-widest -rotate-3 mb-2 uppercase">Guaranteed</span>
              <span className="text-2xl md:text-5xl font-black text-brand-900 -rotate-3" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>해결 못하면 0원</span>
            </motion.div>
          </div>
        </AnimateIn>

        {/* Feature cards - more dramatic */}
        <AnimateIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400/20 to-gold-400/5 rounded-xl flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-gold-400" />
                </div>
                <span className="text-white/80 text-base font-bold">{f.text}</span>
                <span className="text-white/70 text-sm">{f.desc}</span>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-lg mx-auto">
            배관사무소는
            <br className="md:hidden" />
            고객님의 문제를 완벽하게
            <br className="md:hidden" />
            해결할 때까지 책임집니다.
            <br />
            해결하지 못하면
            <br className="md:hidden" />
            비용을 청구하지 않는 것이
            <br className="md:hidden" />
            저희의 원칙입니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
