import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";

import type { Metadata } from "next";
import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EaMZ | Frontend Developer",
  description: "Desarrollador Frontend & Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${redHatDisplay.variable} ${redHatText.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
