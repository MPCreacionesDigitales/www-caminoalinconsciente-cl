import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/landing/cta-button";
import { SiteFooter } from "@/components/landing/site-footer";

const title = "Test de Preparación | Sesión Online de Biodescodificación";
const description =
  "Responde este breve test y descubre si estás preparado/a para iniciar un proceso de biodescodificación.";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestPage,
});

function TestPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <Link
            to="/"
            className="font-display min-w-0 truncate text-sm font-medium tracking-tight sm:text-base"
          >
            Biodescodificación
          </Link>
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="section-shell">
          <p className="eyebrow">Test de Preparación</p>
          <h1 className="rule-gold mt-3 text-3xl font-medium sm:text-4xl">
            Descubre si es tu momento para una sesión
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-10 w-full px-3 sm:px-6">
          <iframe
            src="/calculadora_biodescodificacion.html"
            title="Test de Preparación en Biodescodificación"
            loading="lazy"
            className="h-[75vh] min-h-[600px] w-full rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
