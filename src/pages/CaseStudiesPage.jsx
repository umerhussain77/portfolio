import { useMemo, useState } from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import CaseStudyFilters from "../components/CaseStudyFilters";
import SectionHeading from "../components/SectionHeading";
import { caseStudies, categoryList } from "../data/caseStudies";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function CaseStudiesPage() {
  useDocumentMeta(
    "Case Studies | Umer Hussain – Web Developer",
    "Case studies of WordPress theme, menu system, and registration projects by Umer Hussain, covering process, technologies, and delivered features."
  );

  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((study) => study.category.includes(filter))),
    [filter]
  );

  return (
    <section aria-labelledby="case-studies-title" className="mx-auto max-w-6xl px-5 pb-24 pt-36">
      <SectionHeading
        as="h1"
        id="case-studies-title"
        eyebrow="Case Studies"
        title="Projects and the process behind them"
        description="How I approached each project, which technologies I used, and what was delivered."
      />
      <CaseStudyFilters categories={categoryList} active={filter} onChange={setFilter} />
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
      {items.length === 0 && <p className="mt-10 text-muted">No case studies in this category yet.</p>}
    </section>
  );
}
