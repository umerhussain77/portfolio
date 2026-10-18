import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none";

const variants = {
  primary: "bg-accent text-white shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 hover:bg-blue-500",
  secondary: "border border-line bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/10",
};

// Renders a router Link when "to" is given, otherwise a plain anchor. External links open in a new tab.
export default function ButtonLink({ to, href, variant = "primary", className = "", children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>;
  }
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
