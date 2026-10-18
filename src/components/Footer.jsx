import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { navLinks } from "../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title} · {profile.specialty}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="break-all transition hover:text-white">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
          )}
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-muted">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
