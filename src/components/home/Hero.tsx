"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { CodeEffect } from "@/components/ui/CodeEffect";

import { getDictionary } from "@/lib/dictionary";
type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

interface HeroProps {
  dict: Dictionary;
}

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Hero({ dict }: HeroProps) {
  const { hero, personal_info } = dict;

  return (
    <Section
      id="home"
      className="p-0 flex items-center justify-center overflow-hidden relative bg-base-dark"
    >
      <div className="absolute right-0 top-0 h-full w-auto aspect-square z-0 hidden md:block">
        <Image
          src={personal_info.profile_image}
          alt={personal_info.name}
          fill
          priority
          className="object-contain"
        />

        <div className="absolute inset-0 bg-linear-to-r from-base-dark via-base-dark/90 to-base-dark/80 via-25% to-50%" />
      </div>

      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={personal_info.profile_image}
          alt={personal_info.name}
          fill
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-t from-base-dark via-base-dark/80 to-transparent" />
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl w-fit flex flex-col"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono font-semibold text-light-4 text-lg xl:text-xl 2xl:text-2xl"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-light"
          >
            {personal_info.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="mt-1 mb-8 text-end">
            <CodeEffect
              className="md:text-2xl lg:text-3xl xl:text-4xl text-accent font-bold"
              symbolClassName="text-light-4 font-mono"
            >
              {personal_info.role}
            </CodeEffect>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex justify-end md:justify-start"
          >
            <Link
              href="#projects"
              className="inline-block px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 font-medium font-mono text-sm md:text-base"
            >
              {hero.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
