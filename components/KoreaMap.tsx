"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { MapPin, Truck, Phone, Zap, Shield } from "lucide-react";

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

const connections = [
  { x: 191, y: 262, dur: 2.5 },
  { x: 72, y: 264, dur: 2.8 },
  { x: 101, y: 177, dur: 1.8 },
  { x: 165, y: 212, dur: 2.2 },
  { x: 55, y: 365, dur: 3.2 },
];

const coverage = [
  { icon: Zap, title: "수도권", time: "30분 내 출동", desc: "서울 · 경기 · 인천", color: "from-brand-400 to-cyan-400", glow: "rgba(14,165,233,0.4)", badge: "최단시간" },
  { icon: Truck, title: "광역시", time: "당일 출동", desc: "부산 · 대구 · 광주 · 대전 · 울산", color: "from-brand-500 to-blue-500", glow: "rgba(14,165,233,0.3)", badge: "당일처리" },
  { icon: Shield, title: "전국", time: "출동 가능", desc: "전국 어디든 방문 서비스", color: "from-blue-500 to-indigo-500", glow: "rgba(59,130,246,0.3)", badge: "전국대응" },
];

const KOREA_PATH =
  "M 60 72 Q 46 88 48 102 Q 46 118 40 138 Q 28 150 38 160 Q 56 170 58 196 Q 58 220 46 248 Q 40 270 36 290 Q 26 310 36 320 Q 58 314 84 302 Q 100 294 116 290 Q 132 286 150 280 Q 168 274 188 264 Q 200 254 208 238 Q 214 220 218 200 Q 216 170 200 140 Q 190 110 184 82 Q 176 50 158 26 Q 132 18 98 46 Q 72 62 60 72 Z";

export default function KoreaMap() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e] via-brand-950 to-[#051525]" />
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
          <h2 className="text-4xl md:text-[3.25rem] font-black tracking-tight leading-tight mb-5">
            <span className="text-white">전국 어디든 </span>
            <span className="text-gradient-blue text-glow-blue">빠르게 출동</span>
            <span className="text-white">합니다</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
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
                <div className="text-3xl md:text-4xl font-black text-brand-400 mb-1">{s.value}</div>
                <div className="text-white/35 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <AnimateIn>
            <div className="relative mx-auto w-full max-w-[380px]">
              {/* Outer glow behind map */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-cyan-500/10 rounded-3xl blur-[50px]"
              />

              {/* Map container with animated border */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Animated border gradient */}
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(14,165,233,0.3), rgba(6,182,212,0.15), rgba(14,165,233,0.3))",
                    padding: "1px",
                  }}
                />
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#071d32]/95 backdrop-blur-sm" />

                {/* Top & bottom edge glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-brand-400/50 to-transparent rounded-full z-10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full z-10" />

                <svg
                  viewBox="0 0 240 400"
                  className="relative z-[1] w-full h-auto"
                  style={{ filter: "drop-shadow(0 0 25px rgba(14,165,233,0.12))" }}
                >
                  <defs>
                    <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(14,165,233,0.15)" />
                      <stop offset="50%" stopColor="rgba(14,165,233,0.08)" />
                      <stop offset="100%" stopColor="rgba(6,182,212,0.12)" />
                    </linearGradient>
                    <linearGradient id="mapStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(14,165,233,0.6)" />
                      <stop offset="100%" stopColor="rgba(6,182,212,0.6)" />
                    </linearGradient>
                    <radialGradient id="seoulGlow" cx="80" cy="89" r="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(56,189,248,0.12)" />
                      <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                    </radialGradient>
                    <radialGradient id="radarGrad" cx="80" cy="89" r="55" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(14,165,233,0.12)" />
                      <stop offset="100%" stopColor="rgba(14,165,233,0)" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="strongGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="8" cy="8" r="0.4" fill="rgba(14,165,233,0.1)" />
                    </pattern>
                  </defs>

                  {/* Background dot grid */}
                  <rect width="240" height="400" fill="url(#dotGrid)" />

                  {/* Seoul area ambient glow */}
                  <circle cx="80" cy="89" r="60" fill="url(#seoulGlow)" />

                  {/* Radar sweep animation */}
                  <motion.g
                    style={{ transformOrigin: "80px 89px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <path
                      d="M 80 89 L 80 34 A 55 55 0 0 1 127 64 Z"
                      fill="url(#radarGrad)"
                    />
                  </motion.g>

                  {/* Korea mainland */}
                  <path d={KOREA_PATH} fill="url(#mapFill)" stroke="url(#mapStroke)" strokeWidth="0.8" filter="url(#glow)" />
                  {/* Map inner glow overlay */}
                  <path d={KOREA_PATH} fill="none" stroke="rgba(56,189,248,0.1)" strokeWidth="2" filter="url(#strongGlow)" />
                  {/* Jeju island */}
                  <ellipse cx="55" cy="365" rx="22" ry="9" fill="url(#mapFill)" stroke="url(#mapStroke)" strokeWidth="0.8" filter="url(#glow)" />

                  {/* Coverage zone circles */}
                  <motion.circle
                    cx="80" cy="89" r="30"
                    fill="none" stroke="rgba(56,189,248,0.2)"
                    strokeWidth="0.6" strokeDasharray="2 3"
                    animate={{ r: [28, 33, 28], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="80" cy="89" r="80"
                    fill="none" stroke="rgba(14,165,233,0.1)"
                    strokeWidth="0.4" strokeDasharray="4 6"
                    animate={{ r: [78, 84, 78], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Connection lines with glow */}
                  {connections.map((c, i) => (
                    <g key={`conn-${i}`}>
                      <motion.line
                        x1="80" y1="89" x2={c.x} y2={c.y}
                        stroke="rgba(14,165,233,0.08)"
                        strokeWidth="1.5"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 0.8 }}
                      />
                      <motion.line
                        x1="80" y1="89" x2={c.x} y2={c.y}
                        stroke="rgba(14,165,233,0.15)"
                        strokeWidth="0.5"
                        strokeDasharray="3 5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 0.8 }}
                      />
                      {/* Traveling dot along line */}
                      <circle r="1.5" fill="#38bdf8" filter="url(#glow)">
                        <animateMotion
                          dur={`${c.dur}s`}
                          repeatCount="indefinite"
                          path={`M 80 89 L ${c.x} ${c.y}`}
                        />
                        <animate
                          attributeName="opacity"
                          values="0;0.8;0.8;0"
                          dur={`${c.dur}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))}

                  {/* City markers */}
                  {cities.map((city, i) => (
                    <g key={city.name}>
                      {/* Expanding pulse ring */}
                      {city.major && (
                        <motion.circle
                          cx={city.x} cy={city.y}
                          r={city.capital ? 6 : 4}
                          fill="none"
                          stroke={city.capital ? "rgba(56,189,248,0.6)" : "rgba(14,165,233,0.4)"}
                          strokeWidth="0.5"
                          animate={{
                            r: city.capital ? [6, 18, 6] : [4, 12, 4],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{ duration: city.capital ? 2 : 2.5, repeat: Infinity, delay: i * 0.12 }}
                        />
                      )}
                      {/* Seoul double ring */}
                      {city.capital && (
                        <>
                          <circle cx={city.x} cy={city.y} r="6" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="0.6" />
                          <circle cx={city.x} cy={city.y} r="8" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="0.4" strokeDasharray="2 2" />
                        </>
                      )}
                      {/* City dot with glow */}
                      <circle
                        cx={city.x} cy={city.y}
                        r={city.capital ? 3.5 : city.major ? 2.5 : 1.5}
                        fill={city.capital ? "#38bdf8" : city.major ? "#0ea5e9" : "rgba(14,165,233,0.6)"}
                        stroke={city.major ? "rgba(186,230,253,0.5)" : "none"}
                        strokeWidth="0.5"
                        filter={city.capital ? "url(#strongGlow)" : city.major ? "url(#glow)" : undefined}
                      />
                      {/* City label */}
                      {city.major && (
                        <text
                          x={city.x}
                          y={city.y - (city.capital ? 12 : 7)}
                          textAnchor="middle"
                          fontSize={city.capital ? 10 : 7.5}
                          fontWeight="800"
                          fill={city.capital ? "#7dd3fc" : "rgba(186,230,253,0.7)"}
                          style={city.capital ? { filter: "drop-shadow(0 0 4px rgba(56,189,248,0.5))" } : undefined}
                        >
                          {city.name}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="space-y-5">
              {coverage.map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="relative flex items-start gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] hover:border-brand-400/20 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-brand-500/5 via-transparent to-transparent" />
                  {/* Step number */}
                  <div className="absolute top-3 right-4 text-brand-400/10 font-black text-4xl select-none">
                    0{i + 1}
                  </div>
                  <div
                    className={`relative w-14 h-14 bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    style={{ boxShadow: `0 8px 24px ${c.glow}` }}
                  >
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-2.5 mb-2">
                      <h4 className="font-black text-white text-xl">{c.title}</h4>
                      <span className="text-brand-400 font-bold text-xs bg-brand-500/15 border border-brand-400/20 px-2.5 py-1 rounded-lg">
                        {c.badge}
                      </span>
                    </div>
                    <p className="text-brand-300 font-bold text-lg mb-1">{c.time}</p>
                    <p className="text-white/35 text-base">{c.desc}</p>
                  </div>
                </motion.div>
              ))}

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
