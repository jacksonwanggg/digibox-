import { useRef, useCallback, useEffect, useState, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a" | "span";
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  as: Component = "button",
  href,
  onClick,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLElement>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canHover || !wrapperRef.current || !btnRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      const maxDist = 50;
      const maxShift = 5;

      if (dist < maxDist) {
        const factor = (1 - dist / maxDist) * maxShift;
        const moveX = (distX / maxDist) * factor;
        const moveY = (distY / maxDist) * factor;
        btnRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }
    },
    [canHover]
  );

  const handleMouseLeave = useCallback(() => {
    if (btnRef.current) {
      btnRef.current.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      btnRef.current.style.transform = "translate3d(0, 0, 0)";
      setTimeout(() => {
        if (btnRef.current) btnRef.current.style.transition = "";
      }, 300);
    }
  }, []);

  const props = {
    ref: btnRef as React.Ref<HTMLButtonElement & HTMLAnchorElement & HTMLSpanElement>,
    className: `btn ${className}`,
    onClick,
    ...(Component === "a" ? { href } : {}),
  };

  return (
    <div
      ref={wrapperRef}
      className="magnetic-btn-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component {...props}>{children}</Component>
    </div>
  );
}
