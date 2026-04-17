"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col px-6 sm:px-12 lg:px-24 pt-10 pb-12 relative">

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between"
      >
        <span className="text-xs font-mono text-foreground/25 tracking-[0.2em]">SP.</span>
        <span className="text-xs font-mono text-foreground/20 tracking-[0.15em]">
          AI ENGINEER · BANGALORE
        </span>
      </motion.div>

      {/* Name — fills vertical centre */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mt-auto mb-10"
      >
        <h1 className="hero-name text-gradient">
          <span className="block">Surabhi</span>
          <span className="block">Pradhan</span>
        </h1>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-end justify-between gap-8"
      >
        <p className="text-sm sm:text-base text-foreground/45 max-w-sm leading-relaxed">
          Building things that think - protocols for multi-agent systems,
          benchmarks to understand what works, tools that run without the cloud.
        </p>
        <a
          href="#about"
          className="text-xs font-mono text-foreground/25 hover:text-accent transition-colors duration-300 shrink-0 mb-0.5"
        >
          scroll ↓
        </a>
      </motion.div>
    </section>
  );
}
