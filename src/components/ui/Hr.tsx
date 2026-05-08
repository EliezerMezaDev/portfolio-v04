import { motion } from "framer-motion"
import PropTypes from "prop-types"

export default function Hr({ variant }: { variant?: "short" | "long" }) {
  return (
    <>
      {variant === "long" ? (
        <>
          <motion.div
            className="mb-3 h-1 w-28 self-start rounded-full bg-dark"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          ></motion.div>
          <motion.div
            className="h-1 w-28 rounded-full bg-dark"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: -25,
            }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
          ></motion.div>
        </>
      ) : (
        <div className="my-2 flex flex-col items-center justify-center max-md:mt-4">
          <motion.div
            className="mb-2 h-1 w-20 rounded-full bg-dark"
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          ></motion.div>
          <motion.div
            className="h-1 w-20 rounded-full bg-dark"
            initial={{
              opacity: 0,
              x: 150,
            }}
            whileInView={{
              opacity: 1,
              x: 40,
            }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          ></motion.div>
        </div>
      )}
    </>
  )
}

Hr.propTypes = {
  variant: PropTypes.oneOf(["short", "long"]),
}

Hr.defaultProps = {
  variant: "short",
}
