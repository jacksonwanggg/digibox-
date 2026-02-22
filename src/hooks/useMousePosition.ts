import { useEffect, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const pos = useRef<MousePosition>({ x: 0, y: 0 });
  const target = useRef<MousePosition>({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const subscribers = useRef(new Set<() => void>());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current = {
        x: lerp(pos.current.x, target.current.x, 0.12),
        y: lerp(pos.current.y, target.current.y, 0.12),
      };
      subscribers.current.forEach((cb) => cb());
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return pos.current;
}

export function useMousePositionRef() {
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current = {
        x: lerp(pos.current.x, target.current.x, 0.12),
        y: lerp(pos.current.y, target.current.y, 0.12),
      };
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const getPosition = useCallback(() => pos.current, []);

  return getPosition;
}
