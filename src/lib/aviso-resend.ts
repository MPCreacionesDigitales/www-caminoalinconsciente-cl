// Aviso por correo de nuevos contactos vía Resend. Solo servidor.
// Si falta RESEND_API_KEY, no hace nada (el contacto igual queda guardado).

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function enviarAvisoResend(datos: {
  nombre: string;
  correo: string;
  whatsapp: string;
  paginaDeOrigen: string;
}) {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    console.warn("[aviso] RESEND_API_KEY no configurada; se omite el correo");
    return;
  }
  const fecha = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
  const filas = [
    ["Nombre", datos.nombre],
    ["Correo", datos.correo],
    ["WhatsApp", datos.whatsapp],
    ["Página", datos.paginaDeOrigen],
    ["Fecha", fecha],
  ]
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#555"><b>${k}</b></td><td style="padding:6px 12px">${escapar(v)}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Camino al Inconsciente <avisos@caminoalinconsciente.cl>",
      to: ["contacto@caminoalinconsciente.cl"],
      reply_to: datos.correo,
      subject: `Nuevo contacto: ${datos.nombre}`,
      html: `<div style="font-family:Arial,sans-serif"><h2 style="color:#1f4e5a">Nuevo contacto desde la web</h2><table>${filas}</table></div>`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend [${res.status}]: ${await res.text()}`);
  }
}
