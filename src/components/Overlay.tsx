"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextSectionProps {
  children: React.ReactNode;
  align: "center" | "left" | "right";
  scrollStart: number;
  scrollEnd: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function TextSection({
  children,
  align,
  scrollStart,
  scrollEnd,
  containerRef,
}: TextSectionProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const midPoint = (scrollStart + scrollEnd) / 2;
  const fadeIn = useTransform(
    scrollYProgress,
    [scrollStart, scrollStart + 0.08, midPoint, scrollEnd - 0.05, scrollEnd],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    ["30px", "-30px"]
  );

  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "left"
      ? "items-start text-left pl-12 md:pl-24"
      : "items-end text-right pr-12 md:pr-24";

  return (
    <motion.div
      style={{ opacity: fadeIn, y }}
      className={`absolute inset-0 flex flex-col justify-center ${alignClass} pointer-events-none`}
    >
      {children}
    </motion.div>
  );
}

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  return (
    <div className="absolute inset-0 z-10" style={{ height: "500vh" }}>
      {/* Sticky overlay layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section 1 — 0–20% */}
        <TextSection
          align="center"
          scrollStart={0}
          scrollEnd={0.22}
          containerRef={containerRef}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
            Pranav Harish Sivakumar
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/60 font-light tracking-wide">
            Creative Developer
          </p>
        </TextSection>

        {/* Section 2 — 28–52% */}
        <TextSection
          align="left"
          scrollStart={0.28}
          scrollEnd={0.52}
          containerRef={containerRef}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            01 — Vision
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-lg">
            Bridging product
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              & engineering.
            </span>
          </h2>
        </TextSection>

        {/* Section 3 — 58–82% */}
        <TextSection
          align="right"
          scrollStart={0.58}
          scrollEnd={0.82}
          containerRef={containerRef}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            02 — Craft
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-lg">
            AI System 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              to Production scale.
            </span>
          </h2>
        </TextSection>

        {/* Scroll indicator */}
        <ScrollIndicator containerRef={containerRef} />
      </div>
    </div>
  );
}

function ScrollIndicator({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
    >
      <p className="text-[10px] tracking-[0.25em] uppercase text-white/30">
        Scroll
      </p>
      <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
    </motion.div>
  );
}
