import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { navLinks } from "../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the mobile menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  const linkClass = "rounded-full px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? "glass" : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/#home" className="flex items-center gap-3 font-bold tracking-tight" aria-label={`${profile.name}, home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className={linkClass}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePath}
            download
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-accent/60 md:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="rounded-md p-2 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="glass mx-4 mb-4 grid gap-1 rounded-2xl p-3 xl:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="block rounded-xl px-4 py-3 text-sm transition hover:bg-white/5">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={profile.resumePath} download className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm transition hover:bg-white/5">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
