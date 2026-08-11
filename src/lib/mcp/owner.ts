import type { ToolContext } from "@lovable.dev/mcp-js";

/** Correos autorizados a consultar los datos privados (leads) por MCP. */
const OWNER_EMAILS = [
  "contacto@caminoalinconsciente.cl",
  "mario.paredesc1989@gmail.com",
];

export function isOwner(ctx: ToolContext): boolean {
  if (!ctx.isAuthenticated()) return false;
  const email = ctx.getUserEmail()?.trim().toLowerCase();
  return !!email && OWNER_EMAILS.includes(email);
}

export function notOwnerResult() {
  return {
    content: [
      {
        type: "text" as const,
        text: "No autorizado: solo la persona dueña del sitio puede consultar los contactos.",
      },
    ],
    isError: true,
  };
}
