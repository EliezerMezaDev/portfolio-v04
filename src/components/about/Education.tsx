import Image from "next/image";

import { motion } from "framer-motion";

import Me4 from "@public/image/me4.jpg";
import Me5 from "@public/image/me5.jpg";
import Me6 from "@public/image/me6.jpg";

import Title from "./title";

export default function Education() {
  return (
    <section>
      <Title title="Formación académica" isMain={false} />

      <div className="md:px-8 grid gap-8 md:gap-12">
        {/* Main Content */}
        <div className="grid grid-cols-1">
          <motion.div
            className="md:px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-medium text-lg mb-4">2018 - 2023</div>
            <div>
              <h2 className="font-semibold text-xl">
                Universidad de Margarita
              </h2>
              <h3 className="text-md font-normal mb-3">
                Ingeniería de sistemas
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out  group">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out  group">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out  group">
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
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
  );
}
