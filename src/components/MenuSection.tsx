"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Plus, Check, Cross } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    category: "The Sanctum Brews",
    items: [
      { id: "sb1", name: "Cathedral Latte", desc: "Sacred blend with Madagascar vanilla and gold dust", price: "$6.50" },
      { id: "sb2", name: "Vatican Cold Brew", desc: "18-hour steep with divine spice notes", price: "$5.75" },
      { id: "sb3", name: "Gothic Mocha", desc: "70% dark cacao, espresso, and velvet oat milk", price: "$6.25" }
    ]
  },
  {
    category: "Vesper Rituals",
    items: [
      { id: "ab1", name: "Golden Croissant", desc: "Double-baked with honey glaze and almond crust", price: "$4.50" },
      { id: "ab2", name: "Sacred Cacao Tart", desc: "Sea salt caramel and dark chocolate ganache", price: "$5.25" },
      { id: "ab3", name: "Avocado Benedict", desc: "Sourdough, poached eggs, and liturgical herbs", price: "$12.00" }
    ]
  }
];

export default function MenuSection() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: any) => {
    addToCart({ id: item.id, name: item.name, price: item.price });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden" id="menu">
      {/* Subtle Background Filigree */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold/30" />
            <Cross className="w-4 h-4 text-gold rotate-45" />
            <div className="h-[1px] w-12 bg-gold/30" />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-fancy text-2xl mb-4 block tracking-[0.3em] uppercase"
          >
            The Collection
          </motion.span>
          <h2 className="font-gothic text-5xl md:text-7xl text-ivory tracking-wider uppercase">
            SACRED <span className="text-gold italic">FLAVORS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {menuItems.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-fancy text-xs uppercase tracking-[0.5em] text-gold mb-12 border-b border-gold/10 pb-4">
                {section.category}
              </h3>
              
              <div className="space-y-12">
                {section.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start group cursor-default">
                    <div className="max-w-xs">
                      <h4 className="font-fancy text-2xl mb-2 text-ivory group-hover:text-gold transition-colors duration-500">
                        {item.name}
                      </h4>
                      <p className="text-ivory/40 text-sm font-light leading-relaxed tracking-wider uppercase">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-4">
                      <span className="font-fancy text-xl text-gold">{item.price}</span>
                      <button 
                        onClick={() => handleAdd(item)}
                        className="btn-cathedral !px-6 !py-3 !text-[10px]"
                      >
                        <AnimatePresence mode="wait">
                          {addedId === item.id ? (
                            <motion.div
                              key="check"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                            >
                              <Check className="w-4 h-4 text-charcoal" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="plus"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <Plus className="w-4 h-4" />
                              <span>Order</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
