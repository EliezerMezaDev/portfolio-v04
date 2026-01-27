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

// ! USAR LUEGO
// const FloatingRhombus = ({
//   className,
//   delay = 0,
// }: {
//   className?: string;
//   delay?: number;
// }) => (
//   <motion.div
//     className={`absolute z-20 bg-linear-to-br from-base-light to-main ${className}`}
//     style={{
//       clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Forma de rombo
//     }}
//     animate={{
//       y: [0, -10, 0], // Movimiento de flotación
//       opacity: [1, 0.8, 1],
//     }}
//     transition={{
//       duration: 10,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: 0,
//     }}
//   />
// );

export default function Hero({ dict }: HeroProps) {
  const { hero, personal_info } = dict;

  return (
    <Section
      id="home"
      className="p-0 flex items-center justify-center overflow-hidden relative bg-base-dark"
    >
      <div className="absolute right-0 top-0 h-full w-full z-0 hidden md:block bg-hexagon-patter">
        <div className="absolute inset-0 bg-linear-to-r from-base-dark from-25% to-base-dark/75" />
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-16">
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
          className="w-fit flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono font-semibold text-main text-xl xl:text-2xl 2xl:text-3xl"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1 variants={itemVariants} className="title --main">
            {personal_info.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="mb-16 self-end">
            <CodeEffect
              className="md:text-2xl lg:text-3xl xl:text-4xl text-accent font-bold"
              symbolClassName="text-light-4 font-mono"
            >
              {personal_info.role}
            </CodeEffect>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex justify-end gap-2 md:justify-start"
          >
            <Link href="#projects" className="button">
              {hero.cta_1}
            </Link>
            <Link href="#projects" className="button --alt">
              {hero.cta_2}
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
          <div className="relative w-64 md:w-80 lg:w-96 xl:w-md aspect-square z-10">
            <div className="relative w-full h-full bg-base border-2 border-base rounded-full overflow-hidden">
              <Image
                src={personal_info.profile_image}
                alt={personal_info.name}
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-base/30 mix-blend-overlay z-10" />

              <div className="absolute inset-0 bg-linear-to-r from-base-dark/50 to-base-dark/25 z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
