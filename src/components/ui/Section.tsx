"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string; // Útil para navegación por anclas
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // Propiedades base para el Scroll Snap
        "h-screen w-full snap-start snap-always",
        // Flexbox para centrar contenido por defecto
        "flex flex-col items-center justify-center p-8 relative overflow-hidden",
        className,
      )}
    >
      {/* Animación de entrada del contenido al hacer scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }} // amount: cuánto de la sección se ve para activar
        className="w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
