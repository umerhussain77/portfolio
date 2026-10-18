import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

const projectTypes = [
  "WordPress website",
  "Theme customization",
  "Elementor design",
  "Shopify store",
  "Website speed optimization",
  "Other",
];

const emptyForm = { name: "", email: "", projectType: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 20) errors.message = "Please share a few more details (at least 20 characters).";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="text-sm text-red-300">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  // No backend is connected, so the form opens the visitor's email app with the message filled in.
  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setOpened(false);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      `Project inquiry from ${values.name.trim()}${values.projectType ? ` – ${values.projectType}` : ""}`
    );
    const body = encodeURIComponent(
      `${values.message.trim()}\n\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
    profile.whatsapp && { label: "WhatsApp", value: "Message on WhatsApp", href: profile.whatsapp, icon: MessageCircle },
    { label: "LinkedIn", value: "View my profile", href: profile.linkedin, icon: ExternalLink },
    profile.github && { label: "GitHub", value: "View my code", href: profile.github, icon: ExternalLink },
    { label: "Location", value: profile.location, icon: MapPin },
  ].filter(Boolean);

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Have a project in mind? Let's talk."
        description="Share a few details about your website and I will get back to you about next steps."
      />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="grid gap-4">
            {contacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">{item.label}</span>
                    <span className="break-all text-sm font-medium">{item.value}</span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition hover:border-accent/50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form noValidate onSubmit={handleSubmit} className="glass grid gap-5 rounded-2xl p-6 sm:p-8" aria-label="Project inquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field id="projectType" label="Project type (optional)">
              <select id="projectType" name="projectType" value={values.projectType} onChange={handleChange} className={inputClass}>
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </Field>
            <Field id="message" label="Project details" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Tell me about your website, goals, and timeline."
                className={inputClass}
              />
            </Field>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Send Inquiry
              </button>
              <p className="max-w-xs text-xs leading-relaxed text-muted">
                This form opens your email app with your message ready to send. Nothing is stored on this website.
              </p>
            </div>
            {opened && (
              <p role="status" className="text-sm text-emerald-300">
                Your email app should open with your message. If it does not, email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
