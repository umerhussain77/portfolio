import ButtonLink from "../components/ButtonLink";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("Page not found | Umer Hussain", "The page you are looking for could not be found.");
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-5 pt-36 text-center">
      <div>
        <p className="text-sm font-semibold text-accent">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to="/">Back to Home</ButtonLink>
          <ButtonLink to="/case-studies" variant="secondary">View Case Studies</ButtonLink>
        </div>
      </div>
    </section>
  );
}
