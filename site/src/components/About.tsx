"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl"
      >
        <p className="text-xs font-mono text-accent/50 tracking-[0.2em] uppercase mb-12">
          About
        </p>

        {/* Lede */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-[1.4] text-foreground/90 mb-10 tracking-tight">
          Infrastructure without research is guessing. Research without product is academic.
          I try to stay honest by doing all three.
        </p>

        {/* Body */}
        <div className="space-y-5 text-base leading-relaxed text-foreground/45 max-w-2xl">
          <p>
            Most of my deliberate energy goes into protocols - how agents coordinate
            memory and share observability data across frameworks. If agents are going
            to work together at scale, they need standards, not just more wrappers.
          </p>
          <p>
            Before I ship something, I benchmark it. 11 RAG architectures head-to-head,
            same LLM, same embeddings, same eval set. 8 rec algorithms on a single fair
            protocol. It&apos;s how I stay honest about what works vs. what I want to work.
          </p>
          <p>
            The products are where theories hit friction. Deep research agents,
            local LLM finance tools, two AI personalities arguing at each other.
            Range isn&apos;t a lack of direction - it&apos;s how I find out what intelligence
            is genuinely useful for.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
