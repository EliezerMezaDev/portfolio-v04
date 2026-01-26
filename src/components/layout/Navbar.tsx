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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex items-center gap-2  rounded-full",
          "bg-light-4/5 backdrop-blur-xl border border-base",
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
                isActive ? "px-4" : "px-2",
                "relative  py-2 rounded-full transition-colors group",
              )}
              aria-label={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 px-4 bg-accent  rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center">
                <item.icon
                  size={22}
                  strokeWidth={2}
                  className={cn(
                    "transition-colors duration-200",
                    isActive
                      ? "text-base-dark"
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
