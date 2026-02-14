"use client";

import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck, MessageSquare, Shield, Award } from "lucide-react";

const reviews = [
  {
    name: "김O희",
    location: "서울 강남구",
    initial: "김",
    color: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.5)",
    borderColor: "#3b82f6",
    text: "처음 겪는 경우라 가격이나 비용 등 막막했는데, 배관사무소에서 상담받고 빠르게 해결됐습니다. 친절하고 꼼꼼한 서비스에 감동했어요.",
  },
  {
    name: "이O준",
    location: "경기 수원시",
    initial: "이",
    color: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.5)",
    borderColor: "#10b981",
    text: "기사님 빠르게 해결해주시고 저희가 바꿨어야 하던 수전까지 무료로 해주셔서 너무 감사했어요. 만족해서 기쁩니다!",
  },
  {
    name: "박O수",
    location: "인천 부평구",
    initial: "박",
    color: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.5)",
    borderColor: "#8b5cf6",
    text: "대형 식당인데도 불구하고 차분하게 작업해주시고, 비용과 서비스 너무 만족합니다. 문제가 생기면 또 바로 연락하겠습니다.",
  },
  {
    name: "정O민",
    location: "부산 해운대구",
    initial: "정",
    color: "from-orange-500 to-orange-600",
    glow: "rgba(249,115,22,0.5)",
    borderColor: "#f97316",
    text: "아내가 기사님 친절하고 잘 뚫어주신다고 하네요. 주변에도 소개 많이 해야겠어요. 감사합니다!",
  },
];

export default function Reviews() {
  return (
    <section className="relative section-padding overflow-hidden" id="reviews">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] to-[#0c6a94]" />
      <div className="absolute inset-0 noise" />
      {/* Subtle cross-hatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="hidden md:block absolute top-20 left-0 w-[700px] h-[700px] bg-blue-600/12 rounded-full blur-[200px]"
      />
      <motion.div
        animate={{ scale: [1.1, 0.8, 1.1], opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 13, repeat: Infinity }}
        className="hidden md:block absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <span className="section-badge bg-white/[0.04] border border-white/[0.08] text-white/90 mb-6 backdrop-blur-xl shadow-[0_0_30px_rgba(241,196,15,0.08)]">
            <MessageSquare className="w-4 h-4 text-gold-400" />
            고객님들이 직접 작성하신 생생후기!
          </span>
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-black text-white tracking-tight">
            고객님들의{" "}
            <span className="text-gradient-gold text-glow-gold">리얼후기</span>
          </h2>
        </AnimateIn>

        {/* Big rating summary card - glass style */}
        <AnimateIn delay={0.05} className="mb-14">
          <div className="flex items-center justify-center">
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative inline-flex items-center gap-6 rounded-2xl px-6 py-5 sm:px-10 sm:py-6 overflow-hidden"
            >
              {/* Animated border for summary card */}
              <div
                className="absolute inset-0 rounded-2xl z-0 opacity-40"
                style={{
                  background: "linear-gradient(135deg, #f1c40f55, transparent 40%, transparent 60%, #f1c40f55)",
                }}
              />
              <div
                className="absolute inset-[1.5px] rounded-[calc(1rem-1.5px)] z-[1]"
                style={{
                  background: "linear-gradient(160deg, rgba(3,105,161,0.95) 0%, rgba(2,132,199,0.98) 100%)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-black text-white leading-none mb-1">5.0</p>
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + j * 0.1, type: "spring" }}
                      >
                        <Star
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-400 text-gold-400"
                          style={{ filter: "drop-shadow(0 0 6px rgba(241,196,15,0.5))" }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/10" />
                <div className="w-16 h-px sm:hidden bg-white/10" />
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-white/50 text-sm sm:text-base font-bold">고객 만족도</p>
                    <p className="text-white text-2xl sm:text-3xl font-black">98.6%</p>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/10" />
                  <div className="flex items-center gap-2 text-emerald-400">
                    <BadgeCheck
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.4))" }}
                    />
                    <div>
                      <p className="text-sm sm:text-base font-black">인증 후기</p>
                      <p className="text-emerald-500/70 text-xs sm:text-sm">실사용 검증</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimateIn>

        {/* Review cards grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {reviews.map((r, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-2xl p-[1.5px] overflow-hidden h-full"
              >
                {/* === ANIMATED GRADIENT BORDER === */}
                <div
                  className="absolute inset-0 rounded-2xl z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(${60 + i * 60}deg, transparent 25%, ${r.borderColor}88 45%, ${r.borderColor} 50%, ${r.borderColor}88 55%, transparent 75%)`,
                    backgroundSize: "300% 300%",
                    animation: `gradientBorderMove 4s ease infinite ${i * 0.3}s`,
                  }}
                />
                {/* Static border fallback */}
                <div
                  className="absolute inset-0 rounded-2xl z-0 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${r.borderColor}44, transparent 45%, transparent 55%, ${r.borderColor}44)`,
                  }}
                />

                {/* Glow behind card on hover */}
                <div
                  className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl z-0"
                  style={{ background: r.glow }}
                />

                {/* Card inner */}
                <div
                  className="relative z-10 rounded-[calc(1rem-1.5px)] px-7 py-6 h-full overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(3,105,161,0.96) 0%, rgba(3,105,161,0.98) 50%, rgba(3,105,161,1) 100%)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Shimmer sweep on hover */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.02) 42%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 58%, transparent 65%)",
                      backgroundSize: "250% 100%",
                      animation: "shimmer 2.5s linear infinite",
                    }}
                  />

                  {/* Quote icon */}
                  <Quote
                    className="absolute top-5 right-6 w-8 h-8 transition-all duration-500"
                    style={{
                      color: `${r.borderColor}15`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* User row */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        className={`bg-gradient-to-br ${r.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}
                        style={{
                          width: "52px",
                          height: "52px",
                          boxShadow: `0 8px 25px ${r.glow}, 0 0 15px ${r.glow}30`,
                        }}
                      >
                        {r.initial}
                      </motion.div>
                      <div>
                        <p className="font-bold text-white text-base">{r.name} 고객님</p>
                        <p className="text-white/50 text-sm">{r.location}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-gold-400 text-gold-400"
                          style={{ filter: "drop-shadow(0 0 4px rgba(241,196,15,0.4))" }}
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-white/70 leading-relaxed text-base mb-4">{r.text}</p>

                    {/* Verified badge */}
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Shield
                        className="w-4 h-4"
                        style={{ filter: "drop-shadow(0 0 4px rgba(16,185,129,0.3))" }}
                      />
                      <span className="text-xs font-bold">실제 이용 후기</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Chat testimonials section */}
        <AnimateIn delay={0.2} className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-[1.75rem] md:text-[2rem] font-black text-white tracking-tight leading-snug">
              이용해보신 고객님들은 다~ 알아요!
              <br />
              <span className="text-gradient-gold text-glow-gold">
                고객님들의 이유 있는 선택!!
              </span>
            </h3>
          </div>

          <div className="max-w-lg mx-auto space-y-5">
            {/* Customer message */}
            <AnimateIn delay={0.3} direction="left">
              <div className="flex justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl rounded-bl-sm px-6 py-4 max-w-[85%] overflow-hidden"
                >
                  {/* Glass border */}
                  <div
                    className="absolute inset-0 rounded-2xl rounded-bl-sm opacity-30"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent 50%, rgba(255,255,255,0.08))",
                    }}
                  />
                  <div
                    className="absolute inset-[1px] rounded-[calc(1rem-1px)] rounded-bl-sm"
                    style={{
                      background: "linear-gradient(160deg, rgba(3,120,180,0.95) 0%, rgba(2,132,199,0.98) 100%)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  />
                  <p className="relative z-10 text-white/80 text-lg leading-relaxed">
                    덕분에 싱크대 사용할 때 걱정 없겠어요.. 앞으로도 더 번창하세요
                  </p>
                </motion.div>
              </div>
            </AnimateIn>

            {/* Business reply */}
            <AnimateIn delay={0.4} direction="right">
              <div className="flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl rounded-br-sm px-6 py-4 max-w-[85%] text-white"
                  style={{
                    background: "linear-gradient(145deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%)",
                    boxShadow:
                      "0 15px 40px rgba(14,165,233,0.4), 0 0 20px rgba(14,165,233,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <p className="text-lg leading-relaxed">
                    너무 다행입니다^^ 그럴일은 없겠지만 혹시라도 재발하거나 다른 문제 생기시면
                    언제든 편히 연락주세요 &#128522;
                  </p>
                </motion.div>
              </div>
            </AnimateIn>

            {/* Customer message */}
            <AnimateIn delay={0.5} direction="left">
              <div className="flex justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl rounded-bl-sm px-6 py-4 max-w-[85%] overflow-hidden"
                >
                  {/* Glass border */}
                  <div
                    className="absolute inset-0 rounded-2xl rounded-bl-sm opacity-30"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent 50%, rgba(255,255,255,0.08))",
                    }}
                  />
                  <div
                    className="absolute inset-[1px] rounded-[calc(1rem-1px)] rounded-bl-sm"
                    style={{
                      background: "linear-gradient(160deg, rgba(3,120,180,0.95) 0%, rgba(2,132,199,0.98) 100%)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  />
                  <p className="relative z-10 text-white/80 text-lg leading-relaxed">
                    감사합니다. 아내가 기사님 친절하고 잘 뚫어주신다고 하네요. 주변에도 소개
                    많이 해야겠어요. &#127942;
                  </p>
                </motion.div>
              </div>
            </AnimateIn>
          </div>
        </AnimateIn>
      </div>

      {/* Keyframes for animated border */}
      <style jsx>{`
        @keyframes gradientBorderMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  );
}
