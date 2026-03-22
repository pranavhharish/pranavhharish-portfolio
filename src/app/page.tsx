"use client";

import { useRef } from "react";
import Nav from "@/components/Nav";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollyRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#0a0a0a] md:pl-16 lg:pl-20">
      <Nav />

      {/* Scrollytelling section — canvas + overlay share the same ref for scroll tracking */}
      <div ref={scrollyRef} className="relative" style={{ height: "500vh" }}>
        <ScrollyCanvas containerRef={scrollyRef} />
        <Overlay containerRef={scrollyRef} />
      </div>

      {/* Below-fold content */}
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
