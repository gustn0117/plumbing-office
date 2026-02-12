"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { Droplets, Building2, Home, Factory, Flame, ArrowUpRight, Sparkles, Search } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    name: "변기, 싱크대",
    highlight: "막힘",
    desc: "물 내려가는 속도가 더디거나 악취, 역류할 때!",
    image: "/images/service-toilet.jpeg",
    imageHint: "service-toilet.jpg (500x400px)",
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.5)",
    borderColor: "#3b82f6",
    tag: "BEST",
  },
  {
    icon: Building2,
    name: "상가",
    highlight: "배관막힘",
    desc: "식당, 공공기관 등 많은 분들이 방문하시는 곳일 때!",
    image: "/images/service-commercial.jpeg",
    imageHint: "service-commercial.jpg (500x400px)",
    gradient: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.5)",
    borderColor: "#8b5cf6",
  },
  {
    icon: Home,
    name: "주택/아파트",
    highlight: "배관막힘",
    desc: "반복되는 막힘, 노후배관 문제를 근본적으로 해결!",
    image: "/images/service-house.jpeg",
    imageHint: "service-house.jpg (500x400px)",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.5)",
    borderColor: "#10b981",
  },
  {
    icon: Factory,
    name: "공장/산업시설",
    highlight: "배관막힘",
    desc: "대형 산업시설 배관도 전문 장비로 확실하게 해결!",
    image: "/images/service-factory.jpeg",
    imageHint: "service-factory.jpg (500x400px)",
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.5)",
    borderColor: "#f97316",
  },
  {
    icon: Search,
    name: "누수 탐지",
    highlight: "및 수리",
    desc: "보이지 않는 누수, 최신 탐지 장비로 정확히 찾아 수리합니다!",
    image: "/images/service-leak.jpeg",
    imageHint: "service-leak.jpg (500x400px)",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(14,165,233,0.5)",
    borderColor: "#0ea5e9",
    tag: "NEW",
  },
];

export default function Services() {
  return (
    <section className="relative section-padding overflow-hidden" id="services">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0c6a94]" />
      <div className="absolute inset-0 noise" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Massive animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.12, 0.3, 0.12] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-60 -right-60 w-[1000px] h-[1000px] bg-blue-600/15 rounded-full blur-[250px]"
      />
      <motion.div
        animate={{ scale: [1.3, 0.7, 1.3], opacity: [0.08, 0.25, 0.08] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute -bottom-60 -left-60 w-[900px] h-[900px] bg-purple-600/15 rounded-full blur-[220px]"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/8 rounded-full blur-[180px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-20">
          <span className="section-badge bg-white/[0.04] border border-white/[0.08] text-white/90 mb-6 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.12)]">
            <Flame className="w-4 h-4 text-gold-400" />
            완벽한 해결? 배관사무소에서 가능합니다!
          </span>
          <h2 className="text-[2.75rem] md:text-[3.75rem] font-black text-white tracking-tight leading-tight">
            배관사무소{" "}
            <span className="text-gradient-gold text-glow-gold">제공 서비스</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-xl mt-5">
            다양한 배관 문제, 전문 장비와 기술로 확실하게 해결합니다.
          </p>
        </AnimateIn>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.12} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative rounded-[1.5rem] p-[2px] overflow-hidden h-full"
              >
                {/* === ANIMATED GRADIENT BORDER (visible at all times) === */}
                <div
                  className="absolute inset-0 rounded-[1.5rem] z-0"
                  style={{
                    background: `linear-gradient(var(--card-angle-${i}, ${45 + i * 90}deg), transparent 20%, ${s.borderColor}88 40%, ${s.borderColor} 50%, ${s.borderColor}88 60%, transparent 80%)`,
                    backgroundSize: "300% 300%",
                    animation: `gradientBorderMove 4s ease infinite ${i * 0.5}s`,
                  }}
                />
                {/* Static subtle border fallback for when animation not supported */}
                <div
                  className="absolute inset-0 rounded-[1.5rem] z-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${s.borderColor}66, transparent 40%, transparent 60%, ${s.borderColor}66)`,
                  }}
                />

                {/* Glow behind card on hover */}
                <div
                  className="absolute -inset-4 rounded-[2rem] opacity-0 group-hover:opacity-70 transition-opacity duration-700 blur-2xl z-0"
                  style={{ background: s.glow }}
                />

                {/* Card inner (gradient glass on dark) */}
                <div
                  className="relative z-10 rounded-[calc(1.5rem-2px)] overflow-hidden backdrop-blur-sm h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(3,105,161,0.96) 0%, rgba(2,132,199,0.98) 40%, rgba(3,105,161,1) 100%)",
                    boxShadow: `0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 0 80px rgba(255,255,255,0.01)`,
                  }}
                >
                  {/* Shimmer sweep on hover */}
                  <div
                    className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.03) 42%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 58%, transparent 65%)",
                      backgroundSize: "250% 100%",
                      animation: "shimmer 2.5s linear infinite",
                    }}
                  />

                  {/* Image area */}
                  <div className="aspect-[3/2] relative overflow-hidden">
                    {s.tag && (
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute top-4 left-4 z-20 text-white text-xs font-black px-5 py-2 rounded-xl flex items-center gap-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff4136 0%, #e74c3c 50%, #c0392b 100%)",
                          boxShadow:
                            "0 8px 30px rgba(231,76,60,0.6), 0 0 15px rgba(231,76,60,0.3)",
                        }}
                      >
                        <Flame className="w-3.5 h-3.5" />
                        {s.tag}
                      </motion.div>
                    )}
                    {/* Placeholder fallback (dark) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0369a1] to-[#0284c7] flex flex-col items-center justify-center text-gray-600">
                      <s.icon className="w-14 h-14 mb-2 opacity-40" />
                      <p className="text-xs opacity-40">{s.imageHint}</p>
                    </div>
                    <Image
                      src={s.image}
                      alt={s.name + " " + s.highlight}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 relative z-[1]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Hover overlay with arrow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d5c]/95 via-[#0a3d5c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1] flex items-end justify-end p-5">
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-md"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          boxShadow: `0 8px 30px ${s.glow}`,
                        }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0369a1] to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="px-7 pt-7 pb-8 relative flex-1 flex flex-col">
                    {/* Colored top highlight line */}
                    <div
                      className="absolute top-0 left-7 right-7 h-px opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${s.borderColor}, transparent)`,
                      }}
                    />

                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className={`bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative`}
                        style={{
                          width: "52px",
                          height: "52px",
                          boxShadow: `0 10px 35px ${s.glow}, 0 0 20px ${s.glow}40`,
                        }}
                      >
                        <s.icon className="w-6 h-6 text-white" />
                        {/* Pulse ring behind icon */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            boxShadow: `0 0 0 4px ${s.borderColor}20, 0 0 0 8px ${s.borderColor}10`,
                          }}
                        />
                      </div>
                      <h3 className="text-2xl font-black text-white">
                        <span
                          style={{
                            background: `linear-gradient(135deg, ${s.borderColor}, ${s.borderColor}bb)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {s.name}
                        </span>{" "}
                        {s.highlight}
                      </h3>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed flex-1">
                      {s.desc}
                    </p>

                    {/* Reveal-on-hover accent bar */}
                    <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: s.borderColor }} />
                      <span className="text-xs font-bold" style={{ color: s.borderColor }}>
                        자세히 보기
                      </span>
                      <div
                        className="flex-1 h-px"
                        style={{
                          background: `linear-gradient(90deg, ${s.borderColor}60, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Keyframes for animated border */}
      <style jsx>{`
        @keyframes gradientBorderMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  );
}
