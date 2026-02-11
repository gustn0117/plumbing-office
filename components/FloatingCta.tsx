"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "010-0000-0000";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating buttons */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3"
          >
            <a
              href={`tel:${PHONE}`}
              className="group flex items-center gap-3 bg-brand-800 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-brand-700 transition-all"
            >
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm">전화상담</span>
            </a>
            <a
              href={`sms:${PHONE}`}
              className="group flex items-center gap-3 bg-brand-500 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:bg-brand-400 transition-all"
            >
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm">문자상담</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-danger-500 safe-area-bottom"
          >
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 py-4 px-5 text-white font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              긴급상담 {PHONE}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
