"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Monitor, FileCheck, Phone, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Camera,
    num: "01",
    title: "정밀 내시경 배관 진단",
    desc: "최첨단 카메라로 배관 내부를 직접 확인하여 정확한 원인을 파악합니다.",
    image: "/images/inspection-1.jpeg",
    imageHint: "inspection-1.jpg (400x300px)",
    color: "from-blue-500 to-brand-500",
    glow: "rgba(14,165,233,0.25)",
  },
  {
    icon: Monitor,
    num: "02",
    title: "실시간 영상 확인",
    desc: "고화질 모니터로 현장에서 바로 배관 상태를 확인하실 수 있습니다.",
    image: "/images/inspection-2.jpeg",
    imageHint: "inspection-2.jpg (400x300px)",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "정확한 원인 분석",
    desc: "전문가의 진단 후 고객님 상황에 맞는 최적의 솔루션을 제안드립니다.",
    image: "/images/inspection-3.jpeg",
    imageHint: "inspection-3.jpg (400x300px)",
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
  },
];

export default function Inspection() {
  return (
    <section className="relative section-padding overflow-hidden" id="inspection">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff]" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[120px]" />
      <motion.div animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-gradient-to-r from-brand-50 to-blue-50 text-brand-600 border border-brand-100/50 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            누적 해결 건수 1만 돌파 기념
          </span>
          <h2 className="text-[2.25rem] md:text-[3.5rem] font-black text-brand-900 tracking-tight leading-tight mb-5">
            최첨단 내시경 검사
            <br />
            <span className="text-brand-500 glow-pulse">무료이벤트</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
            하수구 배관은 내부를 육안으로
            <br className="md:hidden" />
            확인하기 어렵습니다.
            <br />
            정밀 내시경으로 배관 속 누수, 이물질,
            <br className="md:hidden" />
            결함을 정확하게 파악합니다.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-brand-800 to-brand-900 shadow-dramatic hover:shadow-premium-lg transition-all duration-500 cursor-default ring-1 ring-white/[0.08]"
              >
                {/* Scan line effect */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400/80 to-transparent z-20 pointer-events-none"
                />

                <div className="aspect-[3/2] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col items-center justify-center text-white/20">
                    <f.icon className="w-12 h-12 mb-2" />
                    <p className="text-xs">{f.imageHint}</p>
                  </div>
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 relative z-[1]"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent" />
                  <div className="absolute top-4 right-4 text-white/[0.08] text-8xl font-black leading-none select-none">
                    {f.num}
                  </div>
                </div>

                <div className="relative px-7 pt-6 pb-8 -mt-6 z-10">
                  <div
                    className={`w-13 h-13 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4 shadow-lg ring-1 ring-white/10`}
                    style={{ boxShadow: `0 8px 24px ${f.glow}`, width: "52px", height: "52px" }}
                  >
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-extrabold text-2xl mb-3 text-glow-white">{f.title}</h4>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="text-center mt-14">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="tel:010-4111-6977"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm sm:text-lg font-bold shadow-lg transition-all duration-300 relative overflow-hidden"
            style={{ boxShadow: "0 10px 40px rgba(14,165,233,0.35), inset 0 1px 0 rgba(255,255,255,0.1)" }}
          >
            <Phone className="w-5 h-5" />
            무료 내시경 검사 예약하기
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-gray-400 text-sm mt-4">지금 예약하시면 내시경 검사가 무료!</p>
        </AnimateIn>
      </div>
    </section>
  );
}
