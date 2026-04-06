"use client";

import { motion } from "framer-motion";
import CoffeeBeansBackground from "./CoffeeBeansBackground";
import { Coffee, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#1B1212]">
      {/* Background Coffee Beans Effect */}
      <CoffeeBeansBackground />

      <div className="container mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-20 h-20 bg-mocha/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-mocha/30 backdrop-blur-md"
        >
          <Coffee className="w-10 h-10 text-mocha" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-fancy text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] sm:leading-[0.85] text-cream mb-8 sm:mb-12 tracking-tighter"
        >
          ART OF THE <br />
          <span className="text-mocha italic font-light">PERFECT</span> POUR.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-cream/40 text-lg md:text-xl font-light leading-relaxed mb-16 tracking-widest uppercase"
        >
          Discover artisanal beans, ethically sourced and roasted to perfection. A sanctuary for coffee lovers and dreamers alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
        >
          <Link href="/menu">
            <button className="btn-cozy group">
              View Menu
              <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <div className="flex items-center gap-4 text-mocha/60 font-fancy tracking-[0.3em] text-sm uppercase">
            <span>Scroll to Discover</span>
            <div className="w-12 h-[1px] bg-mocha/30" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-espresso opacity-60 pointer-events-none" />
    </section>
  );
}
