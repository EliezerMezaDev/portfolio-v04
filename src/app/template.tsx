"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const getRouteName = (path: string) => {
  if (path === "/") return "Inicio";

  const routeRules: Record<string, string> = {
    Home: "Inicio",
    About: "Sobre mi",
    Projects: "Proyectos",
  };

  return routeRules[
    path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)
  ];
};

const DURATION = 1.5;
const ANIAMTION_UNIT = 0.1;

const COLUMNS = 10;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeName = getRouteName(pathname);

  return (
    <motion.div
      key={pathname}
      className="min-h-screen max-h-screen bg-base-dark"
    >
      <div className="fixed inset-0 z-100 flex pointer-events-none">
        {[...Array(COLUMNS)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1/4 h-full bg-base  relative"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            style={{ transformOrigin: "" }}
            transition={{
              duration: DURATION,
              delay: ANIAMTION_UNIT * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <motion.div
        className="fixed inset-0 z-101 flex items-center justify-center pointer-events-none overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: ANIAMTION_UNIT,
          duration: DURATION - ANIAMTION_UNIT * 6,
        }}
      >
        <h1 className="text-7xl font-extrabold text-light/80 tracking-tighter opacity-50">
          {routeName}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: ANIAMTION_UNIT * 4, duration: DURATION }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
