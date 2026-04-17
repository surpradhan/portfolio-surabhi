"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Is AI Companionship Real Connection, or Just a Very Good Simulation?",
    hook: "When a machine says 'I understand' — is it lying, or is that even the right question?",
    link: "https://medium.com/@surabhi7pradhan/is-ai-companionship-real-connection-or-just-a-very-good-simulation-e41010ed850b",
    platform: "Medium",
  },
  {
    title: "The Man Who Built GitHub Just Bet $60 Million That It's Obsolete",
    hook: "The person who made GitHub what it is just funded its replacement. That should tell you something.",
    link: "https://medium.com/@surabhi7pradhan/the-man-who-built-github-just-bet-60-million-that-its-obsolete-a7c1b1b5362f",
    platform: "Medium",
  },
  {
    title: "The Space Between Words",
    hook: "What actually happens in the gap between your prompt and the model's response?",
    link: "https://medium.com/@surabhi7pradhan/the-space-between-words-cd23242169b3",
    platform: "Medium",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 sm:px-12 lg:px-24 py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-xs font-mono text-accent/50 tracking-[0.2em] uppercase mb-16"
      >
        Writing
      </motion.p>

      <div className="divide-y divide-border/60 max-w-3xl">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group flex items-start justify-between gap-8 py-8"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono text-foreground/25 mb-2 tracking-wide">
                {post.platform}
              </p>
              <h3 className="text-base sm:text-lg font-medium text-foreground/80 group-hover:text-accent transition-colors duration-300 leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/35 leading-relaxed">
                {post.hook}
              </p>
            </div>
            <span className="text-foreground/20 group-hover:text-accent group-hover:translate-x-1 transform transition-all duration-300 text-base shrink-0 mt-6">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
