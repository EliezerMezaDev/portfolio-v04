import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variation: string;
}

const Button = ({ children, variation, ...props }: ButtonProps) => (
	<button
		{...props}
		className={`title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out cursor-pointer box-border ${variation === "primary"
				? "bg-main hover:scale-95 border-transparent border text-light"
				: "transparent border border-main text-main hover:scale-95"
			}`}>
		{children}
	</button>
);

export default Button;