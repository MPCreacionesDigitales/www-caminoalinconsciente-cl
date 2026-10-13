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
    // Cliente con llave pública: funciona en cualquier hosting (Vercel incluido).
    // La base de datos solo permite INSERTAR contactos, nunca leerlos.
    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"] || import.meta.env.VITE_SUPABASE_URL;
    const key =
      process.env["SUPABASE_PUBLISHABLE_KEY"] ||
      process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Configuración incompleta del servidor");

    const supabase = createClient(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_")) {
            headers.set("apikey", key);
            if (headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
          }
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("leads").insert({
      nombre: data.nombre,
      correo: data.email,
      whatsapp: data.whatsapp,
      pagina_de_origen: data.paginaDeOrigen ?? null,
    });

    if (error) {
      console.error("[leads] error al guardar", error);
      throw new Error("No se pudo registrar tu solicitud");
    }

    // Aviso por correo — nunca debe romper el registro del lead.
    try {
      const { enviarAvisoResend } = await import("@/lib/aviso-resend");
      await enviarAvisoResend({
        nombre: data.nombre,
        correo: data.email,
        whatsapp: data.whatsapp,
        paginaDeOrigen: data.paginaDeOrigen ?? "—",
      });
    } catch (e) {
      console.error("[leads] no se pudo enviar el aviso por correo", e);
    }

    return { ok: true as const };
  });

