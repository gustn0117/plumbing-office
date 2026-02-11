"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Sparkles, ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";

const PHONE = "010-0000-0000";

const badges = [
  { icon: Clock, text: "24시간 출동" },
  { icon: MapPin, text: "전국 어디서나" },
  { icon: Shield, text: "미해결시 무료" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[120px]"
        />
        {/* Third animated orb - emerald/green toned */}
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] right-[12%] w-2 h-2 rounded-full bg-brand-400/40"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-gold-400/30"
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[30%] right-[25%] w-2.5 h-2.5 rounded-full bg-emerald-400/25"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Live consultation indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              실시간 상담 가능
            </motion.div>

            <br />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              누적 해결 건수 5만 돌파 기념
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/60 text-base md:text-lg font-medium mb-5"
            >
              24시간 어디든 30분 안에 당일 출동
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight mb-2">
                출장비 / 내시경
              </h1>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-8">
                <span className="relative inline-block">
                  <span className="text-gradient-gold">무료이벤트</span>
                  {/* Animated gradient underline with shimmer */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(245,183,50,0.2), rgba(245,183,50,0.8), rgba(245,200,80,1), rgba(245,183,50,0.8), rgba(245,183,50,0.2))",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0%", "-200% 0%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>{" "}
                <span className="text-white">진행중</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/45 text-[15px] md:text-base mb-10 max-w-md leading-relaxed"
            >
              꽉 막힌 하수구, 한번에 해결해드립니다.
              <br />
              전문 자격 보유 기술진이 직접 방문합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href={`tel:${PHONE}`} className="btn-primary text-xl">
                <Phone className="w-6 h-6" />
                긴급상담 {PHONE}
              </a>
              <a href={`sms:${PHONE}`} className="btn-outline text-lg">
                <MessageCircle className="w-5 h-5" />
                문자상담
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.1] rounded-2xl px-5 py-3 backdrop-blur-sm"
                >
                  <badge.icon className="w-4 h-4 text-gold-400" />
                  <span className="text-white/70 text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:hidden relative mt-4 mb-2"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800 border border-white/10">
              <Image
                src="/images/hero-worker.png"
                alt="배관사무소 전문 기술진"
                fill
                className="object-cover"
                priority
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <svg className="w-14 h-14 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <p className="text-xs font-medium">hero-worker.png</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-900/60 to-transparent" />
            </div>
          </motion.div>

          {/* Desktop hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 via-transparent to-gold-400/10 rounded-[2rem] blur-2xl" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-400/20 via-white/5 to-gold-400/10 rounded-3xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800 border border-white/10 shadow-premium">
                <Image
                  src="/images/hero-worker.png"
                  alt="배관사무소 전문 기술진"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                  <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <p className="text-sm font-medium">hero-worker.png</p>
                  <p className="text-xs mt-1 opacity-60">600 x 700px</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-900/80 to-transparent" />

                {/* Enhanced stats overlay card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center">
                    {/* Left: Shield + company info */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-11 h-11 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-brand-900 font-extrabold text-sm">배관사무소</p>
                        <p className="text-gray-500 text-xs">전문 자격 보유 기술진</p>
                      </div>
                    </div>

                    {/* Middle: Divider */}
                    <div className="w-px h-10 bg-gray-200 mx-4 flex-shrink-0" />

                    {/* Right: Two mini stats */}
                    <div className="flex items-center gap-4 flex-1 justify-end">
                      <div className="text-center">
                        <p className="text-brand-500 font-black text-lg leading-tight" style={{ textShadow: "0 0 20px rgba(41,128,185,0.3)" }}>50,000+</p>
                        <p className="text-gray-400 text-[10px] font-medium">누적 해결</p>
                      </div>
                      <div className="w-px h-8 bg-gray-200 flex-shrink-0" />
                      <div className="text-center">
                        <p className="text-emerald-500 font-black text-lg leading-tight">100%</p>
                        <p className="text-gray-400 text-[10px] font-medium">성공률</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
