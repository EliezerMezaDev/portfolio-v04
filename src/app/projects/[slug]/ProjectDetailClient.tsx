"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import BlurImage from "@public/image/placeholder/blur.jpg"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Project, ImageType } from "@lib/types"
import { Android } from "@components/ui/android"
import { Desktop } from "@components/ui/desktop"

interface ProjectWithTechNames extends Project {
  techNames: string[]
}

function ProjectImage({
  src,
  type,
  alt,
  index,
}: {
  src: string
  type?: ImageType
  alt: string
  index: number
}) {
  const [loaded, setLoaded] = useState(false)

  if (type === "android") {
    return (
      <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-dark bg-dark">
        <div className="bg-base absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg"></div>
        <div className="bg-base absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg"></div>
        <div className="bg-base absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg"></div>
        <div className="bg-base absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg"></div>
        <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-dark">
          <Image
            src={src}
            alt={alt}
            fill
            placeholder="blur"
            blurDataURL={BlurImage.src}
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    )
  }

  if (type === "desktop") {
    return (
      <div className="relative mx-auto mb-5 flex w-full max-w-7xl items-center justify-center">
        <Desktop
          src={src}
          className={loaded ? "" : "opacity-0"}
          onLoad={() => setLoaded(true)}
        />
      </div>
    )
  }

  return (
    <div className="relative mx-auto mb-5 w-full max-w-7xl">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded bg-neutral-300" />
      )}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={`h-auto w-full object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        placeholder="blur"
        blurDataURL={BlurImage.src}
        loading={index === 0 ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    if (
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
      setIsAtBottom(true)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsAtBottom(false)
    }
  }

  return (
    <div className="fixed right-0 bottom-5 left-0 flex items-center justify-center md:mb-10">
      <motion.div
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-3hite text-2xl"
        />
      </motion.div>
    </div>
  )
}

interface ProjectDetailClientProps {
  project: ProjectWithTechNames
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const router = useRouter()

  return (
    <div className="relative mb-10 flex min-h-screen w-full flex-col items-center justify-center gap-4 p-10">
      <button
        onClick={() => router.back()}
        className="fixed top-2 -left-2 z-50 flex items-center justify-center rounded-full p-4 transition duration-300 ease-in-out md:left-10"
        aria-label="Go back"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="pr-10 text-black" />
      </button>
      <ScrollDownButton />

      <div className="flex min-h-screen flex-col items-start justify-center">
        <div className="flex w-full flex-col items-start max-sm:gap-4 md:grid md:grid-cols-[1fr_1fr_100px]">
          <div className="flex flex-col items-start justify-center space-y-4 sm:min-h-0 md:space-y-10">
            <div className="">
              <p className="text-xs tracking-[8px] text-dark uppercase">
                Proyecto
              </p>
              <h1 className="text-5xl font-bold text-main md:mb-2 md:text-7xl">
                {project.title}
              </h1>
            </div>

            <div>
              <p className="text-xs tracking-[8px] text-dark uppercase">Rol</p>
              <h2 className="text-2xl text-darken lg:text-3xl">
                {project.role}
              </h2>
            </div>
            <div>
              <p className="text-xs tracking-[8px] text-dark uppercase">
                Stack
              </p>
              <h2 className="text-2xl text-darken lg:text-3xl">
                {project.techNames.join(", ")}
              </h2>
            </div>
            <div>
              <p className="text-xs tracking-[8px] text-dark uppercase">
                Fecha
              </p>
              <h2 className="text-2xl text-darken lg:text-3xl">
                {project.date}
              </h2>
            </div>
            {(project.preview || project.code) && (
              <div>
                <p className="text-xs tracking-[8px] text-dark uppercase">
                  Enlances
                </p>
                <div className="flex gap-6">
                  {project.preview && (
                    <p className="text-2xl text-darken lg:text-3xl">
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Preview{" "}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </p>
                  )}
                  {project.code && (
                    <p className="text-2xl text-darken lg:text-3xl">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="hidden text-base tracking-[8px] text-dark uppercase md:block">
              Descripcion
            </h2>
            <div className="prose text-justify tracking-wide text-light-5">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full grid-cols-1 md:p-20">
        <div className="flex h-auto w-full flex-col justify-center text-center">
          {project.images.map((image, index) => (
            <ProjectImage
              key={index}
              src={image.src}
              type={image.type}
              alt={`Project Image ${index + 1}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
