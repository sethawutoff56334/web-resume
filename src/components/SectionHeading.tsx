"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  title,
  align = "center",
}: {
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      className={`mb-10 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="bg-gradient-to-r from-[var(--pastel-blue-500)] via-[var(--pastel-blue-600)] to-[var(--pastel-blue-700)] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
      <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--pastel-blue-400)] to-[var(--pastel-blue-600)]" />
    </motion.div>
  );
}

export function SubHeading({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="h-4 w-1.5 rounded-full bg-gradient-to-b from-[var(--pastel-blue-400)] to-[var(--pastel-blue-600)]" />
      <h3 className="text-lg font-bold uppercase tracking-widest text-[var(--pastel-blue-600)]">
        {title}
      </h3>
    </div>
  );
}
