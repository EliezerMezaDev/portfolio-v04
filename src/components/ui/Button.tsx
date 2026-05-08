import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variation: string;
  onlyIcon?: boolean;
  icon?: IconProp;
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
    className={`title text-lg mr-3 rounded-full px-6 py-2 shadow-md transition duration-300 ease-in-out cursor-pointer box-border ${
      variation === "primary"
        ? "bg-linear-to-r from-main to-main/85 hover:scale-95 border-transparent border text-light"
        : "bg-linear-to-r from-light to-black/5 border border-black/15 text-main hover:scale-95"
    }`}
  >
    {onlyIcon ? <FontAwesomeIcon icon={icon!} /> : children}
  </button>
);

export default Button;
