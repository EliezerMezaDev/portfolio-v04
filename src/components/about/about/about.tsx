import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@public/image/me4.jpg";
import Me2 from "@public/image/me1.jpg";
import Me3 from "@public/image/portrait.webp";
import Hr from "@components/ui/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-3xl font-bold mt-3">¿Quién soy?</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />

      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-start flex-col">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
                  src={Me1}
                  alt="EaMZ"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
                  src={Me2}
                  alt="EaMZ"
                  fill
                  sizes="(max-width: 768px) 60vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
                  src={Me3}
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
        <motion.div
          className="flex justify-center items-start flex-col -mt-25 md:px-10"
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
            I am a{" "}
            <span className="text-black font-medium">
              Product-Minded Software Engineer{" "}
            </span>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis officiis voluptates sint quisquam voluptas rem, praesentium aliquam ex tempore facilis. Error ipsam unde, impedit rem ullam dignissimos, optio enim fugit vitae facere, temporibus magnam ea veritatis libero sapiente! Est eveniet suscipit blanditiis, deserunt beatae neque rerum doloremque fuga impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis officiis voluptates sint quisquam voluptas rem, praesentium aliquam ex tempore facilis. Error ipsam unde, impedit rem ullam dignissimos, optio enim fugit vitae facere, temporibus magnam ea veritatis libero sapiente! Est eveniet suscipit blanditiis, deserunt beatae neque rerum doloremque fuga impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis officiis voluptates sint quisquam voluptas rem, praesentium aliquam ex tempore facilis. Error ipsam unde, impedit rem ullam dignissimos, optio enim fugit vitae facere, temporibus magnam ea veritatis libero sapiente! Est eveniet suscipit blanditiis, deserunt beatae neque rerum doloremque fuga impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis officiis voluptates sint quisquam voluptas rem, praesentium aliquam ex tempore facilis. Error ipsam unde, impedit rem ullam dignissimos, optio enim fugit vitae facere, temporibus magnam ea veritatis libero sapiente! Est eveniet suscipit blanditiis, deserunt beatae neque rerum doloremque fuga impedit.
          </p>
        </motion.div>
      </div>
    </>
  );
}
