import { createFileRoute } from "@tanstack/react-router";
import { CHECKOUT_URL } from "@/lib/site-config";
import { CtaButton } from "@/components/landing/cta-button";
import {
  Hero,
  Problema,
  Solucion,
  Beneficios,
  ComoFunciona,
  Sobre,
  Testimonios,
  VideoSection,
  Precio,
  Faq,
  Formulario,
  CtaFinal,
} from "@/components/landing/sections";
import { SiteFooter } from "@/components/landing/site-footer";

const title = "Sesión Online de Biodescodificación | Descubre el origen de tus conflictos";
const description =
  "Sesión privada 1 a 1 para descubrir el origen emocional y biológico de tus síntomas, ansiedad y patrones que se repiten. Agenda tu sesión online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sesión Online de Biodescodificación",
          serviceType: "Biodescodificación",
          description,
          offers: {
            "@type": "Offer",
            price: "30000",
            priceCurrency: "CLP",
            url: CHECKOUT_URL,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <div className="flex min-w-0 items-center gap-4">
            <p className="font-display min-w-0 truncate text-sm font-medium tracking-tight sm:text-base">
              Biodescodificación
            </p>
            <Link
              to="/test"
              className="shrink-0 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              Test de Preparación
            </Link>
          </div>
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </header>


      <Hero />
      <Problema />
      <Solucion />
      <Beneficios />
      <ComoFunciona />
      <Sobre />
      <Testimonios />
      <VideoSection />
      <Precio />
      <Faq />
      <Formulario />
      <CtaFinal />
      <SiteFooter />
    </>
  );
}
