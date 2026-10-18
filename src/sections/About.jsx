import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto w-64 sm:w-72">
            <div aria-hidden="true" className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/40 to-accent-2/40 blur-2xl" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              className="relative aspect-square w-full rounded-full border border-line object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            id="about-title"
            eyebrow="About Me"
            title="A developer focused on fast, maintainable websites"
            className="mb-8"
          />
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
