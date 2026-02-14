"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Phone, MessageCircle, ArrowRight, Clock, Shield, Users, Sparkles, Lock } from "lucide-react";

const PHONE = "010-4111-6977";

const trustBadges = [
  { icon: Clock, label: "평균 30분 출동", value: "30분" },
  { icon: Users, label: "누적 해결", value: "10,000+" },
  { icon: Shield, label: "무료 견적", value: "0원" },
];

export default function CtaBottom() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/80 to-white" />

      {/* Soft decorative orbs */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(241,196,15,0.04) 0%, transparent 50%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="hidden md:block">
      {[
        { top: "15%", left: "20%", size: "w-1.5 h-1.5", color: "bg-brand-300/30", dur: 5 },
        { top: "35%", right: "15%", size: "w-2 h-2", color: "bg-sky-300/25", dur: 6.5 },
        { bottom: "25%", left: "35%", size: "w-1 h-1", color: "bg-brand-200/35", dur: 4.5 },
        { bottom: "40%", right: "30%", size: "w-1.5 h-1.5", color: "bg-sky-200/30", dur: 7 },
        { top: "55%", left: "10%", size: "w-2 h-2", color: "bg-brand-300/20", dur: 5.5 },
        { top: "20%", right: "35%", size: "w-1 h-1", color: "bg-sky-300/20", dur: 6 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
          animate={{ y: [0, i % 2 === 0 ? -25 : 20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-50 border border-brand-200/60 mb-6 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-brand-700 text-sm font-semibold">
              지금 상담 가능합니다
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.03}>
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 text-amber-500 text-base md:text-lg font-bold mb-5"
          >
            <Sparkles className="w-4 h-4" />
            지금 전화하시면 출장비 무료!
            <Sparkles className="w-4 h-4" />
          </motion.p>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <h2 className="text-[2.25rem] md:text-[3.5rem] font-black text-gray-900 leading-tight tracking-tight mb-3">
            배관 문제,
            <br />
            <span className="text-brand-500">더 이상 고민하지 마세요!</span>
          </h2>
          <p className="text-gray-600 text-base md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            24시간 전문 상담사가 대기하고 있습니다.
            <br />
            지금 바로 연락주세요.
          </p>
        </AnimateIn>

        {/* Trust badges row */}
        <AnimateIn delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.03 }}
                className="bg-white border border-gray-200/80 rounded-2xl px-7 py-5 text-center min-w-[120px] shadow-sm hover:shadow-md transition-shadow"
              >
                <badge.icon className="w-7 h-7 text-brand-500 mx-auto mb-2" />
                <p className="text-gray-900 font-black text-3xl md:text-4xl leading-none mb-1">{badge.value}</p>
                <span className="text-gray-600 text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${PHONE}`}
              className="btn-primary sm:text-xl justify-center shimmer-sweep"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sparkle">긴급상담</span> <span className="sparkle-intense">{PHONE}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`sms:${PHONE}`}
              className="inline-flex items-center gap-3 border-2 border-brand-300 text-brand-600 px-8 py-3.5 rounded-full text-base font-semibold hover:-translate-y-0.5 hover:bg-brand-50 transition-all duration-300 justify-center group"
            >
              <MessageCircle className="w-5 h-5" />
              문자상담
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <p className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-8">
            <Lock className="w-3 h-3" />
            상담 전화는 무료이며, 개인정보는 안전하게 보호됩니다.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
