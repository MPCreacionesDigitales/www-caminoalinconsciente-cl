import { auth, defineMcp } from "@lovable.dev/mcp-js";
import infoSesionTool from "./tools/info-sesion";
import listarLeadsTool from "./tools/listar-leads";
import resumenLeadsTool from "./tools/resumen-leads";

const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "inner-harmony-sessions",
  title: "Inner Harmony Sessions",
  version: "0.1.0",
  instructions:
    "Herramientas de la landing de la Sesión Online de Biodescodificación. Usa `info_sesion` para datos públicos (precio, checkout, WhatsApp) y `listar_leads` / `resumen_leads` para revisar los contactos recibidos desde el formulario (solo la persona dueña del sitio).",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [infoSesionTool, listarLeadsTool, resumenLeadsTool],
});
