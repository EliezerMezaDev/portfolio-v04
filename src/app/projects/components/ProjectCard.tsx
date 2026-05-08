import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import BlurImage from "@public/image/placeholder/blur.jpg"

export default function ProjectCard({
  project,
  index,
  activeCategory,
}: {
  project: any
  index: number
  activeCategory: any
}) {
  return (
    <>
      {project.category.includes(parseInt(activeCategory)) && (
        <Link href={"projects/" + project.slug} key={index}>
          <motion.div
            className="group/tes relative z-10 mb-5 flex aspect-video h-auto w-full flex-col items-start justify-center bg-gray-400 px-5 py-20 md:px-10 md:py-2"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
            }}
          >
            <Image
              src={project.thumbnail}
              alt="EaMZ"
              fill
              placeholder="blur"
              className="ease bg-slate-950 object-cover opacity-10 transition-all duration-500 group-hover/tes:opacity-100"
              blurDataURL={BlurImage.src}
            />
            <div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
              <h4 className="text-white">{project.year}</h4>
            </div>
            <div className="ease content z-10 text-center opacity-100 transition-all duration-500 group-hover/tes:opacity-0">
              <h1 className="mb-3 text-3xl font-bold">{project.title}</h1>
              <p>
                {project.desc[0].length > 125
                  ? `${project.desc[0].slice(0, 125)}...`
                  : project.desc[0]}
              </p>
              <div className="mt-5 flex flex-row flex-wrap items-center justify-center">
                {project.tech.map((t: string, index: number) => (
                  <span
                    key={index}
                    className="m-1 bg-gray-600 px-4 py-2 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      )}
    </>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}
