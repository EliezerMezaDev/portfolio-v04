"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  FullPageWrapper,
  Section,
  useFullPage,
} from "@alvalens/react-fullpage-snap"

// components
import Button from "@components/ui/Button"
import Me from "@public/image/portrait-long.webp"
import MeAbout from "@public/image/me1.webp"
import Setup from "@public/image/setup.webp"
import ProjectAll from "@public/image/projects.webp"
import Hr from "@components/ui/Hr"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const ScrollIndicator = () => {
  const { activeIndex } = useFullPage()
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (activeIndex !== 0) setDismissed(true)
  }, [activeIndex])

  return (
    <AnimatePresence>
      {activeIndex === 0 && !dismissed && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-[10px] font-medium tracking-[4px] text-light-5 uppercase">
            Scroll
          </span>
          <motion.div
            className="h-14 w-[1.5px] origin-top bg-accent"
            animate={{
              scaleY: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const PageContentSection = ({
  image,
  title,
  buttons,
  content,
}: {
  image: StaticImageData
  title: string
  content: React.ReactNode
  buttons: React.ReactNode
}) => {
  return (
    <Section>
      <div className="relative flex w-screen flex-col items-center justify-center gap-4 overflow-hidden md:h-screen">
        <div className="z-0 mb-48 md:absolute md:top-1/2 md:right-[10%] md:mb-0 md:-translate-y-1/2">
          <motion.div
            className="relative h-[400px] w-[80vw] rounded-sm bg-light grayscale hover:grayscale-0 md:h-[60vh] md:w-[30vw]"
            initial={{
              x: 300,
              opacity: 0,
              z: -100,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              z: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image
              src={image}
              fill
              sizes="(max-width: 768px) 80vw, 30vw"
              className="object-cover"
              alt="EaMZ"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="absolute top-[60%] z-10 col-span-2 flex w-full flex-col items-start justify-center px-10 py-5 text-start md:top-1/3 md:left-[10%] md:w-auto md:items-start">
          <motion.h2
            className="bg-opacity-50 mb-2 bg-light-2 text-5xl font-bold text-main max-md:p-2 md:text-7xl lg:bg-transparent lg:text-8xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
            }}
          >
            {title}
          </motion.h2>

          <Hr />
          <motion.p
            className="title mt-2 mb-4 text-xl leading-[1.7rem] tracking-wider text-light-5 lg:mt-4 lg:mb-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            {content}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            {buttons}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default function RootPage() {
  return (
    <>
      <FullPageWrapper>
        <Section>
          <div className="grid w-[86%] max-w-screen-2xl grid-cols-1 gap-4 overflow-hidden p-4 md:grid-cols-3 md:p-10">
            <motion.div
              className="col-span-2 flex flex-col items-center justify-center text-center md:items-start md:text-start"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              <div className="col-span-1 mx-auto my-10 block md:hidden">
                <div className="ease h-60 w-60 rounded-full bg-slate-500 transition-all duration-300">
                  <Image
                    src={Me}
                    width={500}
                    height={500}
                    className="h-full w-full rounded-full object-cover"
                    alt="EaMZ"
                    placeholder="blur"
                  />
                </div>
              </div>
              <motion.h3
                className="text mb-3 text-2xl font-normal tracking-[.5rem] text-dark uppercase"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                }}
              >
                Eliezer A Meza
              </motion.h3>

              <motion.h1
                className="text-5xl font-bold text-main md:mb-2 md:text-7xl lg:text-8xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                }}
              >
                Frontend Engineer
              </motion.h1>

              <motion.p
                className="title text-md mt-4 leading-[1.7rem] tracking-wider text-light-5 2xl:text-xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                }}
              >
                Ingeniero de Software Frontend con +5 años de experiencia
                diseñando arquitecturas escalables y aplicaciones híbridas.
                Especializado en el sector Fintech, enfocado en optimizar el
                rendimiento y la seguridad en sistemas transaccionales.
              </motion.p>
              <motion.div
                className="buttons mt-4 flex flex-row items-center justify-center space-x-4 lg:mt-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                }}
              >
                <Button variation="primary">
                  <Link
                    href={"/docs/cv.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Descargar CV
                  </Link>
                </Button>
                <Button variation="secondary">
                  <a href="#contact">Contáctame</a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-1 mx-auto hidden items-center justify-center md:flex"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                type: "spring",
              }}
            >
              <div className="ease h-auto w-auto max-w-[20vw] rounded-full transition-all duration-300">
                <Image
                  src={Me}
                  width={400}
                  height={550}
                  placeholder="blur"
                  alt="EaMZ"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Section>

        <PageContentSection
          image={MeAbout}
          title="Sobre mí"
          content={
            <>
              Una breve introducción a mi viaje{" "}
              <br className="hidden md:block lg:hidden" /> como desarrollador{" "}
              <br className="hidden lg:block xl:hidden" /> de software.
            </>
          }
          buttons={
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
              }}
            >
              <Button variation="primary">
                <Link href="/about">Saber más</Link>
              </Button>
            </motion.div>
          }
        />

        <PageContentSection
          image={ProjectAll}
          title="Proyectos"
          content={
            <>
              Algunos proyectos que he creado a lo largo{" "}
              <br className="hidden md:block lg:hidden" /> de los años{" "}
              <br className="hidden lg:block xl:hidden" /> y en los que{" "}
              <br className="hidden xl:block" /> estoy trabajando{" "}
              <br className="hidden md:block lg:hidden" /> actualmente.
            </>
          }
          buttons={
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
              }}
            >
              <Button variation="primary">
                <Link href="/projects">Ver más</Link>
              </Button>
            </motion.div>
          }
        />

        <PageContentSection
          image={Setup}
          title="Contacto"
          content={
            <>
              No dudes en contactarme si tienes alguna idea{" "}
              <br className="hidden md:block xl:hidden" /> o proyecto en mente.
            </>
          }
          buttons={
            <div className="flex items-center justify-center space-x-4">
              <motion.a
                href="https://wa.me/584122970632"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-main text-light transition-all duration-300 ease-in-out hover:scale-95"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  y: { delay: 0 },
                  opacity: { delay: 0.1 },
                }}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
              </motion.a>

              <motion.a
                href="mailto:eliezermeza.dev@gmail.com?subject=Hola&body=Hello Eliezer,"
                aria-label="Send email"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-main text-light transition-all duration-300 ease-in-out hover:scale-95"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  y: { delay: 0.1 },
                  opacity: { delay: 0.2 },
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://github.com/EliezerMezaDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-main text-light transition-all duration-300 ease-in-out hover:scale-95"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.2 },
                  opacity: { delay: 0.3 },
                }}
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/eliezer-a-meza-7a1b882b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-main text-light transition-all duration-300 ease-in-out hover:scale-95"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  y: { delay: 0.4 },
                  opacity: { delay: 0.5 },
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </motion.a>
            </div>
          }
        />

        <ScrollIndicator />
      </FullPageWrapper>
    </>
  )
}
