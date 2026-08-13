import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/legal-page";

const title = "Aviso Legal | Sesión Online de Biodescodificación";
const description =
  "Aviso legal del sitio de la Sesión Online de Biodescodificación: titularidad, uso del sitio y limitación de responsabilidad.";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/aviso-legal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: () => (
    <LegalPage
      title="Aviso Legal"
      sections={[
        { heading: "Objeto del sitio", body: "Este sitio ofrece información sobre la Sesión Online de Biodescodificación y permite reservarla mediante la plataforma de pago Hotmart." },
        { heading: "Naturaleza del servicio", body: "La biodescodificación es un acompañamiento emocional y no sustituye diagnóstico, tratamiento ni indicación médica o psicológica profesional." },
        { heading: "Limitación de responsabilidad", body: "El titular no se responsabiliza por decisiones tomadas por el usuario a partir del contenido de este sitio." },
      ]}
    />
  ),
});
