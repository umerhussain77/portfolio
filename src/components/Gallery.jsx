import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ProjectImage from "./ProjectImage";

// Responsive screenshot grid with a simple lightbox. Closes with the Escape key or the close button.
export default function Gallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.label} in a larger view`}
            className="group overflow-hidden rounded-2xl border border-line bg-panel text-left transition duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="aspect-[16/10] overflow-hidden bg-ink">
              <ProjectImage src={item.src} alt={item.label} label={item.label} className="transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span>{item.label}</span>
              <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide text-muted">
                {item.type}
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 transition hover:bg-black/80"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="aspect-[16/10] bg-ink">
              <ProjectImage src={active.src} alt={active.label} label={active.label} />
            </div>
            <p className="px-5 py-3 text-sm text-muted">{active.label}</p>
          </div>
        </div>
      )}
    </>
  );
}
