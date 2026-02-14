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
    glow: "rgba(59,130,246,0.3)",
    iconBg: "bg-blue-500",
  },
  {
    num: "02",
    icon: Truck,
    title: "긴급출동",
    desc: "전국 어디서 불러주셔도 필요한곳으로 빠르게 달려갑니다.",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(20,184,166,0.3)",
    iconBg: "bg-teal-500",
  },
  {
    num: "03",
    icon: Wrench,
    title: "작업 진행",
    desc: "원인을 파악 후 고객님 상황에 맞는 작업을 수행합니다.",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
    iconBg: "bg-violet-500",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "작업완료 및 검수",
    desc: "작업이 완료된 후 꼼꼼한 검수 작업을 진행합니다.",
    color: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.3)",
    iconBg: "bg-emerald-500",
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
        className="hidden md:block absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/12 rounded-full blur-[200px]"
      />
      <motion.div
        animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[180px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-white/[0.04] border border-white/[0.08] text-white/90 mb-6 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <Zap className="w-4 h-4 text-gold-400" />
            복잡한 절차에 지친 당신, 오늘부턴 배관사무소가 해답!
          </span>
          <h2 className="text-[2.25rem] md:text-[3.5rem] font-black text-white tracking-tight">
            신속, 간단한{" "}
            <span className="text-gradient-blue text-glow-blue">진행절차</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg md:text-xl mt-5">
            복잡한 과정 없이, 전화 한 통이면 끝!
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col">
              <AnimateIn delay={i * 0.12} className="flex-1">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-7 text-center h-full overflow-hidden"
                >
                  {/* Watermark number */}
                  <div className="absolute top-2 right-4 text-[80px] font-black leading-none select-none pointer-events-none text-gray-100">
                    {s.num}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mx-auto mb-5">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center`}
                        style={{ boxShadow: `0 8px 24px ${s.glow}` }}
                      >
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200">
                        <span className="text-xs font-black text-gray-700">{s.num}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </AnimateIn>

              {/* Mobile step arrow */}
              {i < steps.length - 1 && (
                <div className="flex sm:hidden items-center justify-center py-3">
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ChevronDown className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
