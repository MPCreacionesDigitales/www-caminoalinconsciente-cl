/**
 * Configuración editable del sitio.
 */
export const CHECKOUT_URL = "https://pay.hotmart.com/E107122530K?off=bn5bjjlg";

export const SITE_URL = "https://caminoalinconsciente.cl";

export const WHATSAPP_NUMBER = "56990229732";

export const WHATSAPP_URL =
  "https://wa.me/56990229732?text=" +
  encodeURIComponent("Hola Mario, quiero agendar mi sesión de Biodescodificación.");

export const SITE = {
  name: "Sesión Online de Biodescodificación",
  price: "$40.000 CLP",
  // Pega aquí el enlace de tu video de YouTube (ej: "https://youtu.be/XXXXXXXXXXX")
  // y aparecerá automáticamente en la sección "¿Cómo es una sesión?".
  // Mientras esté vacío, se muestra un marco de reproductor de espera.
  youtubeEmbedUrl: "",
};

/** Convierte cualquier enlace de YouTube (watch, youtu.be, shorts) a formato embed. */
export function youtubeEmbedSrc(url: string): string {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
}
