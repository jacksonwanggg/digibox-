import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCard from "../components/AnimatedCard";
import FloatingOrbs from "../components/FloatingOrbs";
import MagneticButton from "../components/MagneticButton";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function About() {
  useDocumentMeta({
    title: "About DigiSoc — UNSW Digital Society Mission & Values",
    description: "Learn about DigiSoc (UNSW Digital Society). UNSW DigiSoc empowers students with digital skills through workshops, hackathons, and industry events. Our values: accessibility, community, innovation, and empowerment. DigiSoc UNSW — bridging university education and the digital industry at UNSW Sydney.",
  });
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-purple animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            About <span className="gradient-text">DigiSoc</span>
          </h1>
          <p>
            Learn about who we are, what we stand for, and why we&apos;re
            passionate about digital.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content">
          <ScrollReveal>
            <p>
              The <strong>UNSW Digital Society (DigiSoc)</strong> is a
              student-driven community that empowers students interested in all
              things digital. Whether it&apos;s web development, UI/UX design,
              data analytics, cloud computing, or digital marketing, DigiSoc
              provides the platform to learn, connect, and grow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p>
              Founded with the vision of bridging the gap between university
              education and industry expectations, DigiSoc runs workshops, panels,
              hackathons, and social events that equip members with practical
              skills and valuable connections.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p>
              We believe every UNSW student — regardless of faculty or experience
              level — should have the opportunity to explore the digital world and
              build the skills required to succeed in the modern economy.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="about-values">
              <h2 style={{ marginBottom: "2rem" }}>
                Our <span className="gradient-text">Values</span>
              </h2>
              <div className="grid-2">
                {[
                  { title: "Accessibility", text: "We welcome students from every background and skill level. There are no prerequisites to joining DigiSoc." },
                  { title: "Community", text: "We foster genuine relationships between students and industry professionals through collaborative events." },
                  { title: "Innovation", text: "We stay ahead of digital trends and bring cutting-edge topics to our members through workshops and hackathons." },
                  { title: "Empowerment", text: "We equip students with practical skills, portfolio projects, and the confidence to pursue their digital ambitions." },
                ].map((value, i) => (
                  <ScrollReveal key={value.title} delay={i * 100}>
                    <AnimatedCard className="value-item">
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </AnimatedCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-section">
        <FloatingOrbs variant="cta" />
        <div className="container">
          <ScrollReveal>
            <h2>
              Want to be part of{" "}
              <span className="gradient-text gradient-text-pulse">something bigger</span>?
            </h2>
            <p>
              Whether you want to attend events, collaborate on projects, or lead
              the society, there&apos;s a place for you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="cta-buttons">
              <Link to="/contact">
                <MagneticButton className="btn-primary">
                  Join DigiSoc
                </MagneticButton>
              </Link>
              <Link to="/events">
                <MagneticButton className="btn-outline">
                  See Upcoming Events
                </MagneticButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
