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
    desc: "원인을 파악 후 고객님 상황에 맞는 작업을 수행하며 자세히 설명드립니다.",
    color: "from-violet-500 to-purple-500",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "작업완료 및 검수",
    desc: "작업이 완료된 후 꼼꼼한 검수 작업을 진행하여 마무리합니다.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-gray-50" id="process">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <span className="inline-block bg-brand-50 text-brand-500 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            복잡한 절차에 지친 당신, 오늘부턴 배관사무소가 해답!
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-900 tracking-tight">
            신속, 간단한 배관사무소의 <span className="text-brand-500">진행절차</span>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.12}>
              <div className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 text-center group h-full">
                {/* Step number */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-xs font-black">{s.num}</span>
                </div>

                <p className="text-brand-500 text-xs font-semibold tracking-wider mt-2 mb-2">
                  STEP {s.num}
                </p>
                <h3 className="text-xl font-extrabold text-brand-900 mb-4">
                  {s.title}
                </h3>

                <div
                  className={`w-14 h-14 mx-auto bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="w-7 h-7 text-white" />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-gray-200" />
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
