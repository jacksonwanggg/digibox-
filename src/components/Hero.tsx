import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StarField from "./StarField";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";

const RUBRIC_URL = "https://campus.hellorubric.com/?s=6334";

export default function Hero() {
  const [stagger, setStagger] = useState(false);

  useEffect(() => {
    setStagger(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-gradient" />
      <StarField count={50} />
      <FloatingOrbs variant="hero" />

      <div className="container hero-split">
        <div className={`hero-text ${stagger ? "hero-stagger" : ""}`}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            UNSW Digital Society
          </div>
          <h1>
            Empowering the Next Generation of{" "}
            <span className="gradient-text">Digital Leaders</span>
          </h1>
          <p>
            The UNSW Digital Society aims to empower students interested in all
            things digital by building the skills required to succeed in today&apos;s
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
                Join Us
              </MagneticButton>
            </Link>
            <a href={RUBRIC_URL} target="_blank" rel="noopener noreferrer">
              <MagneticButton className="btn-rubric">
                <img src={`${import.meta.env.BASE_URL}rubric-logo.png`} alt="" width="20" height="20" />
                Find Us on Rubric
                <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </MagneticButton>
            </a>
          </div>
        </div>

        <div className={`hero-card ${stagger ? "hero-stagger-card" : ""}`}>
          <div className="hero-card-glow" />
          <img
            src={`${import.meta.env.BASE_URL}groupPhoto.png`}
            alt="DigiSoc Group Photo"
          />
        </div>
      </div>
    </section>
  );
}
