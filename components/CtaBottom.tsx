"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const PHONE = "010-0000-0000";

export default function CtaBottom() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 noise" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(41,128,185,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
            배관 문제,
            <br />
            더 이상 고민하지 마세요!
          </h2>
          <p className="text-white/50 text-lg mb-10">
            24시간 전문 상담사가 대기하고 있습니다. 지금 바로 연락주세요.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary text-xl justify-center">
              <Phone className="w-6 h-6" />
              긴급상담 {PHONE}
            </a>
            <a
              href={`sms:${PHONE}`}
              className="btn-outline justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              문자상담
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
