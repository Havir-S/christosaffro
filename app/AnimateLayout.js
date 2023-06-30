"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimateLayout({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
