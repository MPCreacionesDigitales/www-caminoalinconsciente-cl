import { Link } from "@tanstack/react-router";
import { SiteFooter } from "./site-footer";

type Section = { heading: string; body: string };

export function LegalPage({ title, sections }: { title: string; sections: Section[] }) {
  return (
    <>
      <div className="section-shell max-w-3xl py-20 sm:py-28">
        <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← Volver al inicio
        </Link>
        <h1 className="rule-gold mt-6 text-4xl font-medium sm:text-5xl">{title}</h1>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-medium">{s.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
