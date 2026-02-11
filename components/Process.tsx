"use client";

import AnimateIn from "./AnimateIn";
import { Phone, Truck, Wrench, CheckCircle2, ChevronDown } from "lucide-react";

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
    <section
      className="section-padding bg-gradient-to-b from-gray-50/80 to-white"
      id="process"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-gradient-to-r from-brand-50 to-blue-50 text-brand-600 border border-brand-100/50 mb-6">
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
          <div className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-blue-200/80 via-violet-200/80 to-emerald-200/80 z-0" />

          {steps.map((s, i) => (
            <div key={i}>
              <AnimateIn delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl px-6 py-8 border border-gray-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-brand-200/60 hover:shadow-card-hover transition-all duration-500 text-center group h-full z-10">
                  {/* Icon with step number badge */}
                  <div className="relative w-14 h-14 mx-auto mb-5">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
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
                </div>
              </AnimateIn>

              {/* Mobile step arrow */}
              {i < steps.length - 1 && (
                <div className="flex sm:hidden items-center justify-center py-2">
                  <ChevronDown className="w-5 h-5 text-brand-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
