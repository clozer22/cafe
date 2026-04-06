"use client";

import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CoffeeBeansBackground from "@/components/CoffeeBeansBackground";

export default function MenuPage() {
  return (
    <main className="bg-[#F5F5DC] min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-espresso z-0">
        <CoffeeBeansBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso/80 to-[#F5F5DC]" />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <div className="pt-32 sm:pt-48 pb-12 sm:pb-20 container mx-auto px-8 text-center text-cream">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="font-fancy text-2xl sm:text-4xl text-mocha mb-2 sm:mb-4 block">The Ritual Collection</span>
            <h1 className="font-fancy text-5xl sm:text-7xl md:text-9xl uppercase tracking-tighter">OUR MENU.</h1>
          </motion.div>
        </div>
        
        <div className="bg-cream pt-20">
          <MenuSection />

          <div className="pb-32 container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-coffee p-12 rounded-[2rem] border border-mocha/10"
            >
              <h3 className="font-fancy text-2xl mb-6">Seasonal Specials</h3>
              <p className="text-espresso/60 text-sm tracking-widest uppercase mb-8">Ask our baristas about this month's single-origin rotation and limited palette pairings.</p>
              <button className="text-mocha font-fancy uppercase tracking-[0.3em] text-[10px] hover:text-espresso transition-colors">See the rotation →</button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-espresso p-12 rounded-[2rem] text-cream"
            >
              <h3 className="font-fancy text-2xl mb-6 text-mocha">The Cellar</h3>
              <p className="text-cream/40 text-sm tracking-widest uppercase mb-8">Exclusive beans sourced from high-altitude estates in Ethiopia and Colombia.</p>
              <button className="btn-cozy !bg-mocha !text-espresso border-none">Reserve a Bag</button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
