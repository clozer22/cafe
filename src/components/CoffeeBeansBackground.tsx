"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import beanImg from "@/assets/coffee_bean.png";

const beans = [
  { id: 1, top: "10%", left: "5%", size: 60, delay: 0, rotate: 45 },
  { id: 2, top: "25%", left: "80%", size: 80, delay: 1, rotate: -20 },
  { id: 3, top: "45%", left: "12%", size: 50, delay: 0.5, rotate: 120 },
  { id: 4, top: "65%", left: "85%", size: 70, delay: 1.5, rotate: 10 },
  { id: 5, top: "80%", left: "15%", size: 90, delay: 2, rotate: -45 },
  { id: 6, top: "15%", left: "45%", size: 40, delay: 0.8, rotate: 90 },
  { id: 7, top: "85%", left: "65%", size: 55, delay: 1.2, rotate: 30 },
  { id: 8, top: "50%", left: "92%", size: 65, delay: 0.3, rotate: -110 },
  { id: 9, top: "35%", left: "55%", size: 45, delay: 1.8, rotate: 60 },
  { id: 10, top: "75%", left: "40%", size: 75, delay: 0.6, rotate: -15 },
];

export default function CoffeeBeansBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] mix-blend-multiply brightness-90 grayscale">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute"
          style={{
            top: bean.top,
            left: bean.left,
            width: bean.size,
            height: bean.size,
          }}
          initial={{ rotate: bean.rotate, y: 0 }}
          animate={{
            y: [0, 15, 0],
            rotate: [bean.rotate, bean.rotate + 10, bean.rotate],
          }}
          transition={{
            duration: 8 + bean.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bean.delay,
          }}
        >
          <Image
            src={beanImg}
            alt="Coffee Bean"
            width={bean.size}
            height={bean.size}
            className="w-full h-full object-contain filter grayscale"
          />
        </motion.div>
      ))}
    </div>
  );
}
