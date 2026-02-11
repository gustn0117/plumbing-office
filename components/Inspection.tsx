"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { Camera, Monitor, FileCheck, Phone } from "lucide-react";

const features = [
  {
    icon: Camera,
    num: "01",
    title: "정밀 내시경 배관 진단",
    desc: "최첨단 카메라로 배관 내부를 직접 확인하여 정확한 원인을 파악합니다.",
    image: "/images/inspection-1.jpg",
    imageHint: "inspection-1.jpg (400x300px)",
  },
  {
    icon: Monitor,
    num: "02",
    title: "실시간 영상 확인",
    desc: "고화질 모니터로 현장에서 바로 배관 상태를 확인하실 수 있습니다.",
    image: "/images/inspection-2.jpg",
    imageHint: "inspection-2.jpg (400x300px)",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "정확한 원인 분석",
    desc: "전문가의 진단 후 고객님 상황에 맞는 최적의 솔루션을 제안드립니다.",
    image: "/images/inspection-3.jpg",
    imageHint: "inspection-3.jpg (400x300px)",
  },
];

export default function Inspection() {
  return (
    <section className="section-padding bg-white bg-premium-mesh" id="inspection">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-gradient-to-r from-brand-50 to-blue-50 text-brand-600 border border-brand-100/50 mb-6">
            누적 해결 건수 5만 돌파 기념
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-brand-900 tracking-tight leading-tight mb-5">
            최첨단 내시경 검사{" "}
            <span className="text-brand-500">무료이벤트</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            하수구 배관은 내부를 육안으로 확인하기 어렵습니다.
            <br className="hidden md:block" />
            정밀 내시경으로 배관 속 누수, 이물질, 결함을 정확하게 파악합니다.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-brand-800 to-brand-900 card-hover cursor-default ring-1 ring-white/[0.05]">
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col items-center justify-center text-white/20">
                    <f.icon className="w-12 h-12 mb-2" />
                    <p className="text-xs">{f.imageHint}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/30 to-transparent" />
                  <div className="absolute top-4 right-4 text-white/[0.06] text-7xl font-black leading-none">
                    {f.num}
                  </div>
                </div>

                <div className="relative px-7 pt-6 pb-8 -mt-6 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-500/25 ring-1 ring-white/10">
                    <f.icon className="w-5.5 h-5.5 text-white" />
                  </div>
                  <h4 className="text-white font-extrabold text-lg mb-3">{f.title}</h4>
                  <p className="text-white/40 text-[15px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="text-center mt-12">
          <a href="tel:010-0000-0000" className="inline-flex items-center gap-2.5 bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all duration-300">
            <Phone className="w-5 h-5" />
            무료 내시경 검사 예약하기
          </a>
          <p className="text-gray-400 text-sm mt-3">지금 예약하시면 내시경 검사가 무료!</p>
        </AnimateIn>
      </div>
    </section>
  );
}
