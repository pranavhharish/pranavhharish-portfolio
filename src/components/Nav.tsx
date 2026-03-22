"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = ["Work", "About", "Contact"];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      {/* ── Sidebar (md+) ────────────────────────────────────────── */}
      <motion.nav className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-16 lg:w-20 flex-col items-center justify-between py-8">
        {/* Frosted background */}
        <motion.div
          className="absolute inset-0 border-r border-white/5 backdrop-blur-md bg-[#0a0a0a]/80"
          style={{ opacity: bgOpacity }}
        />

        {/* Logo mark */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <span className="text-sm font-bold tracking-tight text-white">
            PH
          </span>
          <span className="text-white/20 text-xs">.</span>
        </div>

        {/* Nav links — rotated vertically */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group flex items-center gap-2"
              style={{ writingMode: "vertical-rl" }}
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/30 group-hover:text-white transition-colors duration-300 rotate-180">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Hire me — rotated */}
        <div className="relative z-10 flex flex-col items-center">
          <a
            href="mailto:phs4@illinois.edu"
            className="group flex items-center"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 group-hover:text-white/70 transition-colors duration-300 rotate-180 border border-white/10 group-hover:border-white/25 px-2 py-3 rounded-full">
              Hire me
            </span>
          </a>
        </div>
      </motion.nav>

      {/* ── Top bar (mobile only) ─────────────────────────────────── */}
      <motion.nav className="md:hidden fixed top-0 left-0 right-0 z-50 px-6">
        <motion.div
          className="absolute inset-0 border-b border-white/5 backdrop-blur-md bg-[#0a0a0a]/80"
          style={{ opacity: bgOpacity }}
        />
        <div className="relative flex items-center justify-between h-14">
          <span className="text-sm font-bold tracking-tight text-white">
            PH<span className="text-white/30">.</span>
          </span>
          <div className="flex items-center gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:phs4@illinois.edu"
            className="text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-full transition-all duration-300"
          >
            Hire
          </a>
        </div>
      </motion.nav>
    </>
  );
}
