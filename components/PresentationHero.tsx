"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    title: "I dag lever de fleste mennesker langt væk fra naturen.",
    description: "Alligevel går dyr igen i mode overalt omkring os. Pelsjakker lædertasker og krokkodilleskinds sko der bliver solgt som luksus og status",
  },
  {
    title: "Men bag mange produkter",
    description: "Gemmer der sig en virkelighed de fleste sjælendt ser",
  },
  {
    title: "Hvert år bliver millioner af dyr avlet, fanget eller dræbt",
    description: "For at mennesker kan bruge deres skind, pels eller mønstre som pynt og mode. Mange af dyrene lever under dårlige forhold, og nogle arter er endda truede.",
  },
  {
    title: "Så hvorfor fortsætter vi?",
    description: "Rul ned for at forstå historien bag luksus.",
  },
];

export function PresentationHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      {/* Fixed Background Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-950">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/transparent.png"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Ambient Background Glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full w-full px-6">
          {SLIDES.map((slide, index) => {
            const start = index / SLIDES.length;
            const end = (index + 1) / SLIDES.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0]
            );

            const y = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [20, 0, 0, -20]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="absolute flex flex-col items-center text-center max-w-4xl"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-3 py-1 text-xs font-medium tracking-wider text-zinc-500 uppercase border border-zinc-800 rounded-full mb-6 bg-zinc-900/50"
                >
                  Kapitel 0{index + 1}
                </motion.span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll for at udforske</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </div>
    </div>
  );
}
