"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { useFullPage } from "@alvalens/react-fullpage-snap"
import { motion } from "framer-motion"

const navItems = [
  { icon: faHome, label: "Inicio", anchor: "home" },
  { icon: faUser, label: "Sobre mi", anchor: "about" },
  { icon: faFolderOpen, label: "Proyectos", anchor: "projects" },
  { icon: faEnvelope, label: "Contacto", anchor: "contact" },
]

const Sidebar = () => {
  const { moveTo, activeIndex } = useFullPage()

  return (
    <div className="fixed top-1/4 z-40 hidden h-[50vh] w-16 flex-col items-center justify-between rounded-e-3xl bg-dark py-6 md:flex">
      <ul
        id="sidebar"
        className="-ml-1 flex h-full flex-col items-center justify-evenly text-light"
      >
        {navItems.map((item, index) => (
          <li key={item.anchor} data-menuanchor={item.anchor}>
            <button
              aria-label={item.label}
              onClick={() => moveTo(index)}
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl transition-colors duration-300 hover:bg-main/85"
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-main/95"
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
                  activeIndex === index ? "text-light" : ""
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
