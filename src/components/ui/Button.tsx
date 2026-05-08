import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variation: string
  onlyIcon?: boolean
  icon?: IconProp
}

const Button = ({
  children,
  variation,
  onlyIcon,
  icon,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`title mr-3 box-border cursor-pointer rounded-full px-6 py-2 text-lg shadow-md transition duration-300 ease-in-out ${
      variation === "primary"
        ? "border border-transparent bg-linear-to-r from-main to-main/85 text-light hover:scale-95"
        : "border border-black/5 bg-linear-to-r from-light-2 to-light-3/15 text-main hover:scale-95"
    }`}
  >
    {onlyIcon ? <FontAwesomeIcon icon={icon!} /> : children}
  </button>
)

export default Button
