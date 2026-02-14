"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#075985] to-[#0369a1] pt-16 px-5 text-center md:pb-16 pb-28">
      {/* Decorative orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold-400/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div>
            <span className="text-white/90 font-black text-xl">
              배관<span className="text-brand-400 text-sparkle">사무소</span>
            </span>
            <p className="text-white/60 text-[9px] tracking-[3px] font-medium">PLUMBING OFFICE</p>
          </div>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.12] border border-white/[0.2] backdrop-blur-sm">
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-white/80 text-base md:text-lg font-medium">010-4111-6977</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.12] border border-white/[0.2] backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-white/80 text-base md:text-lg font-medium">24시간 연중무휴</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.12] border border-white/[0.2] backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-white/80 text-base md:text-lg font-medium">전국 출장 가능</span>
          </div>
        </div>

        <div className="divider-gradient mb-8" />

        <div className="text-white/50 text-sm">
          <p>&copy; 2026 배관사무소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
