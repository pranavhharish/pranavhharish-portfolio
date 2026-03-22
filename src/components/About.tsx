"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "Python", "C++", "TypeScript", "JavaScript", "SQL", "React.js", "Node.js"],
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    category: "Cloud & Data",
    items: ["AWS Lambda", "Glue", "S3", "API Gateway", "EMR", "Athena", "PostgreSQL", "MongoDB", "Pinecone", "Spark"],
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    category: "AI & Agentic",
    items: ["LangChain", "LangGraph", "RAG", "Multi-Agent Systems", "MCP", "Claude Code", "Cursor"],
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    category: "DevOps & Testing",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Jenkins", "JUnit", "Mockito"],
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

const education = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "M.S. Information Management",
    period: "Expected May 2026",
    detail: "GPA 3.8 / 4.0",
  },
  {
    school: "PSG College of Technology",
    degree: "B.Tech Information Technology",
    period: "Jul 2019 – Apr 2023",
    detail: null,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-32 border-t border-white/5"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        {/* ── Left col: bio + education ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            {/* label: text-xs → text-sm */}
            <p className="text-sm tracking-[0.3em] uppercase text-white/30 mb-4">
              About
            </p>
            {/* heading: text-4xl md:text-5xl → text-5xl md:text-6xl */}
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Engineer &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                AI Builder.
              </span>
            </h2>
            {/* bio: text-sm → text-base */}
            <p className="text-white/45 text-base leading-relaxed max-w-md">
              MS student at UIUC (GPA 3.8) with production experience at Amazon
              and Citi — shipping pipelines that process $90M/month in
              transactions and platform tooling used by hundreds of engineers.
              I specialise in agentic AI systems, cloud infrastructure, and the
              full spectrum from architecture decisions to production deployment.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* label: text-[10px] → text-xs */}
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-6">
              Education
            </p>
            <div className="space-y-6">
              {education.map((ed) => (
                <div key={ed.school} className="flex items-start gap-4 group">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-violet-400 transition-colors duration-300 flex-shrink-0" />
                  <div>
                    {/* school: text-sm → text-base */}
                    <p className="text-white/80 text-base font-medium leading-tight">
                      {ed.school}
                    </p>
                    {/* degree: text-xs → text-sm */}
                    <p className="text-white/35 text-sm mt-0.5">{ed.degree}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {/* period: text-[10px] → text-xs */}
                      <span className="text-xs text-white/20 font-mono tracking-wide">
                        {ed.period}
                      </span>
                      {ed.detail && (
                        <>
                          <span className="text-white/10">·</span>
                          {/* detail: text-[10px] → text-xs */}
                          <span className="text-xs text-white/20 font-mono">
                            {ed.detail}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right col: skills grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className={`rounded-xl border ${group.border} bg-white/[0.02] backdrop-blur-sm p-5 hover:bg-white/[0.04] transition-colors duration-300`}
            >
              {/* category label: text-[10px] → text-xs */}
              <p className={`text-xs tracking-[0.25em] uppercase font-mono mb-4 ${group.accent}`}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md hover:text-white/70 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
