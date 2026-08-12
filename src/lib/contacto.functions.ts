import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string(),
  email: z.string(),
  whatsapp: z.string(),
  paginaDeOrigen: z.string().optional(),
  // Honeypot anti-spam: debe venir vacío
  website: z.string().optional(),
});

function validateAndClean(data: unknown) {
  const raw = (data ?? {}) as Record<string, unknown>;
  const clean = Object.fromEntries(
    Object.entries(raw).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v]),
  ) as Record<string, string | undefined>;

  const nombre = (clean.nombre ?? "").trim();
  const email = (clean.email ?? "").trim();
  const whatsapp = (clean.whatsapp ?? "").trim();
  const paginaDeOrigen = clean.paginaDeOrigen ? clean.paginaDeOrigen.trim().slice(0, 500) : undefined;
  const website = clean.website ? clean.website.trim() : "";

  if (nombre.length < 2 || nombre.length > 100) throw new Error("Ingresa tu nombre");
  if (!email.includes("@") || email.length > 255) throw new Error("Ingresa un correo válido");
  if (whatsapp.length < 6 || whatsapp.length > 30) throw new Error("Ingresa un número válido");
  if (website.length > 0) throw new Error("Spam detectado");

  return contactoSchema.parse({
    nombre,
    email,
    whatsapp,
    paginaDeOrigen,
    website,
  });
}

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => validateAndClean(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .insert({
        nombre: data.nombre,
        correo: data.email,
        whatsapp: data.whatsapp,
        pagina_de_origen: data.paginaDeOrigen ?? null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[leads] error al guardar", error);
      throw new Error("No se pudo registrar tu solicitud");
    }

    // Aviso por correo — nunca debe romper el registro del lead.
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("nuevo-lead", "contacto@caminoalinconsciente.cl", {
        templateData: {
          nombre: data.nombre,
          correo: data.email,
          whatsapp: data.whatsapp,
          paginaDeOrigen: data.paginaDeOrigen ?? "—",
          fecha: new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" }),
        },
        idempotencyKey: `nuevo-lead-${lead?.id ?? data.email}`,
      });
    } catch (e) {
      console.error("[leads] no se pudo enviar el aviso por correo", e);
    }

    return { ok: true as const };
  });

