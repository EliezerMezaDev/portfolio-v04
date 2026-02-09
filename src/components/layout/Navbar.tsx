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
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:fixed left-4 top-1/2 -translate-y-1/2  z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex flex-col items-center gap-4 ",
          " bg-base-light/25 backdrop-blur-xl ",
        )}
      >
        {navItems.map((item) => {
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
              className={cn(
                isActive ? "" : "",
                "relative py-4 px-4 transition-colors group",
              )}
              aria-label={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 px-4 bg-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center">
                <item.icon
                  className={cn(
                    "size-4 xl:size-6 transition-colors duration-200",
                    isActive
                      ? "text-base-darken"
                      : "text-light-4 group-hover:text-accent/50",
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
