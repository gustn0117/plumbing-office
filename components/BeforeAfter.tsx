"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-brand-50 text-brand-600 mb-6">
            배관사무소는 근본원인부터 진단하고 해결합니다.
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-brand-900 tracking-tight">
            배관사무소는{" "}
            <span className="text-brand-500">해결 못할 시</span> 금액을 받지 않습니다!
          </h2>
        </AnimateIn>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
                {/* Before */}
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div className="aspect-[3/2] relative bg-red-50/50">
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
                    <div className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }}>
                      BEFORE
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm">{c.beforeText}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/25 rotate-0">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex md:hidden items-center justify-center py-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center rotate-90 shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* After */}
                <div className="rounded-2xl overflow-hidden bg-white border border-emerald-100 shadow-sm hover:shadow-lg hover:shadow-emerald-500/[0.06] transition-all duration-500">
                  <div className="aspect-[3/2] relative bg-emerald-50/50">
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
                    <div className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
                      AFTER
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm">{c.afterText}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
