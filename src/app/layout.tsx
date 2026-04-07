import type { Metadata } from "next";
import { Inter, Cinzel, Pirata_One, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const pirata = Pirata_One({ weight: "400", subsets: ["latin"], variable: "--font-pirata" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "The Roasted Bean | Sacred Coffee Rituals",
  description: "Experience the divine blend of history and artisanal coffee at The Roasted Bean.",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${pirata.variable} ${montserrat.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-charcoal text-ivory antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
