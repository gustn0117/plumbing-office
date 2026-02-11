"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Sparkles, ChevronDown, MessageCircle, Star, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const PHONE = "010-0000-0000";

const badges = [
  { icon: Clock, text: "24시간 출동", highlight: true },
  { icon: MapPin, text: "전국 어디서나", highlight: false },
  { icon: Shield, text: "미해결시 무료", highlight: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Rich animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040d1a] via-brand-900 to-[#0a1e36]" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Vivid orbs */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[700px] h-[700px] bg-brand-500/30 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-gold-400/20 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[160px]"
        />
        {/* Diagonal accent beams */}
        <div className="absolute top-0 right-0 w-[1000px] h-[500px] bg-gradient-to-bl from-brand-400/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-gradient-to-tr from-gold-400/5 via-transparent to-transparent" />
      </div>

      {/* Floating particles - more visible */}
      {[
        { top: "15%", right: "10%", size: "w-3 h-3", color: "bg-brand-400/60", dur: 5 },
        { top: "40%", left: "6%", size: "w-2 h-2", color: "bg-gold-400/50", dur: 7 },
        { bottom: "25%", right: "20%", size: "w-3 h-3", color: "bg-emerald-400/40", dur: 6 },
        { top: "22%", left: "25%", size: "w-1.5 h-1.5", color: "bg-white/25", dur: 4 },
        { bottom: "40%", right: "8%", size: "w-2 h-2", color: "bg-gold-300/35", dur: 8 },
        { top: "55%", left: "12%", size: "w-2.5 h-2.5", color: "bg-brand-300/30", dur: 9 },
        { top: "70%", right: "35%", size: "w-1.5 h-1.5", color: "bg-gold-400/40", dur: 5.5 },
        { top: "10%", left: "45%", size: "w-2 h-2", color: "bg-white/15", dur: 6.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -25 : 20, 0], x: [0, i % 3 === 0 ? 8 : -5, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 px-5 py-2 rounded-full text-sm font-bold mb-3 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              실시간 상담 가능
            </motion.div>

            <br />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-400 px-5 py-2.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(241,196,15,0.1)]"
            >
              <Sparkles className="w-4 h-4" />
              누적 해결 건수 5만 돌파 기념
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/65 text-lg md:text-xl font-semibold mb-5"
            >
              24시간 어디든 <span className="text-gold-400">30분 안에</span> 당일 출동
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-2">
                출장비 / 내시경
              </h1>
              <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-3">
                <span className="relative inline-block">
                  <span className="text-gradient-gold">무료이벤트</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(255,215,0,0.1), rgba(255,215,0,0.9), rgba(255,180,50,1), rgba(255,215,0,0.9), rgba(255,215,0,0.1))",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>{" "}
                <span className="text-white">진행중</span>
              </h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-2.5 mb-8"
              >
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-gold-400/70 to-transparent" />
                <span className="text-gold-400 text-xs font-black tracking-[0.2em] uppercase">Limited Event</span>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-gold-400/70 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/50 text-base md:text-lg mb-10 max-w-md leading-relaxed"
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
              <a href={`sms:${PHONE}`} className="btn-outline text-lg group">
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
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 backdrop-blur-md cursor-default transition-all duration-300 ${
                    badge.highlight
                      ? "bg-brand-500/20 border border-brand-400/30 shadow-[0_0_15px_rgba(41,128,185,0.15)]"
                      : "bg-white/[0.08] border border-white/[0.12]"
                  }`}
                >
                  <badge.icon className="w-4.5 h-4.5 text-gold-400" />
                  <span className="text-white/80 text-sm font-semibold">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:hidden relative mt-6 mb-2"
          >
            <div className="relative flex justify-center">
              {/* Background glow behind person */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-brand-400/25 rounded-full blur-[80px]" />
              <div className="relative w-[240px] h-[240px]">
                <Image src="/images/hero-worker.png" alt="배관사무소 전문 기술진" fill className="object-contain drop-shadow-[0_10px_30px_rgba(41,128,185,0.3)]" priority />
              </div>
            </div>
          </motion.div>

          {/* Desktop hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative flex items-center justify-center">
              {/* Circular glow behind person */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-[380px] h-[380px] lg:w-[440px] lg:h-[440px] bg-gradient-to-br from-brand-400/30 via-brand-500/20 to-brand-600/10 rounded-full blur-[60px]"
              />
              {/* Subtle ring */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-white/[0.06]"
              />

              {/* Person image */}
              <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] z-10">
                <Image
                  src="/images/hero-worker.png"
                  alt="배관사무소 전문 기술진"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(41,128,185,0.35)]"
                  priority
                />
              </div>

              {/* Floating badges around person */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute top-8 -right-4 lg:right-0 z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="glass-dark rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg"
                >
                  <Zap className="w-4 h-4 text-gold-400" />
                  <span className="text-white/90 text-xs font-black">30분 내 출동</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute bottom-16 -left-8 lg:-left-4 z-20"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="glass-dark rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-white/90 text-xs font-black">5.0</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -bottom-2 right-4 lg:right-8 z-20"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                  className="glass-dark rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/90 text-xs font-black">50,000+ 해결</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hidden md:block"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-20 md:h-24">
          <path d="M0 100V50C240 15 480 0 720 25C960 50 1200 60 1440 50V100H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
