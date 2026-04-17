"use client";

import { motion } from "framer-motion";

export default function Now() {
  return (
    <section id="now" className="px-6 sm:px-12 lg:px-24 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-2xl"
      >
        <p className="text-xs font-mono text-accent/50 tracking-[0.2em] uppercase mb-12">
          Now
        </p>
        <p className="text-xl sm:text-2xl font-light text-foreground/75 leading-relaxed tracking-tight">
          Currently exploring multi-agent architectures - specifically how agents
          with different specializations can share memory and coordinate without
          a central orchestrator.
        </p>
        <p className="mt-10 text-xs font-mono text-foreground/20 tracking-[0.2em]">
          UPDATED APRIL 2026
        </p>
      </motion.div>
    </section>
  );
}
