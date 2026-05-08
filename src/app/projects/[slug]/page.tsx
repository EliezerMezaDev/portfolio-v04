"use client"
import { useState, useEffect, use, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import jsonData from "@data/projects.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import NotFound from "@app/not-found"
import Image from "next/image"
import BlurImage from "@public/image/placeholder/blur.jpg"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

function ProjectImage({
  src,
  alt,
  index,
}: {
  src: string
  alt: string
  index: number
}) {
  const [loaded, setLoaded] = useState(false)
  const handleLoad = useCallback(() => setLoaded(true), [])

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
        onLoad={handleLoad}
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
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
          className="text-2xl text-white"
        />
      </motion.div>
    </div>
  )
}

function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params)
  const router = useRouter()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const selectedData = jsonData.Projects.find(
      (item) => item.slug === params.slug
    )
    if (selectedData === undefined) {
      setData("404")
    } else {
      setData(selectedData)
    }
  }, [params.slug])

  if (data === "404") {
    return (
      <>
        <NotFound />
      </>
    )
  } else if (!data) {
    return (
      <div className="relative mb-10 flex min-h-screen w-full flex-col items-center justify-center gap-4 p-10">
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="mx-auto grid w-full grid-cols-1 md:grid-cols-2">
            <div className="w-ful mb-5 flex flex-col items-start justify-center space-y-10 p-4">
              <div className="h-20 w-full animate-pulse rounded bg-neutral-400 shadow-lg"></div>
              <div className="h-20 w-full animate-pulse rounded bg-neutral-400 shadow-lg"></div>
              <div className="h-20 w-full animate-pulse rounded bg-neutral-400 shadow-lg"></div>
              <div className="h-20 w-full animate-pulse rounded bg-neutral-400 shadow-lg"></div>
              <div className="h-20 w-full animate-pulse rounded bg-neutral-400 shadow-lg"></div>
            </div>
            <div className="mb-5 flex w-full flex-col items-start justify-start p-4">
              <div className="h-full w-full animate-pulse rounded bg-neutral-400 shadow-lg duration-500"></div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="mx-auto grid h-auto w-full grid-cols-1 p-5 md:p-20">
          <div className="aspect-video h-auto w-full">
            <div className="h-full w-full animate-pulse rounded bg-neutral-400 shadow-lg duration-500"></div>
          </div>
        </div>
      </div>
    )
  }
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
        <div className="mb-4 md:mb-10">
          <p className="text-base tracking-[8px] text-dark uppercase">
            Proyecto
          </p>
          <h1 className="text-5xl font-bold text-main md:mb-2 md:text-7xl">
            {data.title}
          </h1>
        </div>

        <div className="flex w-full flex-col-reverse max-sm:gap-4 md:grid md:grid-cols-2">
          <div className="flex flex-col items-start justify-center space-y-4 sm:min-h-0 md:space-y-10">
            <div>
              <p className="text-base tracking-[8px] text-dark uppercase">
                Stack
              </p>
              <h2 className="text-2xl text-darken">{data.tech.join(", ")}</h2>
            </div>
            <div>
              <p className="text-base tracking-[8px] text-dark uppercase">
                Fecha
              </p>
              <h2 className="text-2xl text-darken">{data.year}</h2>
            </div>
            {(data.preview || data.code) && (
              <div>
                <p className="text-base tracking-[8px] text-dark uppercase">
                  Enlances
                </p>
                <div className="flex gap-6">
                  {data.preview && (
                    <p className="text-2xl text-darken">
                      <a
                        href={data.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Preview{" "}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </p>
                  )}

                  {data.code && (
                    <p className="text-2xl text-darken">
                      <a
                        href={data.code}
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
            <h2 className="text-base tracking-[8px] text-dark uppercase">
              Descripción
            </h2>
            {data.desc.map((desc: string, index: number) => (
              <p
                key={index}
                className="mb-5 text-justify text-xl tracking-wide text-light-5"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* images */}
      <div className="mx-auto grid w-full grid-cols-1 p-5 md:p-20">
        <div className="flex h-auto w-full flex-col justify-center text-center">
          {data.images.map((image: string, index: number) => (
            <ProjectImage
              key={index}
              src={image}
              alt={`Project Image ${index + 1}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
