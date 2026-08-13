import { createFileRoute } from "@tanstack/react-router";
import { CHECKOUT_URL } from "@/lib/site-config";
import { SiteHeader } from "@/components/landing/site-header";
import {
  Hero,
  QueEs,
  Problema,
  Solucion,
  Beneficios,
  ComoFunciona,
  Sobre,
  Testimonios,
  VideoSection,
  Precio,
  Faq,

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
            price: "45",
            priceCurrency: "USD",
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
      <SiteHeader />

      <QueEs />
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
      <CtaFinal />
      <SiteFooter />

    </>
  );
}
