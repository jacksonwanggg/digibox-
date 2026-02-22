import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      pos.current = {
        x: lerp(pos.current.x, target.current.x, 0.08),
        y: lerp(pos.current.y, target.current.y, 0.08),
      };

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 175}px, ${pos.current.y - 175}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow" />;
}
