"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoffeeBeansBackground from "@/components/CoffeeBeansBackground";
import { Calendar, Users, Clock, Coffee, Sparkles } from "lucide-react";
import { useState } from "react";

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-charcoal min-h-screen relative overflow-hidden text-ivory">
      <CoffeeBeansBackground />
      <Navbar />

      <div className="pt-32 sm:pt-48 pb-32 container mx-auto px-8 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-fancy text-gold text-xl sm:text-2xl mb-4 block tracking-[0.3em] uppercase">Reservations</span>
            <h1 className="font-gothic text-6xl sm:text-8xl text-ivory mb-8 sm:mb-12 uppercase tracking-wider leading-[0.9]">
              SECURE <br />
              <span className="italic text-gold">THE</span> SANCTUM.
            </h1>
            <div className="w-24 h-[1px] bg-gold/30 mb-8" />
            <p className="text-cream/40 text-lg uppercase tracking-widest leading-loose mb-16 max-w-md">
              Secure a cozy corner for your morning brew or a grand table for afternoon social rituals.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-mocha/10 rounded-full flex items-center justify-center border border-mocha/20">
                  <Coffee className="w-6 h-6 text-mocha" />
                </div>
                <div>
                  <h4 className="font-fancy text-xl text-cream mb-2">Private Tastings</h4>
                  <p className="text-cream/20 text-sm uppercase tracking-widest">Guided cupping sessions for up to 6 guests.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-mocha/10 rounded-full flex items-center justify-center border border-mocha/20">
                  <Sparkles className="w-6 h-6 text-mocha" />
                </div>
                <div>
                  <h4 className="font-fancy text-xl text-cream mb-2">Special Rituals</h4>
                  <p className="text-cream/20 text-sm uppercase tracking-widest">Hosting a launch or social gathering? We've got you covered.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-coffee p-12 md:p-16 rounded-[3rem] border border-mocha/10 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-mocha rounded-full flex items-center justify-center mx-auto mb-8">
                  <Calendar className="w-10 h-10 text-espresso" />
                </div>
                <h3 className="font-fancy text-4xl text-cream mb-6">Reservation Sent</h3>
                <p className="text-cream/40 uppercase tracking-widest text-xs leading-loose">
                  We'll confirm your sanctuary <br /> via email shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-mocha font-fancy uppercase tracking-widest text-sm hover:text-cream transition-colors"
                >
                  Book another sanctuary →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 group">
                <div className="grid grid-cols-1 gap-8 sm:gap-10">
                  <div className="space-y-4">
                    <label className="text-mocha text-[10px] uppercase tracking-[0.4em] block">Select Date</label>
                    <div className="flex items-center gap-4 text-cream/40 border-b border-cream/10 pb-4 focus-within:border-mocha transition-colors">
                      <Calendar className="w-5 h-5" />
                      <input type="text" placeholder="Tomorrow" className="bg-transparent font-fancy tracking-widest focus:outline-none w-full text-cream text-lg" required />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-mocha text-[10px] uppercase tracking-[0.4em] block">Time</label>
                    <div className="flex items-center gap-4 text-cream/40 border-b border-cream/10 pb-4 focus-within:border-mocha transition-colors">
                      <Clock className="w-5 h-5" />
                      <input type="text" placeholder="10:00 AM" className="bg-transparent font-fancy tracking-widest focus:outline-none w-full text-cream text-lg" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-mocha text-[10px] uppercase tracking-[0.4em] block">Number of Guests</label>
                  <div className="flex items-center gap-4 text-cream/40 border-b border-cream/10 pb-4 focus-within:border-mocha transition-colors">
                    <Users className="w-5 h-5" />
                    <select className="bg-transparent font-fancy tracking-widest focus:outline-none w-full text-cream text-lg appearance-none cursor-pointer">
                      <option className="bg-espresso">2 Guests</option>
                      <option className="bg-espresso">4 Guests</option>
                      <option className="bg-espresso">6+ Guests (Private)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-mocha text-[10px] uppercase tracking-[0.4em] block">Full Name</label>
                  <input type="text" placeholder="GUEST NAME" className="w-full bg-transparent border-b border-cream/10 pb-4 font-fancy tracking-widest text-lg focus:outline-none focus:border-mocha text-cream transition-colors" required />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cozy w-full group overflow-hidden flex items-center justify-center gap-4"
                >
                  {isSubmitting ? "REQUESTING..." : "RESERVE SANCTUARY"}
                </button>
              </form>
            )}
            
            {/* Corner Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-mocha/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
