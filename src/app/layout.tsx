import {
  Montserrat,
  Poppins,
} from "next/font/google";

import type { Metadata } from "next";
import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
