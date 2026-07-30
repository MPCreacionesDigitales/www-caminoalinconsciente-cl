import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/legal-page";

const title = "Política de Privacidad | Sesión Online de Biodescodificación";
const description =
  "Cómo se recopilan, usan y protegen los datos personales enviados a través del formulario de contacto del sitio.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidad" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidad" }],
  }),
  component: () => (
    <LegalPage
      title="Política de Privacidad"
      sections={[
        { heading: "Datos que recopilamos", body: "Nombre, correo electrónico y número de WhatsApp cuando completas el formulario de contacto." },
        { heading: "Uso de los datos", body: "Los datos se utilizan únicamente para responder consultas y coordinar la sesión. No se venden ni ceden a terceros." },
        { heading: "Pagos", body: "Los pagos se procesan en Hotmart. Los datos de pago son gestionados por dicha plataforma según sus propias políticas." },
        { heading: "Tus derechos", body: "Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo por WhatsApp o correo electrónico." },
      ]}
    />
  ),
});
