import ButtonLink from "../components/ButtonLink";
import CaseStudyCard from "../components/CaseStudyCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { caseStudies } from "../data/caseStudies";

export default function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured Projects"
          title="Selected WordPress and restaurant website projects"
          description="Each case study covers the challenge, my approach, the technologies used, and the features delivered."
        />
        <ButtonLink to="/case-studies" variant="secondary" className="mb-12">
          All Case Studies
        </ButtonLink>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 100} className="h-full">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
