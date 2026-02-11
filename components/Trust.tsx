"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimateIn from "./AnimateIn";

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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Trust() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 noise" />

      {/* Floating confetti */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-sm"
          style={{
            background: i % 2 === 0 ? "#f1c40f" : "#e67e22",
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            opacity: 0.15 + Math.random() * 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateIn>
          <p className="text-white/50 text-base mb-3">
            믿고 맡겨도 되는 업체인지 고민되시나요?
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-2">
            배관사무소는
          </h2>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
            <span className="text-gradient-gold">결과로 신뢰를</span>{" "}
            <span className="text-white">증명합니다!</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-white/40 text-lg mt-8 mb-4">연간 해결 성공률이 무려</p>
          <div className="text-8xl md:text-[140px] font-black leading-none tracking-tight text-gradient-gold">
            <CountUp target={100} />%
          </div>
          <p className="text-white/30 text-lg mt-4">고객만족 보장</p>
        </AnimateIn>
      </div>
    </section>
  );
}
