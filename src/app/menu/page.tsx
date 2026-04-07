"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <main className="bg-charcoal min-h-screen relative overflow-hidden text-ivory">
      <Navbar />
      
      <div className="relative z-10">
        <div className="pt-32 sm:pt-48 pb-12 sm:pb-20 container mx-auto px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="font-fancy text-gold text-xl sm:text-2xl mb-4 block tracking-[0.4em] uppercase">The Sanctum</span>
            <h1 className="font-gothic text-6xl sm:text-8xl md:text-9xl text-ivory tracking-wider uppercase">OUR OFFERINGS.</h1>
            <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
          </motion.div>
        </div>
        
        <MenuSection />
        
        <div className="py-32 container mx-auto px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <h3 className="font-fancy text-2xl tracking-[0.2em] text-gold uppercase underline underline-offset-8 decoration-gold/20">The Daily Liturgy</h3>
            <p className="text-ivory/40 font-light leading-relaxed tracking-widest uppercase text-sm">
              All our selections are prepared with artisanal care and respect for the tradition of the sacred bean.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
