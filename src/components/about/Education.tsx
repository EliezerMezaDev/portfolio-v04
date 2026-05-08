import Image from "next/image"

import { motion } from "framer-motion"

import Me4 from "@public/image/me4.webp"
import Me5 from "@public/image/me5.webp"
import Me6 from "@public/image/me6.webp"

import Title from "./title"

export default function Education() {
  return (
    <section>
      <Title title="Formación académica" isMain={false} />

      <div className="grid gap-8 md:gap-12 md:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1">
          <motion.div
            className="md:px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 text-lg font-medium">2018 - 2023</div>
            <div>
              <h2 className="text-xl font-semibold">
                Universidad de Margarita
              </h2>
              <h3 className="text-md mb-3 font-normal">
                Ingeniería de sistemas
              </h3>
              <div className="mb-4 flex items-stretch gap-4 md:h-[300px] xl:h-[400px]">
                <div className="group flex-[1] transition-all duration-300 ease-in-out">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="University"
                    className="h-full w-full rounded-lg object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                  />
                </div>
                <div className="group flex-[1] transition-all duration-300 ease-in-out">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="University"
                    className="h-full w-full rounded-lg object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                  />
                </div>
                <div className="group flex-[1] transition-all duration-300 ease-in-out">
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="University"
                    className="h-full w-full rounded-lg object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="title text-justify text-lg text-gray-600">
                  Cursé mis estudios de Ingeniería en Sistemas en la Universidad
                  de Margarita (UNIMAR), donde obtuve una formación integral en
                  desarrollo de software. Para mi proyecto de grado, desarrollé
                  una plataforma web para la gestión de inventarios para la
                  empresa Spartan Techs C.A., en donde ya trabajaba en ese
                  entonces, implementando funcionalidades como levantamiento de
                  tickes, asignación de recursos y rutas de servicio, y
                  generación de reportes, dando solución a problemas internos de
                  la empresa; proyecto por el cual obtuve una mención
                  sobresaliente y la habilitación para continuar estudios de
                  posgrado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
