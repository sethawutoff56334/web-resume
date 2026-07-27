"use client";

import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="h-4 w-4 text-[var(--pastel-blue-600)]"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-[var(--pastel-blue-700)]"
    >
      <path d="M20.74 14.51A8.5 8.5 0 0 1 9.49 3.26a.5.5 0 0 0-.6-.7A10 10 0 1 0 21.44 15.1a.5.5 0 0 0-.7-.59z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial: "light" | "dark" =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed right-3 top-3 z-[100] flex h-8 w-14 items-center rounded-full bg-[var(--pastel-blue-200)] p-1 shadow-md transition-colors duration-300 sm:right-5 sm:top-5 print:hidden"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--toggle-thumb)] shadow-md transition-transform duration-300 ease-out"
        style={{
          transform: theme === "dark" ? "translateX(24px)" : "translateX(0px)",
        }}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
