"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

const cases = [
  {
    beforeImg: "/images/before-1.jpg",
    afterImg: "/images/after-1.jpg",
    beforeText: "배관이 꽉 막혀 물이 빠지지 않았습니다.",
    afterText: "전문 장비로 깔끔하게 해결 완료!",
    beforeHint: "before-1.jpg (500x350px)",
    afterHint: "after-1.jpg (500x350px)",
  },
  {
    beforeImg: "/images/before-2.jpg",
    afterImg: "/images/after-2.jpg",
    beforeText: "하수구 역류로 악취가 심했습니다.",
    afterText: "근본 원인을 찾아 완벽 수리!",
    beforeHint: "before-2.jpg (500x350px)",
    afterHint: "after-2.jpg (500x350px)",
  },
];

export default function BeforeAfter() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-white bg-mesh-vivid" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-[120px]" />
      <motion.div animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/25 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-gradient-to-r from-brand-50 to-blue-50 text-brand-600 border border-brand-100/50 mb-6 shadow-sm">
            배관사무소는 근본원인부터 진단하고 해결합니다.
          </span>
          <h2 className="text-4xl md:text-[3rem] font-black text-brand-900 tracking-tight">
            배관사무소는{" "}
            <span className="text-brand-500">해결 못할 시</span> 금액을 받지 않습니다!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base mt-4">
            실제 시공 전/후 사진으로 확인하세요. 모든 작업은 사진으로 기록됩니다.
          </p>
        </AnimateIn>

        <div className="space-y-14">
          {cases.map((c, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
                {/* Before */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-white border border-red-100/80 shadow-elevated hover:shadow-dramatic transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative bg-red-50/50">
                    <Image
                      src={c.beforeImg}
                      alt="작업 전"
                      fill
                      className="object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                      <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                      <p className="text-xs">{c.beforeHint}</p>
                    </div>
                    <div
                      className="absolute top-3 right-3 text-white text-[11px] font-black px-5 py-2.5 rounded-xl flex items-center gap-1.5 tracking-wider"
                      style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", boxShadow: "0 8px 25px rgba(239,68,68,0.5)" }}
                    >
                      <AlertTriangle className="w-3 h-3" />
                      BEFORE
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-500 text-[15px] leading-relaxed">{c.beforeText}</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-brand-400/20"
                    style={{ boxShadow: "0 8px 24px rgba(41,128,185,0.35)" }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="flex md:hidden items-center justify-center py-2">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center rotate-90 shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* After */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-white border border-emerald-200/80 shadow-elevated hover:shadow-dramatic transition-all duration-500 ring-1 ring-emerald-500/[0.08]"
                >
                  <div className="aspect-[4/3] relative bg-emerald-50/50">
                    <Image
                      src={c.afterImg}
                      alt="작업 후"
                      fill
                      className="object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                      <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                      <p className="text-xs">{c.afterHint}</p>
                    </div>
                    <div
                      className="absolute top-3 right-3 text-white text-[11px] font-black px-5 py-2.5 rounded-xl flex items-center gap-1.5 tracking-wider"
                      style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", boxShadow: "0 8px 25px rgba(16,185,129,0.5)" }}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      AFTER
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-500 text-[15px] leading-relaxed">{c.afterText}</p>
                  </div>
                </motion.div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
