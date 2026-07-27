"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function TiltGlow({
  children,
  className = "",
  clip = true,
}: {
  children: ReactNode;
  className?: string;
  clip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
    setGlow({ x: px * 100, y: py * 100, opacity: 1 });
  }

  function handleLeave() {
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" });
    setGlow((g) => ({ ...g, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${
        clip ? "overflow-hidden rounded-2xl" : ""
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, var(--pastel-blue-300) 0%, transparent 60%)`,
          mixBlendMode: "soft-light",
        }}
      />
      {children}
    </div>
  );
}
