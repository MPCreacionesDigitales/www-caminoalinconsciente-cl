import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, SITE } from "@/lib/site-config";
import logoAsset from "@/assets/logo-mario-paredes.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="/" aria-label="Inicio">
            <img
              src={logoAsset.url}
              alt="Mario Paredes Biodescodificación"
              className="h-9 max-w-[12rem] object-contain"
              loading="lazy"
            />
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Acompañamiento privado para comprender el origen emocional y biológico de lo que hoy
            te limita.
          </p>
        </div>
        <nav aria-label="Legal" className="text-sm">
          <p className="font-medium">Legal</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link to="/aviso-legal" className="transition-colors hover:text-foreground">Aviso Legal</Link></li>
            <li><Link to="/politica-de-privacidad" className="transition-colors hover:text-foreground">Política de Privacidad</Link></li>
            <li><Link to="/terminos-y-condiciones" className="transition-colors hover:text-foreground">Términos y Condiciones</Link></li>
          </ul>
        </nav>
        <div className="text-sm">
          <p className="font-medium">Contacto</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Instagram className="size-4" aria-hidden="true" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Facebook className="size-4" aria-hidden="true" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
