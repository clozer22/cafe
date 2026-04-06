"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, Smartphone, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [isPaying, setIsPaying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const router = useRouter();

  const handlePay = () => {
    setIsPaying(true);
    // Simulate API call
    setTimeout(() => {
      setIsPaying(false);
      setShowSuccess(true);
      clearCart();
      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 2000);
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <main className="bg-cream min-h-screen">
        <Navbar />
        <div className="pt-48 pb-32 container mx-auto px-8 text-center">
          <h1 className="font-fancy text-4xl mb-8 uppercase tracking-widest">Your cart is empty</h1>
          <Link href="/menu">
            <button className="btn-cozy">Go to Menu</button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen relative overflow-hidden">
      <Navbar />

      <div className="pt-32 sm:pt-48 pb-32 container mx-auto px-8 max-w-6xl">
        <div className="flex items-center gap-4 mb-8 sm:mb-12 group cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-fancy text-xs sm:text-sm uppercase tracking-widest text-espresso/60">Back to Menu</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-fancy text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-12 uppercase tracking-tighter">FINALIZE <span className="italic text-mocha">ORDER.</span></h1>
            
            <div className="space-y-12">
              <section>
                <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-mocha mb-8">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`p-6 rounded-2xl border-2 flex flex-col gap-4 text-left transition-all ${paymentMethod === "card" ? "border-mocha bg-mocha/5" : "border-espresso/5 hover:border-mocha/20"}`}
                  >
                    <CreditCard className={`w-8 h-8 ${paymentMethod === "card" ? "text-mocha" : "text-espresso/20"}`} />
                    <span className="font-fancy text-sm uppercase tracking-widest">Credit Card</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("wallet")}
                    className={`p-6 rounded-2xl border-2 flex flex-col gap-4 text-left transition-all ${paymentMethod === "wallet" ? "border-mocha bg-mocha/5" : "border-espresso/5 hover:border-mocha/20"}`}
                  >
                    <Smartphone className={`w-8 h-8 ${paymentMethod === "wallet" ? "text-mocha" : "text-espresso/20"}`} />
                    <span className="font-fancy text-sm uppercase tracking-widest">E-Wallet</span>
                  </button>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-mocha mb-2">Details (Optional for Demo)</h3>
                <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-espresso/10 p-4 font-fancy text-sm tracking-widest uppercase focus:outline-none focus:border-mocha transition-colors" />
                <input type="text" placeholder="DELIVERY ADDRESS" className="w-full bg-transparent border-b border-espresso/10 p-4 font-fancy text-sm tracking-widest uppercase focus:outline-none focus:border-mocha transition-colors" />
              </section>

              <button 
                onClick={handlePay}
                disabled={isPaying}
                className="btn-cozy w-full group relative overflow-hidden flex items-center justify-center gap-4"
              >
                {isPaying ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    COMPLETE PURCHASE — ${totalPrice.toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Summary Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-coffee p-12 rounded-[2rem] h-fit"
          >
            <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-mocha mb-12">Order Summary</h3>
            <div className="space-y-8 mb-12">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <h4 className="font-fancy text-xl">{item.name}</h4>
                    <p className="text-sm text-espresso/40 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-fancy text-lg">${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-espresso/10 space-y-4">
              <div className="flex justify-between text-sm uppercase tracking-widest text-espresso/40">
                <span>Shipping</span>
                <span>$0.00 (Demo)</span>
              </div>
              <div className="flex justify-between text-2xl font-fancy">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-espresso/90 backdrop-blur-md z-[100] flex items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full"
            >
              <div className="w-24 h-24 bg-mocha/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-mocha/30">
                <CheckCircle2 className="w-12 h-12 text-mocha" />
              </div>
              <h2 className="font-fancy text-5xl text-cream mb-6 uppercase tracking-tighter">BREWED TO <span className="italic text-mocha">PERFECTION!</span></h2>
              <p className="text-cream/40 uppercase tracking-[0.3em] text-xs leading-loose mb-12">
                Your order #VB-2026 has been received. <br />
                Redirecting you to home...
              </p>
              <div className="w-12 h-1 bg-mocha/20 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                  className="h-full bg-mocha"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
