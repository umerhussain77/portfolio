import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { iconMap } from "../lib/icons";
import { valueProps } from "../data/services";

export default function WhyWorkWithMe() {
  return (
    <section id="why" aria-labelledby="why-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        id="why-title"
        eyebrow="Why Work With Me"
        title="What you can expect from a project with me"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delay={(index % 3) * 100} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-gradient-to-b from-panel to-ink p-6">
                <Icon size={22} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
