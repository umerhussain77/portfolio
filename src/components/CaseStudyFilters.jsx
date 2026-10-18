export default function CaseStudyFilters({ categories, active, onChange }) {
  return (
    <div role="group" aria-label="Filter case studies by category" className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const selected = active === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm transition duration-200 ${
              selected
                ? "border-accent bg-accent text-white"
                : "border-line text-muted hover:border-accent/50 hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
