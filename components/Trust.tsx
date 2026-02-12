"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimateIn from "./AnimateIn";
import { Users, ThumbsUp, Clock, Zap, TrendingUp } from "lucide-react";

function CountUp({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCount(decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, decimals]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { icon: Users, value: "10,000+", label: "누적 해결 건수", color: "from-blue-500 to-brand-500", glow: "rgba(14,165,233,0.3)" },
  { icon: ThumbsUp, value: "98.6%", label: "재이용 의향률", color: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.3)" },
  { icon: Clock, value: "30분", label: "평균 출동 시간", color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.3)" },
  { icon: Zap, value: "24시간", label: "연중무휴 운영", color: "from-gold-400 to-orange-500", glow: "rgba(241,196,15,0.3)" },
];

export default function Trust() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071d32] via-[#0a2540] to-[#071d32]" />
      <div className="absolute inset-0 noise" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated gradient orbs - bigger and brighter */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.3, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
      />

      {/* Floating particles */}
      {[
        { top: "15%", left: "10%", size: "w-1.5 h-1.5", color: "bg-gold-400/40", dur: 5 },
        { top: "25%", right: "15%", size: "w-1 h-1", color: "bg-brand-400/30", dur: 7 },
        { top: "60%", left: "20%", size: "w-2 h-2", color: "bg-gold-300/25", dur: 4.5 },
        { bottom: "20%", right: "25%", size: "w-1 h-1", color: "bg-white/15", dur: 6 },
        { top: "40%", left: "70%", size: "w-1.5 h-1.5", color: "bg-brand-300/20", dur: 8 },
        { bottom: "35%", left: "40%", size: "w-1 h-1", color: "bg-gold-400/30", dur: 5.5 },
        { top: "70%", right: "10%", size: "w-2 h-2", color: "bg-violet-400/20", dur: 6.5 },
        { top: "20%", left: "50%", size: "w-0.5 h-0.5", color: "bg-gold-400/50", dur: 4 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
          animate={{ y: [0, i % 2 === 0 ? -30 : 20, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm mb-4">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            <span className="text-white/50 text-sm font-medium">믿고 맡겨도 되는 업체인지 고민되시나요?</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-4xl md:text-[3.25rem] font-black text-white leading-tight tracking-tight mb-2 text-glow-white">
            배관사무소는
          </h2>
          <h2 className="text-4xl md:text-[3.25rem] font-black leading-tight tracking-tight">
            <span className="text-gradient-gold text-glow-gold">결과로 신뢰를</span>{" "}
            <span className="text-white text-glow-white">증명합니다!</span>
          </h2>
        </AnimateIn>

        {/* Main percentage */}
        <AnimateIn delay={0.2}>
          <div className="mt-14 mb-8">
            <p className="text-white/35 text-lg md:text-xl mb-8">연간 해결 성공률이 무려</p>

            <div className="relative inline-block">
              {/* Outer animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(241,196,15,0.06)" strokeWidth="0.3" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(241,196,15,0.25)" strokeWidth="1"
                    strokeDasharray="6 18" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Inner animated ring (counter-rotating) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(241,196,15,0.12)" strokeWidth="0.5"
                    strokeDasharray="3 25" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Number glow layers - more intense */}
              <div className="absolute inset-0 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gold-400/25 blur-3xl -z-10 select-none flex items-center justify-center">
                98.6%
              </div>
              <div className="absolute inset-0 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gold-400/10 blur-xl -z-10 select-none flex items-center justify-center">
                98.6%
              </div>

              {/* Laurel wreath SVG */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[320px] md:h-[320px] pointer-events-none z-0">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-30">
                  {/* Left laurel */}
                  <path d="M60 170C40 150 30 120 35 90C40 60 55 35 70 25" stroke="rgba(241,196,15,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M55 160C38 145 25 118 28 90C31 62 45 40 58 30" stroke="rgba(241,196,15,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M35 90C42 85 48 78 50 70" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M38 110C45 105 52 97 54 88" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M42 130C49 125 56 117 58 108" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M48 148C55 143 62 135 64 126" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M42 68C48 64 55 58 58 50" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  {/* Right laurel (mirrored) */}
                  <path d="M140 170C160 150 170 120 165 90C160 60 145 35 130 25" stroke="rgba(241,196,15,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M145 160C162 145 175 118 172 90C169 62 155 40 142 30" stroke="rgba(241,196,15,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M165 90C158 85 152 78 150 70" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M162 110C155 105 148 97 146 88" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M158 130C151 125 144 117 142 108" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M152 148C145 143 138 135 136 126" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M158 68C152 64 145 58 142 50" stroke="rgba(241,196,15,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Actual number */}
              <div className="relative z-10 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gradient-gold py-6" style={{ filter: "drop-shadow(0 0 40px rgba(241,196,15,0.2))" }}>
                <CountUp target={98.6} decimals={1} />%
              </div>
            </div>

            <p className="text-white/30 text-lg md:text-xl mt-6">문제 해결 성공률</p>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <AnimateIn delay={0.35}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl p-5 md:p-6 text-center overflow-hidden backdrop-blur-sm"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ boxShadow: `inset 0 0 30px ${s.glow}` }}
                />

                <div
                  className={`w-14 h-14 mx-auto bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                  style={{ boxShadow: `0 6px 20px ${s.glow}` }}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-black text-3xl md:text-4xl mb-1 text-glow-white">
                  {s.value}
                </p>
                <p className="text-white/35 text-sm md:text-base">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
