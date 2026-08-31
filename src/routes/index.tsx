import { createFileRoute } from "@tanstack/react-router";
import { CHECKOUT_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site-config";
import { SiteHeader } from "@/components/landing/site-header";
import {
  Hero,
  QueEs,
  Problema,
  Solucion,
  Beneficios,
  ComoFunciona,
  Sobre,
  VideoSection,
  Precio,
  Faq,
  faqs,
  Formulario,
  CtaFinal,
} from "@/components/landing/sections";
import { SiteFooter } from "@/components/landing/site-footer";
import heroImage from "@/assets/hero.jpg.asset.json";

const title = "Biodescodificación Online en Chile | Sesión 1 a 1 con Mario Paredes";
const description =
  "Sesión online de biodescodificación 1 a 1 desde Santiago de Chile para descubrir el origen emocional de tus síntomas, ansiedad y patrones que se repiten. Agenda hoy.";
const ogImage = `${SITE_URL}${heroImage.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "es_CL" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#mario-paredes`,
              name: "Mario Paredes",
              jobTitle: "Acompañante en Biodescodificación",
              url: `${SITE_URL}/`,
              email: "mparedes@caminoalinconsciente.cl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santiago",
                addressCountry: "CL",
              },
              knowsAbout: [
                "Biodescodificación",
                "Descodificación biológica",
                "Acompañamiento emocional",
                "Patrones familiares",
              ],
              sameAs: [WHATSAPP_URL],
            },
            {
              "@type": "Service",
              "@id": `${SITE_URL}/#sesion`,
              name: "Sesión Online de Biodescodificación",
              serviceType: "Biodescodificación",
              description,
              provider: { "@id": `${SITE_URL}/#mario-paredes` },
              areaServed: [
                { "@type": "Country", name: "Chile" },
                { "@type": "Place", name: "Latinoamérica" },
              ],
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: CHECKOUT_URL,
                serviceLocation: { "@type": "VirtualLocation", url: `${SITE_URL}/` },
              },
              offers: {
                "@type": "Offer",
                price: "40000",
                priceCurrency: "CLP",
                url: CHECKOUT_URL,
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
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

      <Hero />
      <QueEs />
      <Problema />
      <Solucion />
      <Beneficios />
      <ComoFunciona />
      <Sobre />
      <VideoSection />
      <Precio />
      <Faq />
      <Formulario />
      <CtaFinal />
      <SiteFooter />

    </>
  );
}
