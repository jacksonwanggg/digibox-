import EventCard from "../components/EventCard";
import ScrollReveal from "../components/ScrollReveal";
import { events } from "../data/events";

export default function Events() {
  const today = new Date().toISOString().split("T")[0];
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-pink animate-pulse"
          style={{ width: 400, height: 400, top: -100, left: -100 }}
        />
        <div className="container">
          <h1>
            Our <span className="gradient-text">Events</span>
          </h1>
          <p>
            Workshops, hackathons, panels, and socials — there&apos;s always
            something happening at DigiSoc.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="section-subtitle">
              Check out what we have planned — don&apos;t miss out!
            </p>
          </ScrollReveal>
          {upcoming.length > 0 ? (
            <div className="events-grid">
              {upcoming.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <p className="section-subtitle" style={{ opacity: 0.6 }}>
                No upcoming events right now — check back soon!
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="section events-past-section">
          <div className="container">
            <ScrollReveal>
              <h2 className="section-title">
                Past <span className="gradient-text">Events</span>
              </h2>
              <p className="section-subtitle">
                A look back at some of the awesome things we&apos;ve done.
              </p>
            </ScrollReveal>
            <div className="events-grid">
              {past.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 100}>
                  <EventCard event={event} past />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
