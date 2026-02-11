"use client";

import AnimateIn from "./AnimateIn";
import Image from "next/image";
import { Droplets, Building2, Home, Factory, Flame } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    name: "변기, 싱크대",
    highlight: "막힘",
    desc: "물 내려가는 속도가 더디거나 악취, 역류할 때!",
    image: "/images/service-toilet.jpg",
    imageHint: "service-toilet.jpg (500x400px)",
    gradient: "from-blue-500 to-cyan-500",
    tag: "BEST",
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
    icon: Home,
    name: "주택/아파트",
    highlight: "배관막힘",
    desc: "반복되는 막힘, 노후배관 문제를 근본적으로 해결!",
    image: "/images/service-house.jpg",
    imageHint: "service-house.jpg (500x400px)",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Factory,
    name: "공장/산업시설",
    highlight: "배관막힘",
    desc: "대형 산업시설 배관도 전문 장비로 확실하게 해결!",
    image: "/images/service-factory.jpg",
    imageHint: "service-factory.jpg (500x400px)",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Services() {
  return (
    <section className="relative section-padding overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-500 to-brand-600" />
      <div className="absolute inset-0 noise" />
      {/* Animated dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Mesh gradient overlays */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-700/30 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-16">
          <span className="section-badge bg-white/[0.1] border border-white/[0.15] text-white/90 mb-6 backdrop-blur-sm shadow-lg">
            <Flame className="w-4 h-4 text-gold-400" />
            완벽한 해결? 배관사무소에서 가능합니다!
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-tight text-glow-white">
            배관사무소 <span className="text-gradient-gold text-glow-gold">제공 서비스</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-base mt-4">
            다양한 배관 문제, 전문 장비와 기술로 확실하게 해결합니다.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-elevated hover:shadow-dramatic transition-all duration-500 ring-1 ring-black/[0.03]"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                  {s.tag && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 left-4 z-10 text-white text-xs font-black px-4 py-1.5 rounded-lg flex items-center gap-1.5 shadow-glow-danger"
                      style={{
                        background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
                      }}
                    >
                      <Flame className="w-3 h-3" />
                      {s.tag}
                    </motion.div>
                  )}
                  <Image
                    src={s.image}
                    alt={s.name + " " + s.highlight}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center text-gray-300">
                    <s.icon className="w-14 h-14 mb-2" />
                    <p className="text-xs">{s.imageHint}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="px-7 pt-5 pb-7 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center shadow-lg ring-1 ring-black/5 group-hover:shadow-glow transition-shadow duration-500`}
                    >
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-900">
                      <span className="text-brand-500">{s.name}</span>{" "}
                      {s.highlight}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
