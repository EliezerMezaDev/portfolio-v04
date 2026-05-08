import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Button from "@components/ui/Button"
import Hr from "@components/ui/Hr"

// images
import Intervyou1 from "@public/placeholder.jpg"
import Intervyou2 from "@public/placeholder.jpg"
import Intervyou3 from "@public/placeholder.jpg"

const Hightlight = () => {
  return (
    <>
      <div className="mt-10 flex w-full flex-col items-center justify-start pl-10 md:pl-32">
        <div className="my-5 flex flex-col items-center justify-center self-start">
          <Hr variant="long"></Hr>
          <h1 className="mt-3 text-3xl font-bold">Highlight</h1>
        </div>
      </div>
      <div className="relative container mx-auto mb-10 grid w-screen grid-cols-1 gap-4 px-10 md:grid-cols-2">
        <div className="mb-5 flex flex-col items-start justify-center">
          <div className="images relative aspect-square w-full">
            <div className="ease absolute top-28 left-10 z-10 aspect-video h-[40%] grayscale transition-all duration-300 hover:scale-150 hover:grayscale-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="relative h-full w-full shadow-lg"
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
            <div className="ease absolute top-10 right-28 aspect-video h-[30%] grayscale transition-all duration-300 hover:scale-150 hover:grayscale-0">
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
                className="relative h-full w-full shadow-lg"
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
            <div className="ease absolute right-20 bottom-10 aspect-video h-[35%] grayscale transition-all duration-300 hover:scale-150 hover:grayscale-0 md:bottom-26">
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
                className="relative h-full w-full shadow-lg"
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
          className="mb-5 flex flex-col items-start justify-center md:px-10"
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
          <h2 className="mb-3 text-2xl font-bold tracking-wider">Lorem</h2>
          <p className="title text-justify text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
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
  )
}

export default Hightlight
