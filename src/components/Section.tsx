"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useStage } from "./Stage";

export default function Section({
  id,
  index = 0,
  children,
  className = "",
  maxWidth = "max-w-3xl",
}: {
  id: string;
  index?: number;
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}) {
  const { index: current } = useStage();

  const state =
    index < current ? "behind" : index > current ? "ahead" : "current";

  return (
    <motion.section
      id={id}
      className="print-page absolute inset-0 h-full w-full overflow-hidden"
      style={{ zIndex: index }}
      variants={{
        behind: { opacity: 0, y: "-12%", scale: 0.94 },
        current: { opacity: 1, y: "0%", scale: 1 },
        ahead: { opacity: 1, y: "100%", scale: 1 },
      }}
      animate={state}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex h-full w-full items-center justify-center print:h-auto print:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f9fd] via-[#e6f2fa] to-[#cfe8f7]" />
        <div className="theme-fade-overlay absolute inset-0 bg-gradient-to-b from-[#0d1b26] via-[#132635] to-[#1b3347]" />
        <div
          aria-hidden
          className="animate-float-slow absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--pastel-blue-300)] opacity-50 blur-3xl sm:h-96 sm:w-96"
        />
        <div
          aria-hidden
          className="animate-float absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[var(--pastel-blue-400)] opacity-40 blur-3xl sm:h-80 sm:w-80"
        />
        <motion.div
          data-scroll-area
          className={`scroll-area relative max-h-full w-full overflow-y-auto ${maxWidth} px-4 py-10 sm:px-6 sm:py-6 ${className}`}
          variants={{
            current: { x: "0%", opacity: 1 },
            hidden: { x: "12%", opacity: 0 },
          }}
          animate={state === "current" ? "current" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut", delay: state === "current" ? 0.15 : 0 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
