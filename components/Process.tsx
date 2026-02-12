"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Phone, Truck, Wrench, CheckCircle2, ChevronDown, Zap } from "lucide-react";

const PHONE = "010-4111-6977";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "문의접수",
    desc: `${PHONE}으로 전화주시면 신속하게 접수해드립니다.`,
    color: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.5)",
    borderColor: "#3b82f6",
    bg: "rgba(59,130,246,0.06)",
  },
  {
    num: "02",
    icon: Truck,
    title: "긴급출동",
    desc: "전국 어디서 불러주셔도 필요한곳으로 빠르게 달려갑니다.",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(20,184,166,0.5)",
    borderColor: "#14b8a6",
    bg: "rgba(20,184,166,0.06)",
  },
  {
    num: "03",
    icon: Wrench,
    title: "작업 진행",
    desc: "원인을 파악 후 고객님 상황에 맞는 작업을 수행합니다.",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.5)",
    borderColor: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "작업완료 및 검수",
    desc: "작업이 완료된 후 꼼꼼한 검수 작업을 진행합니다.",
    color: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.5)",
    borderColor: "#10b981",
    bg: "rgba(16,185,129,0.06)",
  },
];

export default function Process() {
  return (
    <section className="relative section-padding overflow-hidden" id="process">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] to-[#0369a1]" />
      <div className="absolute inset-0 noise" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/12 rounded-full blur-[200px]"
      />
      <motion.div
        animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-white/[0.04] border border-white/[0.08] text-white/90 mb-6 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <Zap className="w-4 h-4 text-gold-400" />
            복잡한 절차에 지친 당신, 오늘부턴 배관사무소가 해답!
          </span>
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-black text-white tracking-tight">
            신속, 간단한{" "}
            <span className="text-gradient-blue text-glow-blue">진행절차</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-xl mt-5">
            복잡한 과정 없이, 전화 한 통이면 끝!
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) - glowing neon */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] z-0">
            <div
              className="h-[2px] rounded-full"
              style={{
                background: "linear-gradient(90deg, #3b82f688, #8b5cf688, #10b98188)",
                boxShadow: "0 0 12px rgba(139,92,246,0.3), 0 0 4px rgba(59,130,246,0.2)",
              }}
            />
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-3px] left-0 w-20 h-[8px] rounded-full blur-[3px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
              }}
            />
          </div>

          {steps.map((s, i) => (
            <div key={i}>
              <AnimateIn delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative rounded-[1.25rem] p-[1.5px] overflow-hidden h-full"
                >
                  {/* === ANIMATED GRADIENT BORDER === */}
                  <div
                    className="absolute inset-0 rounded-[1.25rem] z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(${90 + i * 45}deg, transparent 25%, ${s.borderColor}aa 45%, ${s.borderColor} 50%, ${s.borderColor}aa 55%, transparent 75%)`,
                      backgroundSize: "300% 300%",
                      animation: `gradientBorderMove 3.5s ease infinite ${i * 0.4}s`,
                    }}
                  />
                  {/* Static gradient border fallback */}
                  <div
                    className="absolute inset-0 rounded-[1.25rem] z-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${s.borderColor}55, transparent 50%, ${s.borderColor}55)`,
                    }}
                  />

                  {/* Glow behind card on hover */}
                  <div
                    className="absolute -inset-3 rounded-[1.75rem] opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl z-0"
                    style={{ background: s.glow }}
                  />

                  {/* Card inner */}
                  <div
                    className="relative z-10 rounded-[calc(1.25rem-1.5px)] px-6 py-8 text-center h-full overflow-hidden"
                    style={{
                      background: "linear-gradient(160deg, rgba(3,105,161,0.95) 0%, rgba(2,132,199,0.97) 50%, rgba(3,105,161,1) 100%)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Hover tint */}
                    <div
                      className="absolute inset-0 rounded-[calc(1.25rem-1.5px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: s.bg }}
                    />
                    {/* Shimmer sweep */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.02) 42%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 58%, transparent 65%)",
                        backgroundSize: "250% 100%",
                        animation: "shimmer 2.5s linear infinite",
                      }}
                    />

                    {/* Big watermark number */}
                    <div
                      className="absolute top-1 right-3 text-[85px] font-black leading-none select-none pointer-events-none transition-all duration-500"
                      style={{
                        background: `linear-gradient(180deg, ${s.borderColor}12, transparent)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {s.num}
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="relative w-16 h-16 mx-auto mb-5">
                        <motion.div
                          whileHover={{ rotate: [0, -8, 8, 0] }}
                          className={`w-full h-full bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          style={{
                            boxShadow: `0 10px 35px ${s.glow}, 0 0 25px ${s.glow}30`,
                          }}
                        >
                          <s.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        {/* Step number badge */}
                        <div
                          className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center ring-2"
                          style={{
                            background: "linear-gradient(135deg, rgba(3,105,161,1), rgba(2,132,199,1))",
                            borderColor: `${s.borderColor}40`,
                            boxShadow: `0 4px 12px rgba(0,0,0,0.4), 0 0 8px ${s.borderColor}20, 0 0 0 2px ${s.borderColor}30`,
                          }}
                        >
                          <span className="text-xs font-black text-white/80">{s.num}</span>
                        </div>
                        {/* Pulse ring on hover */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            boxShadow: `0 0 0 4px ${s.borderColor}15, 0 0 0 8px ${s.borderColor}08`,
                          }}
                        />
                      </div>

                      <h3 className="text-2xl font-extrabold text-white mb-3">{s.title}</h3>
                      <p className="text-white/60 text-lg leading-relaxed">{s.desc}</p>

                      {/* Bottom accent line */}
                      <div
                        className="mt-5 mx-auto h-[2px] w-12 rounded-full opacity-30 group-hover:opacity-70 group-hover:w-20 transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${s.borderColor}, transparent)`,
                          boxShadow: `0 0 8px ${s.borderColor}40`,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>

              {/* Mobile step arrow */}
              {i < steps.length - 1 && (
                <div className="flex sm:hidden items-center justify-center py-3">
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ChevronDown className="w-5 h-5 text-white/20" />
                  </motion.div>
                </div>
              )}
            </div>
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
