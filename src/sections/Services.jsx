import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { iconMap } from "../lib/icons";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="How I can help your website"
        description="Services based on my WordPress, Shopify, and website builder experience."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.title} delay={(index % 3) * 100} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
