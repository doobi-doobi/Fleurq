"use client";

import { PresentationHero } from "@/components/PresentationHero";
import { ContentSection } from "@/components/ContentSection";
import { ImageGallery } from "@/components/ImageGallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30">

      {/* 1. The Storytelling Presentation Section */}
      <PresentationHero />

      {/* 2. The "Normal Website" Content Flow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-neutral-950"
      >
        <ContentSection />

        <ImageGallery />

        {/* Minimal Footer */}
        <footer className="py-12 px-6 border-t border-zinc-900 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs">
          <p>© 2026 Fleurq Digital Presentation.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}
