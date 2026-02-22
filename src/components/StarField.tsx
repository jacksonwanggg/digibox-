import { useMemo } from "react";

interface StarFieldProps {
  count?: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacityMin: number;
  opacityMax: number;
  twinkleDuration: number;
  driftDuration: number;
  driftX: number;
  driftY: number;
  delay: number;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function StarField({ count = 50 }: StarFieldProps) {
  const stars = useMemo<Star[]>(() => {
    const rand = seededRandom(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 1 + rand() * 2,
      opacityMin: 0.15 + rand() * 0.15,
      opacityMax: 0.4 + rand() * 0.35,
      twinkleDuration: 3 + rand() * 4,
      driftDuration: 15 + rand() * 15,
      driftX: (rand() - 0.5) * 20,
      driftY: -10 - rand() * 30,
      delay: rand() * 8,
    }));
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            "--star-opacity-min": star.opacityMin,
            "--star-opacity-max": star.opacityMax,
            "--twinkle-duration": `${star.twinkleDuration}s`,
            "--drift-duration": `${star.driftDuration}s`,
            "--drift-x": `${star.driftX}px`,
            "--drift-y": `${star.driftY}px`,
            "--delay": `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
