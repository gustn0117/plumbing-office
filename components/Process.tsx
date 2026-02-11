"use client";

import AnimateIn from "./AnimateIn";
import { Phone, Truck, Wrench, CheckCircle2 } from "lucide-react";

const PHONE = "010-0000-0000";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "문의접수",
    desc: `${PHONE}으로 전화주시면 신속하게 접수해드립니다.`,
    color: "from-blue-500 to-blue-600",
  },
  {
    num: "02",
    icon: Truck,
    title: "긴급출동",
    desc: "전국 어디서 불러주셔도 필요한곳으로 빠르게 달려갑니다.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    num: "03",
    icon: Wrench,
    title: "작업 진행",
    desc: "원인을 파악 후 고객님 상황에 맞는 작업을 수행합니다.",
    color: "from-violet-500 to-purple-500",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "작업완료 및 검수",
    desc: "작업이 완료된 후 꼼꼼한 검수 작업을 진행합니다.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-gray-50/80" id="process">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-brand-50 text-brand-600 mb-6">
            복잡한 절차에 지친 당신, 오늘부턴 배관사무소가 해답!
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-brand-900 tracking-tight">
            신속, 간단한 <span className="text-brand-500">진행절차</span>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200 z-0" />

          {steps.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.12}>
              <div className="relative bg-white rounded-2xl px-6 py-8 border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/[0.04] transition-all duration-500 text-center group h-full z-10">
                {/* Step number badge */}
                <div
                  className={`w-10 h-10 mx-auto bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center shadow-lg mb-5`}
                >
                  <span className="text-white text-sm font-black">{s.num}</span>
                </div>

                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-5 opacity-10`} />
                <div className="w-14 h-14 mx-auto -mt-[76px] mb-5 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-brand-500" />
                </div>

                <h3 className="text-lg font-extrabold text-brand-900 mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
