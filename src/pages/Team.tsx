import TeamCard from "../components/TeamCard";
import ScrollReveal from "../components/ScrollReveal";
import { team } from "../data/team";

export default function Team() {
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
          <div className="grid-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
