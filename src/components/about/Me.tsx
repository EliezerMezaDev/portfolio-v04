import Image from "next/image";
import { motion } from "framer-motion";
import Me_Main from "@public/image/portrait.webp";
import Me_Sec from "@public/image/me1.jpg";
import Me_Ter from "@public/image/me4.jpg";
import Title from "./title";

export default function Me() {
  return (
    <section>
      <Title title="Sobre mí" isMain={true} />

      <div className="relative mx-auto gap-16 md:gap-4 xl:gap-8 grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Images */}
        <div className="flex justify-center items-start flex-col">
          <div className="images relative w-full aspect-square md:h-full lg:aspect-square">
            {/* Main Image */}
            <div className="absolute top-24 md:top-36 lg:top-24 right-2 md:right-4 lg:right-8 xl:right-12 w-[65%] md:w-[70%] lg:w-[55%] aspect-square transition-all ease duration-300 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={Me_Main}
                  alt="EaMZ"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-6 md:top-12 left-8 md:left-0 lg:left-18 xl:left-24 w-[40%]  lg:w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={Me_Sec}
                  alt="EaMZ"
                  fill
                  sizes="(max-width: 768px) 60vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-0 md:bottom-10 lg:bottom-20 xl:bottom-30 lg:left-4 xl:left-8 w-[40%] md:w-[60%] lg:w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={Me_Ter}
                  alt="EaMZ"
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side - Info */}
        <motion.div
          className="lg:pt-12 flex justify-start items-start flex-col"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,

            type: "spring",
          }}
        >
          <h2 className="text-2xl text-black font-bold tracking-wider mb-3">
            Eliezer A Meza
          </h2>
          <p className="text-light-5 text-justify title text-lg leading-relaxed">
            Soy un <b>Ingeniero de Software Full-Stack</b> con más de 5 años de
            trayectoria profesional. Me especializo en diseñar arquitecturas
            altamente escalables y soluciones híbridas modernas, manteniendo un
            enfoque crítico en la <b>seguridad transaccional</b>, el alto
            rendimiento del sistema y la optimización continua de procesos
            empresariales complejos.
            <br />
            <br />
            A lo largo de mi carrera, he participado y liderado el ciclo de vida
            de sistemas de alto impacto, incluyendo plataformas de e-commerce
            masivas, sistemas ERP robustos y plataformas de trading
            especializadas, logrando mejoras de eficiencia de hasta un 60% en
            los flujos operativos de diversos clientes.
            <br />
            <br />
            Actualmente, centro mis esfuerzos en proyectos que exploran la
            intersección estratégica entre los procesos de negocio tradicionales
            y la <b>IA</b>, desarrollando interfaces interactivas avanzadas con
            flujos conversacionales en tiempo real específicamente para la
            industria de viajes y hotelería.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
