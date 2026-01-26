"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  // El ancla funcionará si tienes un Section con id="contact"
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-full",
          // Estilos Glassmorphism (Vidrio)
          "bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/5",
          "dark:bg-neutral-900/70 dark:border-white/10 dark:shadow-black/20",
        )}
      >
        {navItems.map((item) => {
          // Lógica: Está activo si la ruta coincide O si es un ancla y estamos en la ruta base (opcional)
          const isActive = pathname === item.href;
          const isAnchor = item.href.startsWith("#");

          const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (isAnchor) {
              e.preventDefault();
              const element = document.getElementById(
                item.href.replace("#", ""),
              );
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          };

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleClick}
              className="relative px-3 py-2 rounded-full transition-colors group"
              aria-label={item.name}
            >
              {/* Fondo animado (Burbuja activa) */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-neutral-200/60 dark:bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Icono */}
              <span className="relative z-10 flex items-center justify-center">
                <item.icon
                  size={22}
                  strokeWidth={2}
                  className={cn(
                    "transition-colors duration-200",
                    isActive
                      ? "text-black dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white",
                  )}
                />
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
