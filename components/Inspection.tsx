"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { Camera, Monitor, FileCheck } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "정밀 내시경 배관 진단",
    desc: "최첨단 카메라로 배관 내부를 직접 확인",
    image: "/images/inspection-1.jpg",
    imageHint: "inspection-1.jpg (내시경 장비 사진, 400x300px)",
  },
  {
    icon: Monitor,
    title: "실시간 영상 확인",
    desc: "고화질 모니터로 현장에서 바로 확인",
    image: "/images/inspection-2.jpg",
    imageHint: "inspection-2.jpg (모니터 화면 사진, 400x300px)",
  },
  {
    icon: FileCheck,
    title: "정확한 원인 분석",
    desc: "전문가의 진단 후 맞춤 솔루션 제공",
    image: "/images/inspection-3.jpg",
    imageHint: "inspection-3.jpg (분석 보고 사진, 400x300px)",
  },
];

export default function Inspection() {
  return (
    <section className="section-padding bg-white" id="inspection">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-500 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            📢 누적 해결 건수 5만 돌파 기념
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-900 tracking-tight mb-4">
            최첨단 내시경 검사{" "}
            <span className="text-brand-500">무료이벤트</span>
          </h2>
          <h3 className="text-xl font-bold text-brand-800 mb-4">
            내시경 검사 왜 필요하나요?
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            하수구 배관은 주철관이나 PVC, PE 관으로 내부를 육안으로 확인하기 어렵습니다.
            정밀 내시경으로 배관 속 누수, 이물질, 결함, 손상을 정확하게 파악합니다.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden bg-brand-900 hover:shadow-2xl transition-all duration-500">
                {/*
                  ============================
                    내시경 검사 이미지
                    아래 경로에 이미지를 넣어주세요
                  ============================
                */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col items-center justify-center text-white/25">
                    <f.icon className="w-12 h-12 mb-2" />
                    <p className="text-xs">{f.imageHint}</p>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
                </div>

                <div className="relative p-6 -mt-8 z-10">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-brand-500/30">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-white/50 text-sm">{f.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
