import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@components/ui/Button";
import Hr from "@components/ui/Hr";

// images
import Intervyou1 from "@public/placeholder.jpg";
import Intervyou2 from "@public/placeholder.jpg";
import Intervyou3 from "@public/placeholder.jpg";

const Hightlight = () => {
  return (
    <>
      <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <Hr variant="long"></Hr>
          <h1 className="text-3xl font-bold mt-3">Highlight</h1>
        </div>
      </div>
      <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="relative w-full h-full shadow-lg"
              >
                <Image
                  src={Intervyou1}
                  alt="EaMZ"
                  fill
                  placeholder="blur"
                  className="rat object-cover"
                  sizes="50vw"
                />
              </motion.div>
            </div>
            <div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
                className="relative w-full h-full shadow-lg "
              >
                <Image
                  src={Intervyou3}
                  alt="EaMZ"
                  fill
                  placeholder="blur"
                  className="object-cover"
                  style={{ objectPosition: "0% 0%" }}
                  sizes="40vw"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
                className="relative w-full h-full shadow-lg"
              >
                <Image
                  src={Intervyou2}
                  alt="EaMZ"
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="40vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
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
          <h2 className="text-2xl font-bold tracking-wider mb-3">
            Lorem
          </h2>
          <p className="text-gray-600 text-justify title text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>{" "}
          <div className="mt-3">
            <Button variation="primary">
              <Link href="projects/intervyou">More</Link>
            </Button>
            <Button variation="secondary">
              <a
                href="https://www.intervyou.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hightlight;
