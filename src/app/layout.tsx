import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EaMZ | Frontend Developer",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
