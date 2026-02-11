"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Phone, MessageCircle, ArrowRight, Clock, Shield, Users, Sparkles, Lock } from "lucide-react";

const PHONE = "010-0000-0000";

const trustBadges = [
  { icon: Clock, label: "평균 30분 출동" },
  { icon: Users, label: "50,000+ 해결" },
  { icon: Shield, label: "무료 견적" },
];

export default function CtaBottom() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 noise" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(41,128,185,0.12) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(231,76,60,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated floating particles */}
      <motion.div
        className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-gold-400/30"
        animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[35%] right-[15%] w-2 h-2 rounded-full bg-brand-400/25"
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[35%] w-1 h-1 rounded-full bg-gold-300/35"
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[30%] w-1.5 h-1.5 rounded-full bg-brand-300/20"
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] mb-6 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-white/60 text-sm font-medium">
              지금 상담 가능합니다
            </span>
          </div>
        </AnimateIn>

        {/* Urgency text */}
        <AnimateIn delay={0.03}>
          <p className="flex items-center justify-center gap-2 text-gold-400 text-sm md:text-base font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            지금 전화하시면 출장비 무료!
            <Sparkles className="w-4 h-4" />
          </p>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <h2 className="text-[2rem] md:text-[2.75rem] font-black text-white leading-tight tracking-tight mb-5">
            배관 문제,
            <br />
            <span className="text-gradient-gold">더 이상 고민하지 마세요!</span>
          </h2>
          <p className="text-white/45 text-[15px] md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            24시간 전문 상담사가 대기하고 있습니다.
            <br className="hidden sm:block" />
            지금 바로 연락주세요.
          </p>
        </AnimateIn>

        {/* Trust badges row */}
        <AnimateIn delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-3 backdrop-blur-sm text-center"
              >
                <badge.icon className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <span className="text-white/60 text-xs font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="btn-primary text-xl justify-center"
            >
              <Phone className="w-6 h-6" />
              긴급상담 {PHONE}
            </a>
            <a
              href={`sms:${PHONE}`}
              className="btn-outline justify-center group"
            >
              <MessageCircle className="w-5 h-5" />
              문자상담
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </AnimateIn>

        {/* Privacy/trust line with Lock icon */}
        <AnimateIn delay={0.25}>
          <p className="flex items-center justify-center gap-1.5 text-white/20 text-xs mt-8">
            <Lock className="w-3 h-3" />
            상담 전화는 무료이며, 개인정보는 안전하게 보호됩니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
