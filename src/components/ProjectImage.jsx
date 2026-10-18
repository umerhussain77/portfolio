import { useState } from "react";
import { ImageOff } from "lucide-react";

// Shows the image, or a labeled placeholder if the file is missing. This avoids broken images.
export default function ProjectImage({ src, alt, label = "Image placeholder", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${alt}: placeholder`}
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-panel to-ink p-4 text-center"
      >
        <ImageOff className="h-6 w-6 text-accent" aria-hidden="true" />
        <span className="text-xs text-muted">{label}</span>
        {src && <code className="break-all text-[10px] text-slate-500">{src}</code>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
