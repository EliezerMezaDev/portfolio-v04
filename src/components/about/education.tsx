import Image from "next/image";

import { motion } from "framer-motion";
import Me4 from "@public/image/me4.jpg";
import Me5 from "@public/image/me5.jpg";
import Me6 from "@public/image/me6.jpg";

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {" "}
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Formación académica
          </h1>          
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1">
          <motion.div
            className="px-5"
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
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  blanditiis tempora nihil nobis? Eligendi in repellat quod odit
                  delectus hic perferendis minima tempore? A distinctio et dolor
                  illum ratione magni ad nam saepe nostrum in odit, soluta esse
                  ex voluptas mollitia iste, voluptate, nobis quis accusamus.
                  Cumque expedita nesciunt quod.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
