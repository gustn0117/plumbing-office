"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Sparkles, ChevronDown, MessageCircle, Star, Zap } from "lucide-react";
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
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-brand-500/25 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-gold-400/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px]"
        />
        {/* Top-right accent glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[400px] bg-gradient-to-bl from-brand-400/8 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      {[
        { top: "18%", right: "12%", size: "w-2 h-2", color: "bg-brand-400/50", dur: 5, y: [-20, 0, -20] },
        { top: "45%", left: "8%", size: "w-1.5 h-1.5", color: "bg-gold-400/40", dur: 7, y: [15, 0, 15] },
        { bottom: "30%", right: "25%", size: "w-2.5 h-2.5", color: "bg-emerald-400/35", dur: 6, y: [-12, 0, -12] },
        { top: "25%", left: "30%", size: "w-1 h-1", color: "bg-white/20", dur: 4, y: [-15, 0, -15] },
        { bottom: "45%", right: "8%", size: "w-1.5 h-1.5", color: "bg-gold-300/25", dur: 8, y: [10, 0, 10] },
        { top: "60%", left: "15%", size: "w-2 h-2", color: "bg-brand-300/20", dur: 9, y: [-18, 0, -18] },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: p.y, opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Live consultation indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 backdrop-blur-sm"
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
              className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/25 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
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
              <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight mb-2 text-glow-white">
                출장비 / 내시경
              </h1>
              <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-black leading-[1.1] tracking-tight mb-3">
                <span className="relative inline-block">
                  <span className="text-gradient-gold text-glow-gold">무료이벤트</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(245,183,50,0.1), rgba(245,183,50,0.8), rgba(245,200,80,1), rgba(245,183,50,0.8), rgba(245,183,50,0.1))",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>{" "}
                <span className="text-white text-glow-white">진행중</span>
              </h2>
              {/* Sub-accent */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-2 mb-8"
              >
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gold-400/60 to-transparent" />
                <span className="text-gold-400/80 text-xs font-bold tracking-widest uppercase">Limited Event</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-gold-400/60 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/50 text-[15px] md:text-base mb-10 max-w-md leading-relaxed"
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
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-2.5 bg-gradient-to-br from-white/[0.1] to-white/[0.04] border border-white/[0.12] rounded-2xl px-5 py-3 backdrop-blur-sm cursor-default"
                >
                  <badge.icon className="w-4 h-4 text-gold-400" />
                  <span className="text-white/75 text-sm font-medium">{badge.text}</span>
                </motion.div>
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
              {/* Outer glow rings */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-6 bg-gradient-to-br from-brand-500/15 via-transparent to-gold-400/10 rounded-[2.5rem] blur-3xl"
              />
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-3 bg-gradient-to-br from-brand-400/20 via-white/5 to-gold-400/15 rounded-[2rem] blur-xl"
              />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-400/30 via-white/10 to-gold-400/20 rounded-3xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800 border border-white/10 shadow-premium-lg">
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
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />

                {/* Enhanced stats overlay card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 rounded-2xl p-5 shadow-dramatic"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-brand-900 font-black text-sm">배관사무소</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-gold-400 text-gold-400" />
                          ))}
                          <span className="text-gray-400 text-[10px] ml-1">5.0</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-px h-10 bg-gray-200 mx-4 flex-shrink-0" />

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

                {/* Top-left tech badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute top-5 left-5 glass-dark rounded-xl px-3 py-2 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-gold-400" />
                  <span className="text-white/80 text-xs font-bold">30분 내 출동</span>
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
