import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import Editable from "../components/Editable";
import Gallery from "../components/Gallery";
import ProjectImage from "../components/ProjectImage";
import { caseStudies } from "../data/caseStudies";
import { useDocumentMeta } from "../lib/useDocumentMeta";
import NotFoundPage from "./NotFoundPage";

function Section({ id, number, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{number}</p>
      <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm text-slate-200">
          <Editable value={item} />
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted">
          <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
          <Editable value={item} />
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const index = caseStudies.findIndex((item) => item.slug === slug);
  const study = caseStudies[index];

  useDocumentMeta(
    study ? `${study.title} | Case Study | Umer Hussain` : "Case study not found | Umer Hussain",
    study ? study.seoDescription : "This case study could not be found."
  );

  if (!study) return <NotFoundPage />;

  const total = caseStudies.length;
  const prev = caseStudies[(index - 1 + total) % total];
  const next = caseStudies[(index + 1) % total];
  const facts = [
    ["Client", study.client],
    ["Industry", study.industry],
    ["Project type", study.type],
    ["Duration", study.duration],
  ];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-36">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to all case studies
      </Link>

      <header className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {study.category.map((c) => (
            <li key={c} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-blue-300">{c}</li>
          ))}
        </ul>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{study.title}</h1>
        <Editable as="p" value={study.overview} className="mt-6 text-lg leading-relaxed text-muted" />
      </header>

      <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-panel">
        <ProjectImage src={study.cover} alt={`${study.title}: cover image`} label="Cover image: add a full-page desktop screenshot" />
      </div>

      <Section id="overview" number="01" title="Project Overview">
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-line bg-panel p-5">
              <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
              <dd className="mt-2 font-medium"><Editable value={value} /></dd>
            </div>
          ))}
        </dl>
        <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wide text-slate-300">My role and responsibilities</h3>
        <BulletList items={study.role} />
        <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wide text-slate-300">Technologies</h3>
        <Chips items={study.technologies} />
      </Section>

      <Section id="challenge" number="02" title="The Challenge">
        <Editable as="p" value={study.challenge} className="text-lg leading-relaxed text-muted" />
      </Section>

      <Section id="goals" number="03" title="Goals and Objectives">
        <BulletList items={study.goals} />
      </Section>

      <Section id="approach" number="04" title="My Approach and Solution">
        <Editable as="p" value={study.approach} className="leading-relaxed text-muted" />
      </Section>

      <Section id="process" number="05" title="Development Process">
        <ol className="relative grid gap-8 border-l border-line pl-6">
          {study.process.map((step) => (
            <li key={step.stage} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-ink" />
              <h3 className="font-semibold">{step.stage}</h3>
              <Editable as="p" value={step.detail} className="mt-2 text-sm leading-relaxed text-muted" />
            </li>
          ))}
        </ol>
      </Section>

      <Section id="technologies" number="06" title="Technologies Used">
        <Chips items={study.technologies} />
      </Section>

      <Section id="features" number="07" title="Key Features">
        <BulletList items={study.features} />
      </Section>

      <Section id="showcase" number="08" title="Visual Showcase">
        <Gallery items={study.screenshots} />
      </Section>

      <Section id="challenges" number="09" title="Challenges and Solutions">
        <div className="grid gap-5 md:grid-cols-2">
          {study.challengesSolutions.map((item) => (
            <div key={item.challenge} className="rounded-2xl border border-line bg-panel p-6">
              <p className="text-xs uppercase tracking-wide text-muted">Challenge</p>
              <Editable as="p" value={item.challenge} className="mt-2 font-semibold" />
              <p className="mt-5 text-xs uppercase tracking-wide text-muted">Solution</p>
              <Editable as="p" value={item.solution} className="mt-2 text-sm leading-relaxed text-muted" />
            </div>
          ))}
        </div>
      </Section>

      <Section id="results" number="10" title="Results and Impact">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">Delivered</h3>
        <BulletList items={study.results.delivered} />
        <div className="mt-8 rounded-xl border border-line bg-panel p-5">
          <p className="text-xs uppercase tracking-wide text-muted">Measured results</p>
          <Editable as="p" value={study.results.metrics} className="mt-2 leading-relaxed text-muted" />
        </div>
      </Section>

      <Section id="live" number="11" title="Live Project and Navigation">
        <div className="flex flex-wrap gap-3">
          {study.liveUrl ? (
            <ButtonLink href={study.liveUrl}>
              View Live Website
              <ExternalLink size={16} aria-hidden="true" />
            </ButtonLink>
          ) : (
            <p className="text-sm text-muted">
              Live website link: <Editable value="[Add live website URL in src/data/caseStudies.js]" />
            </p>
          )}
          {study.sourceUrl && (
            <ButtonLink href={study.sourceUrl} variant="secondary">View Source Code</ButtonLink>
          )}
        </div>

        <nav aria-label="Case study navigation" className="mt-12 grid gap-4 sm:grid-cols-2">
          {prev.slug !== study.slug && (
            <Link to={`/case-studies/${prev.slug}`} className="group rounded-2xl border border-line bg-panel p-5 transition hover:border-accent/50">
              <p className="text-xs uppercase tracking-wide text-muted">Previous project</p>
              <p className="mt-2 font-semibold transition group-hover:text-blue-300">{prev.title}</p>
            </Link>
          )}
          {next.slug !== study.slug && (
            <Link to={`/case-studies/${next.slug}`} className="group rounded-2xl border border-line bg-panel p-5 text-right transition hover:border-accent/50 sm:col-start-2">
              <p className="text-xs uppercase tracking-wide text-muted">Next project</p>
              <p className="mt-2 font-semibold transition group-hover:text-blue-300">{next.title}</p>
            </Link>
          )}
        </nav>
        <div className="mt-8 flex justify-center">
          <ButtonLink to="/case-studies" variant="secondary">Back to All Case Studies</ButtonLink>
        </div>
      </Section>
    </article>
  );
}
