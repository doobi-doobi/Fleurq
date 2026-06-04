"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function ModernCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-neutral-900 border border-zinc-800 p-12 md:p-24 text-center space-y-8">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Ready to transform?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Build the future of <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              digital presentation.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-lg w-full sm:w-auto"
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors text-lg w-full sm:w-auto"
            >
              Book a Demo
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
