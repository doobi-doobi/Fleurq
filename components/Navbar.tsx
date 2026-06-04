"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit"
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-neutral-900/60 backdrop-blur-xl border border-zinc-800 shadow-2xl">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white font-bold tracking-tighter text-lg">Fleurq</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Platform</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Showcase</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
