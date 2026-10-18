// Values written as "[Like this]" are placeholders. They render highlighted so they are easy to find and replace.
export function isPlaceholder(value) {
  return typeof value === "string" && value.startsWith("[") && value.endsWith("]");
}

export default function Editable({ value, as: Tag = "span", className = "" }) {
  if (isPlaceholder(value)) {
    return (
      <Tag className={`inline-block rounded-md border border-dashed border-amber-400/60 bg-amber-400/10 px-2 py-0.5 text-amber-200 ${className}`}>
        {value}
      </Tag>
    );
  }
  return <Tag className={className}>{value}</Tag>;
}
