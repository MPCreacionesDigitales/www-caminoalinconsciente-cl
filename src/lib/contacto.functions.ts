import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email().max(255),
  whatsapp: z.string().min(6).max(30),
  paginaDeOrigen: z.string().max(500).optional(),
  // Honeypot anti-spam: debe venir vacío
  website: z.string().max(0).optional(),
});


export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const raw = (data ?? {}) as Record<string, unknown>;
    const clean = Object.fromEntries(
      Object.entries(raw).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v]),
    );
    return contactoSchema.parse(clean);
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      nombre: data.nombre,
      correo: data.email,
      whatsapp: data.whatsapp,
      pagina_de_origen: data.paginaDeOrigen ?? null,
    });

    if (error) {
      console.error("[leads] error al guardar", error);
      throw new Error("No se pudo registrar tu solicitud");
    }

    return { ok: true as const };
  });
