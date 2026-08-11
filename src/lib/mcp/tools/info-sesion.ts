import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "info_sesion",
  title: "Información de la sesión",
  description:
    "Devuelve la información pública de la Sesión Online de Biodescodificación: nombre, precio y enlaces de compra y contacto.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { SITE, CHECKOUT_URL, WHATSAPP_URL } = await import("@/lib/site-config");
    const info = {
      nombre: SITE.name,
      precio: SITE.price,
      modalidad: "Sesión online individual por videollamada",
      checkout_url: CHECKOUT_URL,
      whatsapp_url: WHATSAPP_URL,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
