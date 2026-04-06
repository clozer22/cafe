"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Coffee, Menu, X, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, cartCount, removeFromCart, totalPrice } = useCart();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="container mx-auto flex items-center justify-between glass-coffee px-4 sm:px-8 py-4 rounded-2xl relative z-50">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-espresso rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform border border-mocha/20">
            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-mocha" />
          </div>
          <span className="font-fancy text-xl sm:text-2xl tracking-tighter text-cream truncate max-w-[120px] sm:max-w-none">Velvet <span className="text-mocha italic">Brew</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-fancy text-sm tracking-widest uppercase">
          <Link href="/" className="hover:text-mocha transition-colors text-cream/70">Origins</Link>
          <Link href="/menu" className="hover:text-mocha transition-colors text-cream/70">The Menu</Link>
          <Link href="/booking" className="hover:text-mocha transition-colors text-cream/70">Reservations</Link>
          <Link href="#contact" className="hover:text-mocha transition-colors text-cream/70">Visit Us</Link>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-cream hover:text-mocha transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-mocha text-espresso text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="md:hidden text-cream"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-fancy text-3xl">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)}><X className="w-8 h-8" /></button>
              </div>

              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <Coffee className="w-16 h-16 text-mocha/20 mb-6" />
                  <p className="font-fancy text-espresso/40 tracking-widest uppercase text-sm">Your cup is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto space-y-8 pr-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center group">
                        <div>
                          <h4 className="font-fancy text-xl">{item.name}</h4>
                          <p className="text-sm text-espresso/40 uppercase tracking-widest">{item.price} × {item.quantity}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-espresso/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-espresso/5 mt-8">
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-fancy text-espresso/40 uppercase tracking-[0.2em]">Subtotal</span>
                      <span className="font-fancy text-2xl">${totalPrice.toFixed(2)}</span>
                    </div>
                    <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                      <button className="btn-cozy w-full group">
                        Checkout Now
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 mt-4 glass-coffee rounded-3xl p-8 md:hidden overflow-hidden z-40"
          >
            <div className="flex flex-col gap-6 font-fancy text-lg tracking-widest text-center uppercase text-cream/70">
              <Link href="/" onClick={() => setIsOpen(false)}>Origins</Link>
              <Link href="/menu" onClick={() => setIsOpen(false)}>The Menu</Link>
              <Link href="/booking" onClick={() => setIsOpen(false)}>Reservations</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Visit Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
