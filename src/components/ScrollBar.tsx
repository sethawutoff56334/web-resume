"use client";

import { useRef } from "react";
import { useStage } from "./Stage";

export default function ScrollBar() {
  const { index, total, go } = useStage();
  const trackRef = useRef<HTMLDivElement>(null);

  function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = (e.clientY - rect.top) / rect.height;
    const target = Math.min(total - 1, Math.max(0, Math.floor(ratio * total)));
    go(target);
  }

  const thumbHeight = 100 / total;
  const thumbTop = index * thumbHeight;

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      className="fixed right-2 top-1/2 z-[100] h-[40vh] w-1.5 -translate-y-1/2 cursor-pointer rounded-full bg-[var(--pastel-blue-300)]/40 sm:right-3 print:hidden"
    >
      <div
        className="absolute left-0 w-full rounded-full bg-[var(--pastel-blue-700)] transition-all duration-500 ease-out"
        style={{ height: `${thumbHeight}%`, top: `${thumbTop}%` }}
      />
    </div>
  );
}
