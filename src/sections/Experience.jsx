import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { education, experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Where I have worked and grown"
      />
      <ol className="relative border-l border-line pl-8">
        {experience.map((job) => (
          <li key={`${job.role}-${job.start}`} className="relative mb-12 last:mb-0">
            <span aria-hidden="true" className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-ink" />
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {job.start} – {job.end}
              </p>
              <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
              <p className="text-muted">{job.company} · {job.location}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-lg font-semibold">Education</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <div key={item.degree} className="rounded-2xl border border-line bg-panel p-5">
            <p className="font-semibold">{item.degree}</p>
            <p className="mt-1 text-sm text-muted">{item.school}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
