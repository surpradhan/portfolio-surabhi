"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12", label: "projects" },
  { value: "2", label: "open protocols" },
  { value: "11", label: "RAG architectures evaluated" },
  { value: "10", label: "agent workflow patterns compared" },
];

export default function Stats() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-40px" }}
        className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-16"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-baseline gap-2.5"
          >
            <span className="text-2xl sm:text-3xl font-mono font-light text-accent/80 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs font-mono text-foreground/25 tracking-[0.1em] uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
