import { CtaButton } from "./cta-button";
import { MINI_APP_URL } from "@/lib/site-config";
import logoAsset from "@/assets/logo-camino-inconsciente.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="section-shell flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:py-4">
        <a href="/" className="flex min-w-0 items-center" aria-label="Inicio">
          <img
            src={logoAsset}
            alt="Mario Paredes · Biodescodificación"
            className="h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[14rem]"
            loading="eager"
          />
        </a>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <CtaButton
            variant="outline"
            size="md"
            href={MINI_APP_URL}
            className="px-4 text-center text-xs sm:px-6 sm:text-sm"
          >
            Test y Diccionario de Enfermedades
          </CtaButton>
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
