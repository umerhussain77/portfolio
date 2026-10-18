import { ArrowRight, Download, Mail } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { profile } from "../data/profile";

function CodeCard() {
  const snippet = `const developer = {
  name: "${profile.name}",
  role: "${profile.title}",
  focus: ["WordPress", "Shopify", "Tailwind CSS"],
  experience: "4+ years",
  location: "${profile.location}",
};`;
  return (
    <div className="glass rounded-2xl p-5 shadow-2xl shadow-blue-900/30">
      <div className="mb-4 flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      </div>
      <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(59,130,246,0.22),transparent),radial-gradient(45%_40%_at_90%_10%,rgba(139,92,246,0.18),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-[fadeUp_0.8s_ease-out_both]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {profile.title} · {profile.name}
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient">Building Fast, Modern</span> &amp; Scalable Websites
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/#projects">
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.resumePath} variant="secondary" download>
              <Download size={16} aria-hidden="true" />
              Download Resume
            </ButtonLink>
            <ButtonLink to="/#contact" variant="secondary">
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </ButtonLink>
          </div>
        </div>
        <div className="animate-[fadeUp_1s_ease-out_both]">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
