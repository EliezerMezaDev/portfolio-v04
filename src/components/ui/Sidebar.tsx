"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "Inicio", anchor: "home" },
	{ icon: faUser, label: "Sobre mi", anchor: "about" },
	{ icon: faFolderOpen, label: "Proyectos", anchor: "projects" },
	{ icon: faEnvelope, label: "Contacto", anchor: "contact" },
];

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	return (
		<div className="hidden md:flex fixed z-40 bg-main h-[50vh] w-16 flex-col justify-between items-center py-6 left-4 top-1/4 rounded-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{navItems.map((item, index) => (
					<li key={item.anchor} data-menuanchor={item.anchor}>
						<button
							aria-label={item.label}
							onClick={() => moveTo(index)}
							className="relative flex items-center justify-center w-10 h-10">
							{activeIndex === index && (
								<motion.div
									layoutId="sidebar-active"
									className="absolute inset-0 bg-black/15 rounded-xl"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							)}
							<FontAwesomeIcon
								icon={item.icon}
								className={`relative z-10 text-xl transition-transform duration-300 ${
									activeIndex === index
										? "scale-110"
										: "scale-100"
								}`}
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
