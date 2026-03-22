"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Bro Founder",
    category: "AI Platform · Hackathon Runner-Up",
    badge: "Runner-Up · UIUC AI Hackathon by Keywords AI",
    description:
      "Agentic co-founder platform orchestrating 4 LangChain agents to deliver real-time startup briefs in under 60 seconds. Built with Claude Code and Cursor; all LLM-generated code critically reviewed before merging. Integrated Respan telemetry for live agent output monitoring.",
    tags: ["React", "TypeScript", "LangChain", "Claude Code", "Respan"],
    accent: "from-violet-500/20 to-purple-500/5",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/10",
    year: "2026",
    href: "https://github.com/ash-win19/bro-founder",
  },
  {
    id: "02",
    title: "Agentic Equity Analyst",
    category: "AI · Multi-Agent Systems",
    badge: null,
    description:
      "Modular, OOP-structured multi-agent platform in Python that orchestrates agents consuming SEC filings, real-time market data, and news sentiment to auto-generate equity research reports. Architected reusable modules for data ingestion, vector embedding (Chroma), and DCF modelling.",
    tags: ["Python", "LangChain", "Chroma", "Streamlit", "SEC API"],
    accent: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/10",
    year: "2026",
    href: "https://github.com/Agentic-AI-UIUC/Agentic-Equity-Analyst",
  },
  {
    id: "03",
    title: "YC-Pilot",
    category: "AI Product · Full-Stack",
    badge: null,
    description:
      "AI platform for evaluating startup ideas using RAG-enhanced LLMs and Lyzr Agents. Scraped and structured YC startup listings into a dynamic knowledge base to benchmark new pitches — improving evaluation accuracy by 40%. Led end-to-end delivery from market research to deployment, with a dual-access system: instant Vercel frontend + automated email reports.",
    tags: ["GPT-4o", "RAG", "Lyzr Agents", "Weaviate", "Perplexity AI", "Vercel"],
    accent: "from-indigo-500/20 to-violet-500/5",
    border: "border-indigo-500/20",
    glow: "group-hover:shadow-indigo-500/10",
    year: "2025",
    href: "https://v0-yc-pilot-website.vercel.app",
  },
  {
    id: "04",
    title: "F1 Infringement Analyst",
    category: "NLP · Motorsport Analytics",
    badge: "FIA · AMG Mercedes",
    description:
      "Extracted and analysed 6+ years of FIA stewards' and race reports to build rich infringement profiles for F1 teams. Combined extractive (LexRank, TextRank) and abstractive (BART, T5, PEGASUS) summarization methods to surface penalty and infringement patterns over time — with a focus on reproducibility, transparent datasets, and correct evaluation metrics.",
    tags: ["NLP", "BART", "T5", "LexRank", "PEGASUS", "Python"],
    accent: "from-red-500/20 to-rose-500/5",
    border: "border-red-500/20",
    glow: "group-hover:shadow-red-500/10",
    year: "2025",
    href: "https://github.com/pranavhharish",
  },
  {
    id: "05",
    title: "Adventure Portfolio",
    category: "Web App · AI Chatbot",
    badge: null,
    description:
      "Responsive web app built with Next.js and React to showcase an Iceland photography expedition to organize trips, turning a photography portfolio into travel guide.",
    tags: ["Next.js", "React", "RAG", "Multi-Agent", "AI Chatbot"],
    accent: "from-sky-500/20 to-cyan-500/5",
    border: "border-sky-500/20",
    glow: "group-hover:shadow-sky-500/10",
    year: "2025",
    href: "https://adithya-iceland.vercel.app",
  },
  {
    id: "06",
    title: "CrewSafe",
    category: "Consulting · Aviation AI",
    badge: "AI-Powered Crew Fatigue Management",
    description:
      "Led development of an aviation AI prototype for crew fatigue management. Conducted primary research with pilots, synthesized FAA regulations, and coordinated a cross-functional team. Built the CrewSafe app integrating multiple AI solutions with full mockup simulations end-to-end.",
    tags: ["AI Integration", "FAA Compliance", "Prototyping", "Consulting"],
    accent: "from-rose-500/20 to-orange-500/5",
    border: "border-rose-500/20",
    glow: "group-hover:shadow-rose-500/10",
    year: "2025",
    href: "https://crew-safe.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// Group projects by year for timeline rendering
const grouped = projects.reduce<Record<string, typeof projects>>((acc, p) => {
  (acc[p.year] ??= []).push(p);
  return acc;
}, {});
const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-32"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Projects
        </h2>
        <div className="mt-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </motion.div>

      {/* Timeline grouped grid */}
      <div className="space-y-16">
        {years.map((year) => (
          <div key={year}>
            {/* Year marker */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-white/20 uppercase">
                {year}
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {grouped[year].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 flex justify-center"
      >
        <a
          href="mailto:phs4@illinois.edu"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-white/10"
        >
          <span className="text-sm tracking-wide">Let&apos;s work together</span>
          <span className="text-white/40 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.a
      variants={cardVariants}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative rounded-2xl border ${project.border} bg-white/[0.03] backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/[0.06] hover:shadow-2xl ${project.glow} block`}
    >
      {/* Gradient hover accent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-8 md:p-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/20 font-mono">
            {project.id}
          </span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/20 font-mono">
            {project.year}
          </span>
        </div>

        {/* Badge */}
        {project.badge && (
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3 font-mono">
            ◆ {project.badge}
          </p>
        )}

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
          {project.category}
        </p>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tags + arrow */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-4">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
