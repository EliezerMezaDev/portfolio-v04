import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import Hr from "./Hr";

export default function Hero({
  title,
  desc,
  coverImg,
}: {
  title: string;
  desc: string;
  coverImg: StaticImageData;
}) {
  return (
    // <div className="md:h-screen relative w-screen max gap-4 md:p-10 flex flex-col-reverse md:grid md:grid-cols-[1fr_125px] lg:grid-cols-[1fr_200px] xl:grid-cols-[1fr_400px] mb-10 overflow-hidden">
    //   <div className="z-10 max-sm:px-4 max-sm:-translate-y-18 w-full flex flex-col justify-center items-start md:items-start text-start">
    //     <motion.h1
    //       className="py-1 px-2 mb-2 md:mb-5 text-5xl md:text-7xl bg-light lg:bg-transparent bg-opacity-50 text-main font-bold"
    //       initial={{ x: -100, opacity: 0 }}
    //       whileInView={{ x: 0, opacity: 1 }}
    //       transition={{
    //         delay: 0.1,
    //         type: "spring",
    //       }}
    //     >
    //       {title}
    //     </motion.h1>

    //     <Hr />
    //     <p className="py-1 px-2 text-xl mt-4 tracking-wider bg-light lg:bg-transparent bg-opacity-50 leading-[1.7rem] mb-5">
    //       {desc}
    //     </p>

    //     <motion.div
    //       className="hidden lg:absolute bottom-8 left-1/2 -translate-x-1/2 z-30 lg:flex flex-col items-center gap-3"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
    //       exit={{ opacity: 0, transition: { duration: 0.4 } }}
    //     >
    //       <span className="text-[10px] uppercase tracking-[4px] text-light-4 font-medium">
    //         Scroll
    //       </span>
    //       <motion.div
    //         className="w-[1.5px] h-14 bg-accent origin-top"
    //         animate={{
    //           scaleY: [0, 1, 1],
    //           opacity: [0, 1, 0],
    //         }}
    //         transition={{
    //           duration: 2,
    //           repeat: Infinity,
    //           ease: "easeInOut",
    //           times: [0, 0.5, 1],
    //         }}
    //       />
    //     </motion.div>
    //   </div>
    //   <div className="max-md:h-[75dvh]  overflow-hidden">
    //     <motion.div
    //       initial={{ scale: 1 }}
    //       animate={{ scale: 1.6 }}
    //       transition={{ duration: 1, ease: "circOut" }}
    //       className="absolute top-0 right-0 bg-slate-300 rounded-sm w-[200px]  grayscale hover:grayscale-0   "
    //     >
    //       <Image
    //         src={coverImg}
    //         alt="EaMZ"
    //         fill
    //         placeholder="blur"
    //         className="object-cover "
    //       />
    //     </motion.div>
    //   </div>
    // </div>

    <div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
      <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.6 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
        >
          <Image
            src={coverImg}
            alt="EaMZ"
            fill
            placeholder="blur"
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 30vw"
          />
        </motion.div>
      </div>
      <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
        <motion.h1
          className="py-1 px-2 mb-2 md:mb-5 text-5xl md:text-7xl bg-light lg:bg-transparent bg-opacity-50 text-main font-bold"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
          }}
        >
          {title}
        </motion.h1>
        <Hr />
        <p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
          {desc}
        </p>

        <motion.div
          className="hidden lg:absolute bottom-0 right-1/2 translate-x-1/2 translate-y-10 z-30 lg:flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-[10px] uppercase tracking-[4px] text-light-4 font-medium">
            Scroll
          </span>
          <motion.div
            className="w-[1.5px] h-14 bg-accent origin-top"
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
      </div>
    </div>
  );
}
