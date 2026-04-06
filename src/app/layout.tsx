import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Velvet Brew | Artisanal Coffee & Cozy Spaces",
  description: "Experience the perfect blend of luxury and comfort at Velvet Brew.",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F5F5DC] text-[#1B1212] antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
