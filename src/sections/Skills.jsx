import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { iconMap } from "../lib/icons";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        id="skills-title"
        eyebrow="Technical Skills"
        title="Tools and technologies I work with"
        description="The frameworks, platforms, and languages I use to design, build, and maintain websites."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal key={group.title} delay={index * 100} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
