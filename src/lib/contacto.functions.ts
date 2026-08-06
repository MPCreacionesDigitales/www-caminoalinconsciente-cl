import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().min(6).max(30),
});

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactoSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contactos").insert({
      nombre: data.nombre,
      email: data.email,
      whatsapp: data.whatsapp,
    });

    if (error) {
      console.error("[contacto] error al guardar", error);
      throw new Error("No se pudo registrar tu solicitud");
    }

    return { ok: true as const };
  });
