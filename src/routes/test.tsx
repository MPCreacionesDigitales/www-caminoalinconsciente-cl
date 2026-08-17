import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { SITE_URL } from "@/lib/site-config";

const title = "Test de Preparación en Biodescodificación | Gratis y Online";
const description =
  "Test gratuito de 2 minutos para saber si estás preparado/a para iniciar un proceso de biodescodificación. Responde y recibe una orientación inmediata.";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/test` },
      { property: "og:locale", content: "es_CL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/test` }],
  }),
  component: TestPage,
});

function TestPage() {
  return (
    <>
      <SiteHeader />

      <section className="py-12 sm:py-16">
        <div className="section-shell">
          <p className="eyebrow">Test de Preparación</p>
          <h1 className="rule-gold mt-3 text-3xl font-medium sm:text-4xl">
            Descubre si es tu momento para una sesión de biodescodificación
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              El test evalúa tres cosas: qué tan presente está hoy el conflicto en tu vida, cuánta
              disposición tienes a mirar tu historia familiar y emocional, y si cuentas con el
              tiempo y el espacio para sostener un proceso de cambio.
            </p>
            <p>
              No hay respuestas correctas ni incorrectas, y el resultado es solo orientativo: si
              te sirve, escríbeme y lo conversamos antes de reservar.
            </p>
          </div>
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
