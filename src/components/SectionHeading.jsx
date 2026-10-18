export default function SectionHeading({ id, as: Heading = "h2", eyebrow, title, description, className = "" }) {
  return (
    <div className={`mb-12 max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <Heading id={id} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </Heading>
      {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
