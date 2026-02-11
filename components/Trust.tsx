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
      const eased = 1 - Math.pow(1 - progress, 3);
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
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 noise" />

      {/* Subtle floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold-400/30"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
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

        <AnimateIn delay={0.2}>
          <p className="text-white/30 text-lg mt-10 mb-6">연간 해결 성공률이 무려</p>
          <div className="relative inline-block">
            <div className="text-8xl md:text-[160px] font-black leading-none tracking-tighter text-gradient-gold">
              <CountUp target={100} />%
            </div>
            {/* Glow behind number */}
            <div className="absolute inset-0 text-8xl md:text-[160px] font-black leading-none tracking-tighter text-gold-400/10 blur-2xl -z-10">
              100%
            </div>
          </div>
          <p className="text-white/25 text-lg mt-6">고객만족 보장</p>
        </AnimateIn>
      </div>
    </section>
  );
}
