"use client";

import { AnimatePresence, motion } from "framer-motion";

const PARTICLES = Array.from({ length: 6 }, (_, i) => i);

export default function SparkleBurst({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <span className="pointer-events-none absolute inset-0">
          {PARTICLES.map((i) => {
            const angle = (i / PARTICLES.length) * Math.PI * 2;
            const x = Math.cos(angle) * 16;
            const y = Math.sin(angle) * 16;
            return (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[var(--pastel-blue-500)]"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x, y, opacity: 0, scale: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            );
          })}
        </span>
      )}
    </AnimatePresence>
  );
}
