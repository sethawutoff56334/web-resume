"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ScrollBar from "./ScrollBar";
import ThemeToggle from "./ThemeToggle";

type StageContextValue = {
  index: number;
  total: number;
  go: (next: number) => void;
};

const StageContext = createContext<StageContextValue | null>(null);

export function useStage() {
  const ctx = useContext(StageContext);
  if (!ctx) throw new Error("useStage must be used within <Stage>");
  return ctx;
}

const TRANSITION_MS = 700;
const THRESHOLD_RATIO = 0.35;
const IDLE_RESET_MS = 250;

export default function Stage({
  labels,
  children,
}: {
  labels: string[];
  children: ReactNode;
}) {
  const total = labels.length;
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const lockRef = useRef(false);
  const accRef = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const containerRef = useRef<HTMLDivElement>(null);

  function go(next: number) {
    const clamped = Math.max(0, Math.min(total - 1, next));
    if (clamped === indexRef.current || lockRef.current) return;
    indexRef.current = clamped;
    setIndex(clamped);
    lockRef.current = true;
    accRef.current = 0;
    setTimeout(() => {
      lockRef.current = false;
    }, TRANSITION_MS);
  }

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const threshold = () => window.innerHeight * THRESHOLD_RATIO;

    function findScrollArea(target: EventTarget | null): HTMLElement | null {
      const node = (target as HTMLElement | null)?.closest(
        "[data-scroll-area]"
      ) as HTMLElement | null;
      if (node && node.scrollHeight > node.clientHeight + 1) return node;
      return null;
    }

    function atBoundary(node: HTMLElement, wantNext: boolean) {
      return wantNext
        ? node.scrollTop + node.clientHeight >= node.scrollHeight - 1
        : node.scrollTop <= 0;
    }

    function onWheel(e: WheelEvent) {
      const scrollEl = findScrollArea(e.target);
      if (scrollEl && !atBoundary(scrollEl, e.deltaY > 0)) return;

      e.preventDefault();
      if (lockRef.current) return;
      accRef.current += e.deltaY;
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        accRef.current = 0;
      }, IDLE_RESET_MS);

      if (accRef.current > threshold()) {
        go(indexRef.current + 1);
      } else if (accRef.current < -threshold()) {
        go(indexRef.current - 1);
      }
    }

    let touchStartY = 0;
    let touching = false;
    let touchScrollEl: HTMLElement | null = null;

    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
      touching = true;
      touchScrollEl = findScrollArea(e.target);
    }

    function onTouchMove(e: TouchEvent) {
      if (!touching) return;
      if (touchScrollEl) {
        const dy = touchStartY - e.touches[0].clientY;
        if (!atBoundary(touchScrollEl, dy > 0)) return;
      }
      e.preventDefault();
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touching || lockRef.current) return;
      touching = false;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (touchScrollEl && !atBoundary(touchScrollEl, diff > 0)) {
        touchScrollEl = null;
        return;
      }
      touchScrollEl = null;
      if (diff > threshold()) {
        go(indexRef.current + 1);
      } else if (diff < -threshold()) {
        go(indexRef.current - 1);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        go(indexRef.current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        go(indexRef.current - 1);
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <StageContext.Provider value={{ index, total, go }}>
      <ThemeToggle />
      <ScrollBar />
      <div
        ref={containerRef}
        className="fixed inset-0 overflow-hidden print:static print:h-auto print:overflow-visible"
      >
        {children}
      </div>
    </StageContext.Provider>
  );
}
