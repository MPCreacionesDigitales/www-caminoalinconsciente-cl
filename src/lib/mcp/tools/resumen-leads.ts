import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { isOwner, notOwnerResult } from "../owner";

export default defineTool({
  name: "resumen_leads",
  title: "Resumen de contactos",
  description:
    "Entrega un resumen de los contactos recibidos: total histórico y total en los últimos N días. Solo para la persona dueña del sitio.",
  inputSchema: {
    dias: z.number().int().min(1).max(365).default(7).describe("Ventana de días para el conteo reciente."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ dias }, ctx) => {
    if (!isOwner(ctx)) return notOwnerResult();

    const ventana = dias ?? 7;
    const desde = new Date(Date.now() - ventana * 24 * 60 * 60 * 1000).toISOString();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const total = await supabaseAdmin.from("leads").select("id", { count: "exact", head: true });
    if (total.error) {
      return { content: [{ type: "text", text: total.error.message }], isError: true };
    }

    const recientes = await supabaseAdmin
      .from("leads")
      .select("id", { count: "exact", head: true })
      .gte("fecha_de_registro", desde);
    if (recientes.error) {
      return { content: [{ type: "text", text: recientes.error.message }], isError: true };
    }

    const resumen = {
      total: total.count ?? 0,
      ultimos_dias: ventana,
      total_ultimos_dias: recientes.count ?? 0,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(resumen, null, 2) }],
      structuredContent: resumen,
    };
  },
});
