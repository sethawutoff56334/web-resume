"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-b from-[var(--pastel-blue-50)] via-[var(--pastel-blue-100)] to-[var(--pastel-blue-200)] print:hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#5fa9d6] to-[#2d6b98] text-2xl font-bold text-white shadow-lg">
              SP
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pastel-blue-600)]">
              Sethawut Pornsiripiyakul
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
