"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cathedralBg from "@/assets/cathedral_bg.png";
import { ArrowRight, Cross } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-charcoal">
      {/* Background Cathedral Effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={cathedralBg} 
          alt="Cathedral Interior" 
          fill 
          className="object-cover opacity-60 mix-blend-luminosity brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-at-b from-charcoal/20 via-transparent to-charcoal" />
      </div>

      <div className="container mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]"
        >
          <Cross className="w-8 h-8 text-gold rotate-45" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-fancy text-gold text-lg tracking-[0.5em] uppercase mb-4">The Sacred Ritual</h2>
          <h1 className="font-gothic text-7xl sm:text-9xl md:text-[12rem] leading-none text-ivory tracking-wider">
            THE ROASTED BEAN
          </h1>
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 opacity-40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-xl mx-auto text-ivory/40 text-sm md:text-base font-fancy leading-relaxed mb-16 tracking-[0.3em] uppercase"
        >
          Where history whispers in every brew. Step into the sanctum of artisanal coffee and gothic elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12"
        >
          <Link href="/menu">
            <button className="btn-cathedral group">
              Enter the Sanctum
              <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-charcoal opacity-80 pointer-events-none" />
    </section>
  );
}
