"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Phone, Truck, Wrench, CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";

const PHONE = "010-0000-0000";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "문의접수",
    desc: `${PHONE}으로 전화주시면 신속하게 접수해드립니다.`,
    color: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.3)",
  },
  {
    num: "02",
    icon: Truck,
    title: "긴급출동",
    desc: "전국 어디서 불러주셔도 필요한곳으로 빠르게 달려갑니다.",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(20,184,166,0.3)",
  },
  {
    num: "03",
    icon: Wrench,
    title: "작업 진행",
    desc: "원인을 파악 후 고객님 상황에 맞는 작업을 수행합니다.",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "작업완료 및 검수",
    desc: "작업이 완료된 후 꼼꼼한 검수 작업을 진행합니다.",
    color: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.3)",
  },
];

export default function Process() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      id="process"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80" />
      <div className="absolute inset-0 bg-mesh-vivid" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-gradient-to-r from-brand-50 to-blue-50 text-brand-600 border border-brand-100/50 mb-6 shadow-sm">
            복잡한 절차에 지친 당신, 오늘부턴 배관사무소가 해답!
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-brand-900 tracking-tight">
            신속, 간단한 <span className="text-brand-500">진행절차</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base mt-4">
            복잡한 과정 없이, 전화 한 통이면 끝!
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] z-0">
            <div className="h-[2px] bg-gradient-to-r from-blue-300/60 via-violet-300/60 to-emerald-300/60 rounded-full" />
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-transparent via-brand-500 to-transparent rounded-full"
            />
          </div>

          {steps.map((s, i) => (
            <div key={i}>
              <AnimateIn delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl px-6 py-8 border border-gray-100/80 shadow-elevated hover:shadow-dramatic transition-all duration-500 text-center group h-full z-10"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 40px ${s.glow}, 0 20px 40px -10px rgba(0,0,0,0.1)` }}
                  />

                  {/* Icon with step number badge */}
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      className={`w-full h-full bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 8px 24px ${s.glow}` }}
                    >
                      <s.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center ring-2 ring-gray-100">
                      <span className="text-xs font-black text-brand-900">
                        {s.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-brand-900 mb-3">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              </AnimateIn>

              {/* Mobile step arrow */}
              {i < steps.length - 1 && (
                <div className="flex sm:hidden items-center justify-center py-3">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown className="w-5 h-5 text-brand-300" />
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
