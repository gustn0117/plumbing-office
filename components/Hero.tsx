"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

const PHONE = "010-0000-0000";

const badges = [
  { icon: Clock, text: "24시간 출동" },
  { icon: MapPin, text: "전국 어디서나" },
  { icon: Shield, text: "미해결시 무료" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-900">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              누적 해결 건수 5만 돌파 기념
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-lg md:text-xl font-semibold mb-3 opacity-80"
            >
              24시간 어디든 30분 안에 당일 출동
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-2">
                출장비 / 내시경
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                <span className="text-gradient-gold">무료이벤트</span>{" "}
                <span className="text-white">진행중</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 text-lg mb-8"
            >
              꽉 막힌 하수구, 한번에 해결해드립니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a href={`tel:${PHONE}`} className="btn-primary text-xl">
                <Phone className="w-6 h-6" />
                긴급상담 {PHONE}
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <badge.icon className="w-4 h-4 text-gold-400" />
                  <span className="text-white/80 text-sm font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-brand-500/20 rounded-3xl blur-[60px] scale-90" />

              {/*
                ============================================
                  히어로 이미지 (작업자 사진)
                  /public/images/hero-worker.png 에 넣어주세요
                  권장 사이즈: 600x700px (세로형)
                ============================================
              */}
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 to-brand-800 border border-white/10">
                <Image
                  src="/images/hero-worker.png"
                  alt="배관사무소 전문 기술진"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback content when no image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30">
                  <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                  <p className="text-sm font-medium">hero-worker.png</p>
                  <p className="text-xs mt-1 opacity-60">600 x 700px</p>
                </div>

                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-800 font-bold text-sm">배관사무소</p>
                      <p className="text-gray-500 text-xs">전문 자격 보유 기술진</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 40V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
