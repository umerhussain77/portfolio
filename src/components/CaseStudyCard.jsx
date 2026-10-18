import ButtonLink from "./ButtonLink";
import ProjectImage from "./ProjectImage";

export default function CaseStudyCard({ study }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-blue-900/20">
      <div className="aspect-[16/10] overflow-hidden bg-ink">
        <ProjectImage
          src={study.cover}
          alt={`${study.title} cover`}
          label="Cover image: add a desktop screenshot"
          className="transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {study.category.map((c) => (
            <span key={c} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-blue-300">
              {c}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold leading-snug">{study.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.overview}</p>
        <p className="mt-5 text-xs text-slate-500">
          {study.technologies.slice(0, 4).join(" · ")}
          {study.technologies.length > 4 ? " · more" : ""}
        </p>
        <div className="mt-5">
          <ButtonLink to={`/case-studies/${study.slug}`} variant="secondary" className="px-4 py-2 text-xs">
            Read Case Study
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
