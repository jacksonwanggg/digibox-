import ExecCarousel from "../components/ExecCarousel";
import ScrollReveal from "../components/ScrollReveal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { team } from "../data/team";

export default function Team() {
  useDocumentMeta({
    title: "DigiSoc Team — UNSW DigiSoc Executives & Leadership",
    description: "Meet the UNSW DigiSoc executive team. The passionate students leading DigiSoc (UNSW Digital Society) — driving workshops, hackathons, events, and community initiatives. DigiSoc UNSW team — the people behind UNSW's premier digital society.",
  });
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-cyan animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            The <span className="gradient-text">Team</span>
          </h1>
          <p>
            Meet the passionate executives who make DigiSoc possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <ExecCarousel members={team} />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ marginTop: "4rem", textAlign: "center" }}>
              <h2 className="section-title" style={{ marginBottom: "2rem" }}>
                About the <span className="gradient-text">Team</span>
              </h2>
              <img
                src={`${import.meta.env.BASE_URL}execs.png`}
                alt="Team Group Photo"
                style={{
                  width: "100%",
                  borderRadius: "1rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
