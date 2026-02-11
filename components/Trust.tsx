"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimateIn from "./AnimateIn";
import { Users, ThumbsUp, Clock, Zap } from "lucide-react";

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
  { icon: Users, value: "50,000+", label: "누적 해결 건수", color: "from-blue-500 to-brand-500" },
  { icon: ThumbsUp, value: "99.8%", label: "재이용 의향률", color: "from-emerald-500 to-teal-500" },
  { icon: Clock, value: "30분", label: "평균 출동 시간", color: "from-violet-500 to-purple-500" },
  { icon: Zap, value: "24시간", label: "연중무휴 운영", color: "from-gold-400 to-orange-500" },
];

export default function Trust() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628]" />
      <div className="absolute inset-0 noise" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(41,128,185,0.1) 0%, transparent 70%)" }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 === 0 ? "w-1 h-1 bg-gold-400/30" : "w-0.5 h-0.5 bg-brand-400/20"}`}
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateIn>
          <p className="text-white/40 text-base md:text-lg mb-4">
            믿고 맡겨도 되는 업체인지 고민되시나요?
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white leading-tight tracking-tight mb-2">
            배관사무소는
          </h2>
          <h2 className="text-3xl md:text-[2.75rem] font-black leading-tight tracking-tight">
            <span className="text-gradient-gold">결과로 신뢰를</span>{" "}
            <span className="text-white">증명합니다!</span>
          </h2>
        </AnimateIn>

        {/* Main percentage */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 mb-6">
            <p className="text-white/30 text-base md:text-lg mb-6">연간 해결 성공률이 무려</p>

            <div className="relative inline-block">
              {/* Animated ring behind number */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(241,196,15,0.06)" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(241,196,15,0.2)" strokeWidth="0.8"
                    strokeDasharray="8 20" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Number glow layers */}
              <div className="absolute inset-0 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gold-400/20 blur-3xl -z-10 select-none">
                100%
              </div>
              <div className="absolute inset-0 text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gold-400/8 blur-xl -z-10 select-none">
                100%
              </div>

              {/* Actual number */}
              <div className="text-7xl md:text-[120px] lg:text-[150px] font-black leading-none tracking-tighter text-gradient-gold py-4">
                <CountUp target={100} />%
              </div>
            </div>

            <p className="text-white/25 text-base md:text-lg mt-4">고객만족 보장</p>
          </div>
        </AnimateIn>

        {/* Stats grid */}
        <AnimateIn delay={0.35}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl p-5 md:p-6 text-center overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(circle at center, rgba(241,196,15,0.04) 0%, transparent 70%)" }} />

                <div className={`w-10 h-10 mx-auto bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-3 shadow-lg opacity-80`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-black text-xl md:text-2xl mb-1"
                  style={{ textShadow: "0 0 30px rgba(255,255,255,0.1)" }}>
                  {s.value}
                </p>
                <p className="text-white/30 text-xs md:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
