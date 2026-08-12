import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  nombre?: string;
  correo?: string;
  whatsapp?: string;
  paginaDeOrigen?: string;
  fecha?: string;
}

const NuevoLead = ({ nombre, correo, whatsapp, paginaDeOrigen, fecha }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>{`Nuevo contacto: ${nombre ?? "sin nombre"}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>Camino al Inconsciente</Text>
        <Heading style={h1}>Nuevo contacto desde la web</Heading>
        <Section style={card}>
          <Text style={row}>
            <span style={label}>Nombre:</span> {nombre ?? "—"}
          </Text>
          <Text style={row}>
            <span style={label}>Correo:</span>{" "}
            {correo ? <Link href={`mailto:${correo}`} style={link}>{correo}</Link> : "—"}
          </Text>
          <Text style={row}>
            <span style={label}>WhatsApp:</span>{" "}
            {whatsapp ? (
              <Link href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} style={link}>
                {whatsapp}
              </Link>
            ) : (
              "—"
            )}
          </Text>
          <Text style={row}>
            <span style={label}>Página de origen:</span> {paginaDeOrigen ?? "—"}
          </Text>
          <Text style={row}>
            <span style={label}>Fecha:</span> {fecha ?? "—"}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Responde pronto para agendar la sesión.</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: NuevoLead,
  subject: (data: Record<string, any>) =>
    `Nuevo contacto: ${data?.["nombre"] ?? "sin nombre"}`,
  displayName: "Nuevo contacto (lead)",
  previewData: {
    nombre: "María P.",
    correo: "maria@example.com",
    whatsapp: "+56 9 1234 5678",
    paginaDeOrigen: "https://caminoalinconsciente.cl/",
    fecha: "12-08-2026 10:24",
  },
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Helvetica, Arial, sans-serif" };
const container = { padding: "28px 24px", maxWidth: "560px" };
const eyebrow = {
  color: "#0f4c5c",
  fontSize: "12px",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 6px",
};
const h1 = { color: "#0f4c5c", fontSize: "22px", margin: "0 0 18px" };
const card = {
  backgroundColor: "#f5f7f6",
  borderLeft: "3px solid #c9a227",
  borderRadius: "8px",
  padding: "16px 18px",
};
const row = { color: "#22312f", fontSize: "15px", margin: "6px 0" };
const label = { color: "#5c6b68", fontWeight: 600 };
const link = { color: "#0f4c5c" };
const hr = { borderColor: "#e6eae9", margin: "22px 0 12px" };
const footer = { color: "#7b8785", fontSize: "12px", margin: 0 };
