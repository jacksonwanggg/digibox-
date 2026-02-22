import { Link } from "react-router-dom";
import { useRef, useEffect, useCallback, useState } from "react";
import StarField from "./StarField";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canHover || !parallaxRef.current) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = ((clientX - centerX) / centerX) * -3;
      const offsetY = ((clientY - centerY) / centerY) * -3;

      const blobs = parallaxRef.current.querySelectorAll<HTMLElement>(".blob");
      const grid = parallaxRef.current.querySelector<HTMLElement>(".hero-grid");

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 1.5;
        blob.style.transform = `translate3d(${offsetX * factor}px, ${offsetY * factor}px, 0)`;
      });

      if (grid) {
        grid.style.transform = `translate3d(${offsetX * 0.5}px, ${offsetY * 0.5}px, 0)`;
      }
    },
    [canHover]
  );

  return (
    <section
      className="hero"
      ref={parallaxRef}
      onMouseMove={handleMouseMove}
    >
      <StarField count={50} />
      <FloatingOrbs variant="hero" />
      <div className="hero-grid" />
      <div className="blob blob-purple hero-blob-1 animate-pulse" />
      <div className="blob blob-pink hero-blob-2 animate-float" />

      <div className="container hero-content">
        <span className="hero-badge">UNSW Digital Society</span>
        <h1>
          Empowering the Next Generation of{" "}
          <span className="gradient-text">Digital Leaders</span>
        </h1>
        <p>
          The UNSW Digital Society aims to empower students interested in all
          things digital by building the skills required to succeed in today's
          tech-driven world.
        </p>
        <div className="hero-buttons">
          <Link to="/events">
            <MagneticButton className="btn-primary">
              Explore Events
            </MagneticButton>
          </Link>
          <Link to="/contact">
            <MagneticButton className="btn-outline">
              Join the Community
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
