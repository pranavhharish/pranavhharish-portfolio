"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pranavh-harish" },
  { label: "GitHub", href: "https://github.com/pranavhharish" },
  { label: "Email", href: "mailto:phs4@illinois.edu" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-16 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl font-bold text-white">
            PH<span className="text-white/20">.</span>
          </span>
          <p className="mt-2 text-xs text-white/20 tracking-wide">
            © 2026 Pranavh Harish Sivakumar. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-white/15 font-mono">
            phs4@illinois.edu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[11px] tracking-[0.2em] uppercase text-white/25 hover:text-white/70 transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
