import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { isOwner, notOwnerResult } from "../owner";

export default defineTool({
  name: "listar_leads",
  title: "Listar contactos",
  description:
    "Lista los contactos (leads) recibidos desde el formulario del sitio: nombre, correo, WhatsApp, fecha de registro y página de origen. Solo para la persona dueña del sitio.",
  inputSchema: {
    limite: z.number().int().min(1).max(100).default(20).describe("Cantidad máxima de contactos a devolver."),
    buscar: z.string().optional().describe("Texto opcional para filtrar por nombre o correo."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limite, buscar }, ctx) => {
    if (!isOwner(ctx)) return notOwnerResult();

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let query = supabaseAdmin
      .from("leads")
      .select("id, nombre, correo, whatsapp, fecha_de_registro, pagina_de_origen")
      .order("fecha_de_registro", { ascending: false })
      .limit(limite ?? 20);

    if (buscar) query = query.or(`nombre.ilike.%${buscar}%,correo.ilike.%${buscar}%`);

    const { data, error } = await query;
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
      structuredContent: { total: data?.length ?? 0, leads: data ?? [] },
    };
  },
});
