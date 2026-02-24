"use client";

import { useEffect } from "react";

export default function ClickTracker() {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/api/track", { method: "POST", keepalive: true }).catch(() => {});
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
