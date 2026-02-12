"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Sparkles, ChevronDown, MessageCircle, Star, Zap, CheckCircle2, Wrench } from "lucide-react";
import Image from "next/image";

const PHONE = "010-4111-6977";

const badges = [
  { icon: Clock, text: "24시간 출동", highlight: true },
  { icon: MapPin, text: "전국 어디서나", highlight: false },
  { icon: Shield, text: "미해결시 무료", highlight: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-500/25 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px]"
        />
        <div className="absolute top-0 right-0 w-[800px] h-[400px] bg-gradient-to-bl from-brand-400/10 via-transparent to-transparent" />

        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[2px] h-full"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3), transparent 60%)", transform: "rotate(15deg)", transformOrigin: "top" }}
          />
          <motion.div
            animate={{ opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-0 right-1/3 w-[2px] h-full"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.25), transparent 50%)", transform: "rotate(-10deg)", transformOrigin: "top" }}
          />
          <motion.div
            animate={{ opacity: [0.04, 0.1, 0.04] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-0 left-[60%] w-[1px] h-full"
            style={{ background: "linear-gradient(180deg, rgba(56,189,248,0.4), transparent 45%)", transform: "rotate(8deg)", transformOrigin: "top" }}
          />
        </div>

        {/* SVG Laurel wreath - behind the person image area */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-x-[75%] pointer-events-none">
          <motion.svg
            animate={{ opacity: [0.04, 0.1, 0.04], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            width="600" height="600" viewBox="0 0 200 200" fill="none" className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px]"
          >
            {/* Left laurel branch */}
            <path d="M70 170 C60 150, 45 130, 40 110 C35 90, 38 70, 50 55 C55 48, 62 42, 70 38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M55 150 C50 140, 42 128, 38 115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            <ellipse cx="42" cy="105" rx="12" ry="7" transform="rotate(-30 42 105)" fill="rgba(56,189,248,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <ellipse cx="38" cy="88" rx="11" ry="6.5" transform="rotate(-20 38 88)" fill="rgba(56,189,248,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="40" cy="72" rx="10" ry="6" transform="rotate(-10 40 72)" fill="rgba(56,189,248,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="47" cy="58" rx="10" ry="5.5" transform="rotate(5 47 58)" fill="rgba(56,189,248,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <ellipse cx="56" cy="46" rx="9" ry="5" transform="rotate(15 56 46)" fill="rgba(56,189,248,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
            <ellipse cx="50" cy="120" rx="12" ry="7" transform="rotate(-35 50 120)" fill="rgba(56,189,248,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="55" cy="135" rx="11" ry="6.5" transform="rotate(-40 55 135)" fill="rgba(56,189,248,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <ellipse cx="62" cy="148" rx="10" ry="6" transform="rotate(-45 62 148)" fill="rgba(56,189,248,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            {/* Right laurel branch */}
            <path d="M130 170 C140 150, 155 130, 160 110 C165 90, 162 70, 150 55 C145 48, 138 42, 130 38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M145 150 C150 140, 158 128, 162 115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
            <ellipse cx="158" cy="105" rx="12" ry="7" transform="rotate(30 158 105)" fill="rgba(56,189,248,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <ellipse cx="162" cy="88" rx="11" ry="6.5" transform="rotate(20 162 88)" fill="rgba(56,189,248,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="160" cy="72" rx="10" ry="6" transform="rotate(10 160 72)" fill="rgba(56,189,248,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="153" cy="58" rx="10" ry="5.5" transform="rotate(-5 153 58)" fill="rgba(56,189,248,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <ellipse cx="144" cy="46" rx="9" ry="5" transform="rotate(-15 144 46)" fill="rgba(56,189,248,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
            <ellipse cx="150" cy="120" rx="12" ry="7" transform="rotate(35 150 120)" fill="rgba(56,189,248,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="145" cy="135" rx="11" ry="6.5" transform="rotate(40 145 135)" fill="rgba(56,189,248,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <ellipse cx="138" cy="148" rx="10" ry="6" transform="rotate(45 138 148)" fill="rgba(56,189,248,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            {/* Top crown / connecting arc */}
            <path d="M70 38 C80 30, 90 26, 100 25 C110 26, 120 30, 130 38" stroke="rgba(241,196,15,0.15)" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="24" r="4" fill="rgba(241,196,15,0.12)" stroke="rgba(241,196,15,0.2)" strokeWidth="0.5" />
            {/* Bottom ribbon */}
            <path d="M70 170 C80 175, 90 177, 100 178 C110 177, 120 175, 130 170" stroke="rgba(241,196,15,0.12)" strokeWidth="1" fill="none" />
          </motion.svg>
        </div>

        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[10%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full border border-white/[0.04] pointer-events-none"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[5%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border border-dashed border-brand-300/[0.06] pointer-events-none"
        />

        {/* Water droplet shapes */}
        {[
          { top: "10%", right: "15%", size: 20, delay: 0 },
          { top: "60%", left: "8%", size: 16, delay: 2 },
          { bottom: "15%", right: "25%", size: 14, delay: 4 },
        ].map((d, i) => (
          <motion.svg
            key={`drop-${i}`}
            animate={{ y: [0, -10, 0], opacity: [0.06, 0.15, 0.06] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
            width={d.size} height={d.size * 1.4} viewBox="0 0 20 28"
            className="absolute pointer-events-none"
            style={{ top: d.top, left: d.left, right: d.right, bottom: d.bottom }}
          >
            <path d="M10 0 C10 0, 0 14, 0 18 C0 23.5, 4.5 28, 10 28 C15.5 28, 20 23.5, 20 18 C20 14, 10 0, 10 0Z" fill="rgba(56,189,248,0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </motion.svg>
        ))}
      </div>

      {/* Floating particles */}
      {[
        { top: "15%", right: "10%", size: "w-2.5 h-2.5", color: "bg-brand-400/50", dur: 5 },
        { top: "40%", left: "6%", size: "w-2 h-2", color: "bg-cyan-400/40", dur: 7 },
        { bottom: "25%", right: "20%", size: "w-2 h-2", color: "bg-sky-400/35", dur: 6 },
        { top: "22%", left: "25%", size: "w-1.5 h-1.5", color: "bg-brand-300/30", dur: 4 },
        { bottom: "40%", right: "8%", size: "w-1.5 h-1.5", color: "bg-cyan-300/30", dur: 8 },
        { top: "65%", left: "15%", size: "w-2 h-2", color: "bg-brand-300/30", dur: 9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, i % 2 === 0 ? -20 : 15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* LEFT: Person image with floating info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind person */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-brand-400/25 via-brand-500/15 to-cyan-400/10 rounded-full blur-[100px]"
            />

            {/* Rotating ring - inner */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-white/[0.06]"
            />

            {/* Rotating ring - outer */}
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute w-[360px] h-[360px] sm:w-[370px] sm:h-[370px] md:w-[470px] md:h-[470px] lg:w-[560px] lg:h-[560px] rounded-full border border-dotted border-white/[0.04]"
            />

            {/* Arc accent decorations */}
            <motion.svg
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] sm:w-[350px] sm:h-[350px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px]"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="0.5" strokeDasharray="8 20" />
              <circle cx="100" cy="5" r="2" fill="rgba(56,189,248,0.25)" />
              <circle cx="100" cy="195" r="2" fill="rgba(56,189,248,0.25)" />
              <circle cx="5" cy="100" r="1.5" fill="rgba(241,196,15,0.2)" />
              <circle cx="195" cy="100" r="1.5" fill="rgba(241,196,15,0.2)" />
            </motion.svg>

            {/* Person image */}
            <div className="relative w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] z-10">
              <Image
                src="/images/hero-worker.png"
                alt="배관사무소 전문 기술진"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(14,165,233,0.35)]"
                priority
              />
            </div>

            {/* Floating badge: 30분 내 출동 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute hidden sm:block top-2 right-4 md:top-4 md:right-6 lg:top-8 lg:right-4 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-dark glass-color-shift rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 flex items-center gap-2 shadow-lg"
              >
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-[11px] lg:text-xs font-black leading-tight">30분 내 출동</p>
                  <p className="text-white/70 text-[9px] font-semibold">전국 평균 기준</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badge: 별점 5.0 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute hidden sm:block bottom-20 left-0 md:bottom-20 md:-left-4 lg:bottom-24 lg:-left-6 z-20"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-dark glass-color-shift rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 flex items-center gap-2 shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm lg:text-base font-black leading-none">5.0</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <p className="text-white/90 text-[10px] lg:text-xs font-bold">고객 만족도</p>
                  <p className="text-white/60 text-[9px]">2,847건 리뷰</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating badge: 누적 해결 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute hidden sm:block bottom-4 right-8 md:bottom-6 md:right-10 lg:bottom-8 lg:right-8 z-20"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="glass-dark glass-color-shift rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 flex items-center gap-2 shadow-lg"
              >
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-[11px] lg:text-xs font-black leading-tight">10,000+</p>
                  <p className="text-white/70 text-[9px] font-semibold">누적 해결 건수</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-center lg:text-left"
          >
            {/* Top badges row */}
            <div className="flex flex-wrap items-center gap-2.5 justify-center lg:justify-start mb-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                실시간 상담 가능
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-gold-400/20 border border-gold-400/40 text-gold-300 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                1만건 돌파 기념 이벤트
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-white/90 text-lg md:text-xl font-semibold mb-3"
            >
              24시간 어디든 <span className="text-yellow-300 glow-pulse">30분 안에</span> 당일 출동
            </motion.p>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black leading-[1.08] tracking-tight mb-1">
                <span className="text-gradient-blue text-glow-blue">출장비</span>
                <span className="text-white/90"> / </span>
                <span className="text-gradient-blue text-glow-blue">내시경</span>
              </h1>
              <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black leading-[1.08] tracking-tight mb-5">
                <span className="relative inline-block">
                  <span className="text-gradient-gold">무료이벤트</span>
                  <motion.div
                    className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(255,215,0,0.05), rgba(255,215,0,0.8), rgba(255,180,50,1), rgba(255,215,0,0.8), rgba(255,215,0,0.05))",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>{" "}
                <span className="text-white">진행중</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/80 text-base md:text-lg mb-8 lg:max-w-lg leading-relaxed"
            >
              하수구 막힘, 누수까지 한번에 해결해드립니다.
              <br />
              <span className="text-yellow-300 font-bold">전문 자격 보유 기술진</span>이 직접 방문합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-7"
            >
              <a href={`tel:${PHONE}`} className="btn-primary sm:text-xl shimmer-sweep">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sparkle">긴급상담</span> <span className="sparkle-intense">{PHONE}</span>
              </a>
              <a href={`sms:${PHONE}`} className="btn-outline text-lg group">
                <MessageCircle className="w-5 h-5" />
                문자상담
              </a>
            </motion.div>

            {/* Bottom badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 backdrop-blur-md cursor-default badge-color-shift ${
                    badge.highlight
                      ? "bg-white/20 border border-white/35"
                      : "bg-white/15 border border-white/25"
                  }`}
                >
                  <badge.icon className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <ChevronDown className="w-6 h-6" />
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
