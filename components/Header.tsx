"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const PHONE = "010-0000-0000";

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "진행절차", href: "#process" },
  { label: "고객후기", href: "#reviews" },
  { label: "상담하기", href: `tel:${PHONE}` },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.06)] border-b border-gray-100/50 py-2.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "bg-brand-800 shadow-lg shadow-brand-800/20"
                  : "bg-white/15 backdrop-blur-sm border border-white/20"
              }`}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <div
                className={`text-lg font-black tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-brand-800" : "text-white"
                }`}
              >
                배관<span className={scrolled ? "text-brand-500" : "text-gold-400"}>사무소</span>
              </div>
              <div
                className={`text-[9px] tracking-[3px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-400" : "text-white/50"
                }`}
              >
                PLUMBING OFFICE
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-500 hover:text-brand-500 hover:bg-brand-50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="ml-4 inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
                boxShadow: "0 4px 20px rgba(231,76,60,0.35)",
              }}
            >
              <Phone className="w-4 h-4" />
              긴급상담
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all ${
              scrolled ? "text-brand-800 hover:bg-brand-50" : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-950/95 backdrop-blur-2xl pt-24 px-6"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-white text-2xl font-bold py-5 border-b border-white/[0.06] hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-3"
            >
              <a href={`tel:${PHONE}`} className="btn-primary justify-center text-base">
                <Phone className="w-5 h-5" /> 전화상담
              </a>
              <a href={`sms:${PHONE}`} className="btn-outline justify-center text-base">
                <MessageCircle className="w-5 h-5" /> 문자상담
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
