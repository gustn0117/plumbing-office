"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { Droplets, Building2, Waves, Search } from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "변기, 싱크대",
    highlight: "막힘",
    desc: "물 내려가는 속도가 더디거나 악취, 역류할 때!",
    image: "/images/service-toilet.jpg",
    imageHint: "service-toilet.jpg (500x400px)",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    name: "상가",
    highlight: "배관막힘",
    desc: "식당, 공공기관 등 많은 분들이 방문하시는 곳일 때!",
    image: "/images/service-commercial.jpg",
    imageHint: "service-commercial.jpg (500x400px)",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Waves,
    name: "하수구",
    highlight: "역류",
    desc: "하수구에서 물이 역류하거나 넘칠 때!",
    image: "/images/service-drain.jpg",
    imageHint: "service-drain.jpg (500x400px)",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Search,
    name: "누수",
    highlight: "탐지 및 수리",
    desc: "보이지 않는 곳의 누수도 정밀 탐지 후 수리!",
    image: "/images/service-leak.jpg",
    imageHint: "service-leak.jpg (500x400px)",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Services() {
  return (
    <section className="relative section-padding overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-500 to-brand-600" />
      <div className="absolute inset-0 noise" />
      {/* Mesh gradient overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-white/[0.08] border border-white/[0.12] text-white/90 mb-6 backdrop-blur-sm">
            완벽한 해결? 배관사무소에서 가능합니다!
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-tight">
            배관사무소 <span className="text-gold-300">제공 서비스</span>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden card-hover ring-1 ring-black/[0.03]">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                  <Image
                    src={s.image}
                    alt={s.name + " " + s.highlight}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center text-gray-300">
                    <s.icon className="w-14 h-14 mb-2" />
                    <p className="text-xs">{s.imageHint}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="px-7 pt-5 pb-7 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-11 h-11 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center shadow-lg ring-1 ring-black/5`}
                    >
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-900">
                      <span className="text-brand-500">{s.name}</span> {s.highlight}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
