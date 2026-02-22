import { type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
