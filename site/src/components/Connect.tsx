"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/surpradhan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/surabhi-pradhan-9a068982/" },
  { label: "Email", href: "mailto:surabhi7pradhan@gmail.com" },
];

export default function Connect() {
  return (
    <section id="connect" className="px-6 sm:px-12 lg:px-24 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="text-xs font-mono text-accent/50 tracking-[0.2em] uppercase mb-12">
          Connect
        </p>

        <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground/80 leading-[1.2] tracking-tight max-w-2xl mb-16">
          Always open to conversations about AI systems, agents, and interesting
          problems worth solving.
        </p>

        <div className="flex flex-wrap gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-2 text-sm font-mono text-foreground/35 hover:text-accent transition-colors duration-300"
            >
              {link.label}
              <span className="group-hover:translate-x-0.5 transform transition-transform duration-300">↗</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
