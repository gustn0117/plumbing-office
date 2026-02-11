"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimateIn from "./AnimateIn";
import { Users, ThumbsUp, Clock, Zap, TrendingUp } from "lucide-react";

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { icon: Users, value: "50,000+", label: "누적 해결 건수", color: "from-blue-500 to-brand-500", glow: "rgba(41,128,185,0.3)" },
  { icon: ThumbsUp, value: "99.8%", label: "재이용 의향률", color: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.3)" },
  { icon: Clock, value: "30분", label: "평균 출동 시간", color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.3)" },
  { icon: Zap, value: "24시간", label: "연중무휴 운영", color: "from-gold-400 to-orange-500", glow: "rgba(241,196,15,0.3)" },
];

export default function Trust() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628]" />
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
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(41,128,185,0.15) 0%, transparent 70%)" }}
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
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white leading-tight tracking-tight mb-2 text-glow-white">
            배관사무소는
          </h2>
          <h2 className="text-3xl md:text-[2.75rem] font-black leading-tight tracking-tight">
            <span className="text-gradient-gold text-glow-gold">결과로 신뢰를</span>{" "}
            <span className="text-white text-glow-white">증명합니다!</span>
          </h2>
        </AnimateIn>

        {/* Main percentage */}
        <AnimateIn delay={0.2}>
          <div className="mt-14 mb-8">
            <p className="text-white/35 text-base md:text-lg mb-8">연간 해결 성공률이 무려</p>

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
                100%
              </div>
              <div className="absolute inset-0 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gold-400/10 blur-xl -z-10 select-none flex items-center justify-center">
                100%
              </div>

              {/* Actual number */}
              <div className="text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gradient-gold py-6" style={{ filter: "drop-shadow(0 0 40px rgba(241,196,15,0.2))" }}>
                <CountUp target={100} />%
              </div>
            </div>

            <p className="text-white/30 text-base md:text-lg mt-6">고객만족 보장</p>
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
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                  style={{ boxShadow: `0 6px 20px ${s.glow}` }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-black text-xl md:text-2xl mb-1 text-glow-white">
                  {s.value}
                </p>
                <p className="text-white/35 text-xs md:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
