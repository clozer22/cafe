"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Plus, Check } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    category: "Signature Brews",
    items: [
      { id: "sb1", name: "Velvet Latte", desc: "Espresso with steamed milk and Madagascar vanilla", price: "$6.50" },
      { id: "sb2", name: "Copper Cold Brew", desc: "18-hour steep with hint of cinnamon", price: "$5.75" },
      { id: "sb3", name: "Mocha Silk", desc: "Dark chocolate, espresso, and oat milk", price: "$6.25" }
    ]
  },
  {
    category: "Artisanal Bites",
    items: [
      { id: "ab1", name: "Copper Croissant", desc: "Double-baked almond and honey glaze", price: "$4.50" },
      { id: "ab2", name: "Cacao Tart", desc: "Sea salt caramel and dark chocolate", price: "$5.25" },
      { id: "ab3", name: "Avocado Ritual", desc: "Sourdough, dukkah, and chili flakes", price: "$12.00" }
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
    <section className="py-32 bg-cream" id="menu">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-mocha font-fancy text-3xl mb-4 block"
          >
            The Collection
          </motion.span>
          <h2 className="font-fancy text-5xl md:text-7xl uppercase tracking-tighter">CRAFTED WITH <span className="italic text-mocha">PASSION.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {menuItems.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-fancy text-xs uppercase tracking-[0.5em] text-mocha mb-12 border-b border-mocha/10 pb-4">{section.category}</h3>
              <div className="space-y-12">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start group cursor-default">
                    <div className="max-w-xs">
                      <h4 className="font-fancy text-2xl mb-2 group-hover:text-mocha transition-colors">{item.name}</h4>
                      <p className="text-espresso/40 text-sm font-light leading-relaxed tracking-wider uppercase">{item.desc}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <span className="font-fancy text-xl text-espresso/60">{item.price}</span>
                      <button 
                        onClick={() => handleAdd(item)}
                        className="w-10 h-10 rounded-full border border-espresso/10 flex items-center justify-center hover:bg-espresso hover:text-cream transition-all group-hover:border-mocha/40 group-hover:translate-y-[-2px] shadow-sm relative overflow-hidden"
                      >
                        <AnimatePresence mode="wait">
                          {addedId === item.id ? (
                            <motion.div
                              key="check"
                              initial={{ y: 20 }}
                              animate={{ y: 0 }}
                              exit={{ y: -20 }}
                            >
                              <Check className="w-5 h-5 text-mocha" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="plus"
                              initial={{ y: 20 }}
                              animate={{ y: 0 }}
                              exit={{ y: -20 }}
                            >
                              <Plus className="w-5 h-5" />
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
