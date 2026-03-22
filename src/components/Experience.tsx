"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    company: "Citi",
    role: "Software Engineer",
    team: "Personal Banking & Wealth Management Technology",
    location: "Chennai, India",
    period: "Jul 2023 – Jul 2024",
    accent: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  {
    company: "Amazon",
    role: "Software Engineering Co-Op",
    team: "Associate Payments Team",
    location: "Bangalore, India",
    period: "Jan 2023 – Jun 2023",
    accent: "from-amber-500/20 to-orange-500/5",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] px-6 md:px-16 lg:px-24 py-32 border-t border-white/5"
    >
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4">
            Professional Experience
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Where I&apos;ve
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
              Shipped.
            </span>
          </h2>
          <div className="mt-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

          <div className="space-y-5">
            {experience.map((job, i) => (
              <ExperienceCard key={job.company} job={job} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  job,
  index,
  isInView,
}: {
  job: (typeof experience)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.12 }}
      className="relative md:pl-10"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-[23px] h-[23px] rounded-full border border-white/10 bg-[#0a0a0a] items-center justify-center">
        <div className={`w-2 h-2 rounded-full ${job.dot} opacity-70`} />
      </div>

      <div className={`group rounded-xl border ${job.border} bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${job.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-7 py-5">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-white">{job.company}</h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 border border-white/10 px-2 py-0.5 rounded-full font-mono">
                {job.role}
              </span>
            </div>
            <p className="text-white/35 text-sm mt-0.5">{job.team} · {job.location}</p>
          </div>
          <p className="text-[11px] font-mono text-white/25 tracking-wide flex-shrink-0">{job.period}</p>
        </div>
      </div>
    </motion.div>
  );
}
