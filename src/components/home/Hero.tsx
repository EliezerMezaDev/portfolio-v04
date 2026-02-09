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
      className="p-0 flex items-center justify-between overflow-hidden relative "
    >
      <div className="relative z-20 mx-auto h-full flex flex-col-reverse lg:flex-row items-start justify-between gap-16 md:gap-24">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-fit flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="hidden md:flex font-semibold text-main text-xl xl:text-2xl 2xl:text-3xl"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-montserrat! text-4xl md:text-6xl lg:text-8xl font-black text-light tracking-tight"
          >
            {personal_info.name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="max-md:mt-1 mb-8 md:mb-16"
          >
            <CodeEffect
              className="text-xl md:text-3xl text-accent font-medium"
              symbolClassName="text-light-4"
            >
              {personal_info.role}
            </CodeEffect>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-end gap-2 md:justify-start"
          >
            <Link href="#projects" className="button --alt">
              {hero.cta_2}
            </Link>
            <Link href="#projects" className="button">
              {hero.cta_1}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-fit flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-60 lg:w-80 xl:w-96 aspect-square z-10">
            <div className="relative w-full h-full bg-linear-to-r from-accent-dark to-accent rounded-full overflow-hidden">
              <Image
                src={personal_info.profile_image}
                alt={personal_info.name}
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-base/20 mix-blend-overlay z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
