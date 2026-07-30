import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/legal-page";

const title = "Términos y Condiciones | Sesión Online de Biodescodificación";
const description =
  "Condiciones de compra, agendamiento, reprogramación y alcance de la Sesión Online de Biodescodificación.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terminos-y-condiciones" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terminos-y-condiciones" }],
  }),
  component: () => (
    <LegalPage
      title="Términos y Condiciones"
      sections={[
        { heading: "El servicio", body: "La Sesión Online de Biodescodificación es un encuentro privado 1 a 1 realizado por videollamada." },
        { heading: "Compra y agendamiento", body: "La compra se realiza mediante Hotmart. Una vez confirmado el pago, podrás agendar el día y la hora de tu sesión." },
        { heading: "Reprogramación", body: "[Indica aquí con cuánta anticipación se puede reprogramar una sesión.]" },
        { heading: "Reembolsos", body: "[Indica aquí tu política de reembolso, considerando también las condiciones de Hotmart.]" },
        { heading: "Alcance", body: "El servicio es un acompañamiento emocional y no reemplaza tratamientos médicos ni psicológicos." },
      ]}
    />
  ),
});
