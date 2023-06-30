"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientAnimation({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      {/* <motion.div
        // key={pathname}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      > */}
      {children}
      {/* </motion.div> */}
    </AnimatePresence>
  );
}
