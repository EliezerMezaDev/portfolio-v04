'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "h-screen w-full snap-start snap-always",
        "flex flex-col items-center justify-center relative overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full relative" 
      >
        {children}
      </motion.div>
    </section>
  )
}