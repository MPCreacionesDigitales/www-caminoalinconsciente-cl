import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const trimmed = (max: number) =>
  z.string().max(max + 50).transform((v) => v.trim());

const contactoSchema = z.object({
  nombre: trimmed(100).pipe(z.string().min(2).max(100)),
  email: trimmed(255).pipe(z.string().email().max(255)),
  whatsapp: trimmed(30).pipe(z.string().min(6).max(30)),
  paginaDeOrigen: trimmed(500).pipe(z.string().max(500)).optional(),
  // Honeypot anti-spam: debe venir vacío
  website: z.string().max(0).optional(),
});


export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactoSchema.parse(data))
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
