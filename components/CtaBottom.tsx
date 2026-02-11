"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Phone, MessageCircle, ArrowRight, Clock, Shield } from "lucide-react";

const PHONE = "010-0000-0000";

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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-white/60 text-sm font-medium">
              지금 상담 가능합니다
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <h2 className="text-3xl md:text-[2.5rem] font-black text-white leading-tight tracking-tight mb-5">
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

        <AnimateIn delay={0.12}>
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Clock className="w-4 h-4" />
              <span>24시간 연중무휴</span>
            </div>
            <div className="w-px h-4 bg-white/15" />
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Shield className="w-4 h-4" />
              <span>무료 견적</span>
            </div>
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

        <AnimateIn delay={0.25}>
          <p className="text-white/20 text-xs mt-8">
            상담 전화는 무료이며, 개인정보는 안전하게 보호됩니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
