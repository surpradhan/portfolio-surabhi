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
          I build at three layers: infrastructure, research, and product.
          Most people pick one. I think you need all three to know what you&apos;re doing.
        </p>

        {/* Body */}
        <div className="space-y-5 text-base leading-relaxed text-foreground/45 max-w-2xl">
          <p>
            The infrastructure layer is where I spend the most deliberate energy —
            designing open protocols for how agents coordinate memory and share
            observability data across frameworks. If agents are going to work
            together at scale, they need standards, not just more wrappers.
          </p>
          <p>
            The research layer is what keeps me honest. Before I build a RAG
            system, I benchmark 11 architectures head-to-head — same LLM, same
            embeddings, same eval set. Before I recommend a rec system, I evaluate
            8 algorithms on a fair protocol. Building without measuring feels like guessing.
          </p>
          <p>
            The product layer is how everything gets tested against reality —
            deep research agents, local LLM finance tools, AI that watches two
            personalities argue. Range isn&apos;t a lack of focus. It&apos;s how I understand
            what intelligence is actually good for.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
