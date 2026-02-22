import { useMemo } from "react";

interface OrbConfig {
  color: string;
  size: number;
  opacity: number;
  blur: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
}

interface FloatingOrbsProps {
  variant?: "hero" | "cta";
}

export default function FloatingOrbs({ variant = "hero" }: FloatingOrbsProps) {
  const orbs = useMemo<OrbConfig[]>(() => {
    if (variant === "cta") {
      return [
        {
          color: "#7C5CFC",
          size: 200,
          opacity: 0.1,
          blur: 80,
          top: "20%",
          left: "80%",
          duration: 18,
          delay: 0,
          x1: 25, y1: -15, x2: -15, y2: 20, x3: 10, y3: 10,
        },
        {
          color: "#FF6584",
          size: 150,
          opacity: 0.08,
          blur: 70,
          top: "60%",
          left: "10%",
          duration: 22,
          delay: 3,
          x1: -20, y1: 15, x2: 25, y2: -10, x3: -10, y3: 20,
        },
      ];
    }

    return [
      {
        color: "#7C5CFC",
        size: 350,
        opacity: 0.12,
        blur: 100,
        top: "10%",
        left: "70%",
        duration: 20,
        delay: 0,
        x1: 30, y1: -20, x2: -20, y2: 30, x3: 15, y3: 15,
      },
      {
        color: "#FF6584",
        size: 250,
        opacity: 0.08,
        blur: 80,
        top: "60%",
        left: "15%",
        duration: 25,
        delay: 5,
        x1: -25, y1: 20, x2: 30, y2: -15, x3: -10, y3: 25,
      },
      {
        color: "#43E8C3",
        size: 200,
        opacity: 0.1,
        blur: 70,
        top: "30%",
        left: "40%",
        duration: 18,
        delay: 8,
        x1: 20, y1: 15, x2: -15, y2: -20, x3: 10, y3: -10,
      },
    ];
  }, [variant]);

  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="floating-orb"
          style={{
            background: orb.color,
            width: orb.size,
            height: orb.size,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            top: orb.top,
            left: orb.left,
            "--orb-duration": `${orb.duration}s`,
            "--orb-delay": `${orb.delay}s`,
            "--orb-x1": `${orb.x1}px`,
            "--orb-y1": `${orb.y1}px`,
            "--orb-x2": `${orb.x2}px`,
            "--orb-y2": `${orb.y2}px`,
            "--orb-x3": `${orb.x3}px`,
            "--orb-y3": `${orb.y3}px`,
          } as React.CSSProperties}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
