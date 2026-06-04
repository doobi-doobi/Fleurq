"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Zap,
  Shield,
  Globe,
  Cpu,
  Layers,
  BarChart3,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const FEATURES = [
  {
    title: "Ultra-Fast Performance",
    description: "Powered by an edge-first architecture that ensures your content reaches users in milliseconds.",
    icon: <Zap className="w-5 h-5" />,
    className: "col-span-2 row-span-1",
    highlight: "99.9% Uptime",
  },
  {
    title: "Global Infrastructure",
    description: "Deploy worldwide with a single click using our distributed network.",
    icon: <Globe className="w-5 h-5" />,
    className: "col-span-1 row-span-1",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and identity management built directly into the core.",
    icon: <Shield className="w-5 h-5" />,
    className: "col-span-1 row-span-2",
    highlight: "SOC2 Compliant",
  },
  {
    title: "AI-Driven Insights",
    description: "Leverage machine learning to predict user behavior and optimize conversion rates in real-time.",
    icon: <Cpu className="w-5 h-5" />,
    className: "col-span-1 row-span-1",
  },
  {
    title: "Advanced Layering",
    description: "Complex workflows simplified through an intuitive visual orchestration layer.",
    icon: <Layers className="w-5 h-5" />,
    className: "col-span-2 row-span-1",
    highlight: "Visual Builder",
  },
  {
    title: "Real-time Analytics",
    description: "Track every interaction with precision and granularity.",
    icon: <BarChart3 className="w-5 h-5" />,
    className: "col-span-1 row-span-1",
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-3 py-1 text-xs font-medium tracking-wider text-zinc-500 uppercase border border-zinc-800 rounded-full bg-zinc-900/50"
        >
          Features
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Everything you need to <span className="text-zinc-500">scale.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-zinc-800 bg-neutral-900 p-8 transition-all hover:border-zinc-700",
              feature.className
            )}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 p-2 w-fit rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>

              {feature.highlight && (
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500 uppercase">{feature.highlight}</span>
                  <div className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>

            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
