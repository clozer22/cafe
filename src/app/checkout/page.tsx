"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, Smartphone, CheckCircle2, Loader2, ArrowLeft, Cross } from "lucide-react";
import { useState } from "react";
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
    setTimeout(() => {
      setIsPaying(false);
      setShowSuccess(true);
      clearCart();
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 2000);
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <main className="bg-charcoal min-h-screen text-ivory">
        <Navbar />
        <div className="pt-48 pb-32 container mx-auto px-8 text-center">
          <h1 className="font-gothic text-4xl mb-8 uppercase tracking-widest text-gold opacity-40">Your offering is empty</h1>
          <Link href="/menu">
            <button className="btn-cathedral">Enter the Sanctum</button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-charcoal min-h-screen relative overflow-hidden text-ivory">
      <Navbar />

      <div className="pt-32 sm:pt-48 pb-32 container mx-auto px-8 max-w-6xl">
        <div className="flex items-center gap-4 mb-8 sm:mb-12 group cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-gold" />
          <span className="font-fancy text-xs sm:text-sm uppercase tracking-widest text-gold/60 group-hover:text-gold transition-colors">Return to Sanctum</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-gothic text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-12 uppercase tracking-wider text-ivory leading-none">
              FINALIZE <br />
              <span className="italic text-gold">OFFERING.</span>
            </h1>
            
            <div className="space-y-12">
              <section>
                <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-gold mb-8 border-b border-gold/10 pb-4">Payment Ritual</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-4 text-left ${paymentMethod === "card" ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "border-ivory/5 hover:border-gold/20"}`}
                  >
                    <CreditCard className={`w-6 h-6 ${paymentMethod === "card" ? "text-gold" : "text-ivory/20"}`} />
                    <span className="font-fancy text-xs uppercase tracking-[0.2em]">Credit Card</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("wallet")}
                    className={`p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-4 text-left ${paymentMethod === "wallet" ? "border-gold bg-gold/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "border-ivory/5 hover:border-gold/20"}`}
                  >
                    <Smartphone className={`w-6 h-6 ${paymentMethod === "wallet" ? "text-gold" : "text-ivory/20"}`} />
                    <span className="font-fancy text-xs uppercase tracking-[0.2em]">E-Wallet</span>
                  </button>
                </div>
              </section>

              <section className="space-y-8">
                <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-gold mb-2">Details (Optional)</h3>
                <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-ivory/10 py-4 font-fancy text-xs tracking-widest uppercase focus:outline-none focus:border-gold transition-colors placeholder:opacity-20" />
                <input type="text" placeholder="SANCTUM ADDRESS" className="w-full bg-transparent border-b border-ivory/10 py-4 font-fancy text-xs tracking-widest uppercase focus:outline-none focus:border-gold transition-colors placeholder:opacity-20" />
              </section>

              <button 
                onClick={handlePay}
                disabled={isPaying}
                className="btn-cathedral w-full group flex items-center justify-center gap-4"
              >
                {isPaying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    CONSECRATING...
                  </>
                ) : (
                  <>
                    COMPLETE OFFERING — ${totalPrice.toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Summary Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-cathedral p-10 sm:p-12 rounded-[2rem] h-fit"
          >
            <h3 className="font-fancy text-xs uppercase tracking-[0.4em] text-gold mb-12">The Selection</h3>
            <div className="space-y-8 mb-12">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center group">
                  <div>
                    <h4 className="font-fancy text-lg text-ivory group-hover:text-gold transition-colors">{item.name}</h4>
                    <p className="text-xs text-ivory/40 uppercase tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-fancy text-lg text-gold">${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-gold/10 space-y-4">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-ivory/30">
                <span>Sanctuary Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-2xl font-fancy text-gold">
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
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-[100] flex items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full"
            >
              <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <CheckCircle2 className="w-12 h-12 text-gold" />
              </div>
              <h2 className="font-gothic text-5xl text-ivory mb-6 uppercase tracking-wider">DIVinely <span className="text-gold italic">BREWED.</span></h2>
              <p className="text-ivory/40 uppercase tracking-[0.3em] text-xs leading-loose mb-12">
                Your offering has been consecrated. <br />
                Redirecting to home...
              </p>
              <div className="w-16 h-[2px] bg-gold/10 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                  className="h-full bg-gold shadow-[0_0_10px_#D4AF37]"
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
