"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Now", href: "#now" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/[0.04]"
          style={{ background: "rgba(12, 9, 7, 0.92)" }}
        >
          <div className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4">
            <a
              href="#"
              className="text-xs font-mono text-foreground/25 hover:text-accent transition-colors duration-300 tracking-[0.15em]"
            >
              SP.
            </a>
            <div className="flex gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-mono text-foreground/30 hover:text-accent transition-colors duration-300 tracking-[0.1em]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
