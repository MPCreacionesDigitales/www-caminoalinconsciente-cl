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
      { property: "og:url", content: "https://caminoalinconsciente.cl/terminos-y-condiciones" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://caminoalinconsciente.cl/terminos-y-condiciones" }],
  }),
  component: () => (
    <LegalPage
      title="Términos y Condiciones"
      sections={[
        { heading: "El servicio", body: "La Sesión Online de Biodescodificación es un encuentro privado 1 a 1 realizado por videollamada." },
        { heading: "Compra y agendamiento", body: "La compra se realiza mediante Hotmart. Una vez confirmado el pago, recibirás un enlace a mi calendario para agendar el día y la hora de tu sesión. Tienes 15 días desde la compra para solicitar reembolso si lo necesitas." },
        { heading: "Reprogramación", body: "Si necesitas reprogramar una sesión ya agendada, escríbeme con la mayor anticipación posible por WhatsApp para coordinar una nueva fecha." },
        { heading: "Reembolsos", body: "Tienes 15 días desde la compra a través de Hotmart para solicitar reembolso. Pasado ese plazo, la sesión queda confirmada y no aplica devolución." },
        { heading: "Alcance", body: "El servicio es un acompañamiento emocional y no reemplaza tratamientos médicos ni psicológicos." },
      ]}
    />
  ),
});
