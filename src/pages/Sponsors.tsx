import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCard from "../components/AnimatedCard";
import FloatingOrbs from "../components/FloatingOrbs";
import MagneticButton from "../components/MagneticButton";
import { sponsors, Sponsor } from "../data/sponsors";

const TIER_LABELS: Record<Sponsor["tier"], string> = {
  gold: "Gold Partner",
  silver: "Silver Partner",
  bronze: "Bronze Partner",
};

export default function Sponsors() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-purple animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            Our <span className="gradient-text">Sponsors</span>
          </h1>
          <p>
            We&apos;re proud to partner with organisations that share our passion
            for empowering the next generation of digital leaders.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sponsors-grid">
            {sponsors.map((sponsor, i) => (
              <ScrollReveal key={sponsor.id} delay={i * 100}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card-link"
                >
                  <AnimatedCard className="sponsor-card">
                    <span className={`sponsor-tier sponsor-tier--${sponsor.tier}`}>
                      {TIER_LABELS[sponsor.tier]}
                    </span>
                    <div className="sponsor-logo-wrap">
                      <img
                        src={`${import.meta.env.BASE_URL}${sponsor.logo}`}
                        alt={sponsor.name}
                      />
                    </div>
                    <h3>{sponsor.name}</h3>
                    <p>{sponsor.description}</p>
                    <span className="sponsor-visit">
                      Visit website
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </AnimatedCard>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <FloatingOrbs variant="cta" />
        <div className="container">
          <ScrollReveal>
            <h2>
              Interested in{" "}
              <span className="gradient-text gradient-text-pulse">sponsoring</span>?
            </h2>
            <p>
              Partner with DigiSoc to reach hundreds of UNSW students passionate
              about technology and digital innovation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="cta-buttons">
              <Link to="/contact">
                <MagneticButton className="btn-primary">
                  Get in Touch
                </MagneticButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
