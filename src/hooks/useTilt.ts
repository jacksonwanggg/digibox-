import { useRef, useCallback } from "react";

interface TiltConfig {
  maxTilt?: number;
  scale?: number;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(
  config: TiltConfig = {}
) {
  const { maxTilt = 6, scale = 1.02 } = config;
  const ref = useRef<T>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (shineRef.current) {
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        shineRef.current.style.setProperty("--shine-x", `${shineX}%`);
        shineRef.current.style.setProperty("--shine-y", `${shineY}%`);
      }
    },
    [maxTilt, scale]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transition = "";
  }, []);

  return {
    ref,
    shineRef,
    tiltHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
    },
  };
}
