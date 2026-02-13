"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { MapPin, Phone, Zap } from "lucide-react";

const PHONE = "010-4111-6977";

interface City {
  name: string;
  x: number;
  y: number;
  major?: boolean;
  capital?: boolean;
}

const cities: City[] = [
  { name: "서울", x: 80, y: 89, major: true, capital: true },
  { name: "인천", x: 64, y: 98, major: true },
  { name: "수원", x: 80, y: 111 },
  { name: "춘천", x: 117, y: 67 },
  { name: "강릉", x: 181, y: 76 },
  { name: "대전", x: 101, y: 177, major: true },
  { name: "세종", x: 82, y: 165 },
  { name: "청주", x: 107, y: 156 },
  { name: "전주", x: 85, y: 216 },
  { name: "광주", x: 72, y: 264, major: true },
  { name: "대구", x: 165, y: 212, major: true },
  { name: "울산", x: 203, y: 236, major: true },
  { name: "부산", x: 191, y: 262, major: true },
  { name: "창원", x: 170, y: 259 },
  { name: "목포", x: 42, y: 290 },
  { name: "제주", x: 55, y: 365, major: true },
];

const KOREA_PATH =
  "M 60 72 Q 46 88 48 102 Q 46 118 40 138 Q 28 150 38 160 Q 56 170 58 196 Q 58 220 46 248 Q 40 270 36 290 Q 26 310 36 320 Q 58 314 84 302 Q 100 294 116 290 Q 132 286 150 280 Q 168 274 188 264 Q 200 254 208 238 Q 214 220 218 200 Q 216 170 200 140 Q 190 110 184 82 Q 176 50 158 26 Q 132 18 98 46 Q 72 62 60 72 Z";

export default function KoreaMap() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] to-[#0369a1]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
      />

      {/* Floating particles */}
      {[
        { top: "12%", right: "18%", size: "w-2 h-2", color: "bg-brand-400/40", dur: 5 },
        { top: "35%", left: "6%", size: "w-1.5 h-1.5", color: "bg-cyan-400/30", dur: 7 },
        { bottom: "22%", right: "12%", size: "w-2.5 h-2.5", color: "bg-brand-300/25", dur: 6 },
        { top: "65%", left: "4%", size: "w-2 h-2", color: "bg-blue-400/30", dur: 8 },
        { bottom: "38%", right: "28%", size: "w-1 h-1", color: "bg-white/15", dur: 5.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -18 : 14, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <AnimateIn className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-brand-500/15 border border-brand-400/25 text-brand-400 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            전국 출동 서비스
          </span>
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-black tracking-tight leading-tight mb-5">
            <span className="text-white">전국 어디든 </span>
            <span className="text-gradient-lime text-glow-lime">빠르게 출동</span>
            <span className="text-white">합니다</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-xl">
            24시간 연중무휴, 전국 방문 서비스를 제공합니다.
          </p>
        </AnimateIn>

        <AnimateIn className="mb-14">
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {[
              { value: "16+", label: "출동 가능 지역" },
              { value: "30분", label: "수도권 평균 출동" },
              { value: "24H", label: "연중무휴 운영" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-gradient-lime mb-1">{s.value}</div>
                <div className="text-white/50 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <AnimateIn>
            <div className="relative mx-auto w-full max-w-[380px]">
              {/* Outer glow behind map */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-white/10 rounded-3xl blur-[40px]"
              />

              {/* Map container - white background style */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-white" />

                <svg
                  viewBox="0 0 240 400"
                  className="relative z-[1] w-full h-auto p-4"
                >
                  <defs>
                    <linearGradient id="mapFillLight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a7d9a7" />
                      <stop offset="50%" stopColor="#8fce8f" />
                      <stop offset="100%" stopColor="#b5e0b5" />
                    </linearGradient>
                    <filter id="mapShadow">
                      <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.15)" />
                    </filter>
                    <filter id="pinShadow">
                      <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.25)" />
                    </filter>
                  </defs>

                  {/* Korea mainland - green style */}
                  <path d={KOREA_PATH} fill="url(#mapFillLight)" stroke="#7ab87a" strokeWidth="1" filter="url(#mapShadow)" />
                  {/* Jeju island */}
                  <ellipse cx="55" cy="365" rx="22" ry="9" fill="url(#mapFillLight)" stroke="#7ab87a" strokeWidth="1" filter="url(#mapShadow)" />

                  {/* City pin markers */}
                  {cities.map((city, i) => (
                    <g key={city.name} filter="url(#pinShadow)">
                      {/* Pin body */}
                      <motion.g
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                      >
                        {(city.major || city.capital) && (
                          <>
                            <path
                              d={`M${city.x} ${city.y + 2} C${city.x} ${city.y - 6}, ${city.x - 6} ${city.y - 12}, ${city.x - 6} ${city.y - 14} A6 6 0 1 1 ${city.x + 6} ${city.y - 14} C${city.x + 6} ${city.y - 12}, ${city.x} ${city.y - 6}, ${city.x} ${city.y + 2}Z`}
                              fill="#ef4444"
                              stroke="#dc2626"
                              strokeWidth="0.5"
                            />
                            <circle cx={city.x} cy={city.y - 14} r="2.5" fill="white" opacity="0.9" />
                          </>
                        )}
                        {!city.major && !city.capital && (
                          <circle cx={city.x} cy={city.y} r="2" fill="#ef4444" stroke="white" strokeWidth="0.5" />
                        )}
                      </motion.g>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="space-y-5">
              {/* Single combined coverage box */}
              <motion.div
                whileHover={{ x: 6, scale: 1.02 }}
                className="relative flex items-start gap-5 p-8 rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.1] hover:border-brand-400/25 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-brand-500/5 via-transparent to-transparent" />
                <div
                  className="relative w-16 h-16 bg-gradient-to-br from-brand-400 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "0 8px 24px rgba(14,165,233,0.4)" }}
                >
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-3">
                    <h4 className="font-black text-white text-3xl">전국 출동가능</h4>
                    <span className="text-[#fafd57] font-bold text-xs bg-[#fafd57]/15 border border-[#fafd57]/30 px-3 py-1 rounded-lg">
                      24시간
                    </span>
                  </div>
                  <p className="text-gradient-lime text-glow-lime font-black text-4xl mb-3">30분 방문</p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    서울 · 경기 · 인천 수도권 30분 내 출동
                    <br />
                    부산 · 대구 · 광주 · 대전 · 울산 당일 출동
                    <br />
                    전국 어디든 방문 서비스
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-5 rounded-2xl border border-brand-400/20 bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-transparent backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium mb-0.5">전국 어디서든 전화주세요</p>
                      <p className="text-white font-black text-xl sparkle-intense">{PHONE}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    style={{ boxShadow: "0 6px 20px rgba(14,165,233,0.4)" }}
                  >
                    <Phone className="w-4 h-4" />
                    지금 전화하기
                  </a>
                </div>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
