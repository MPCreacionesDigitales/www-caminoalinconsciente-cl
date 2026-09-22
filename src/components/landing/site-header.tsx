import { Link } from "@tanstack/react-router";
import { CtaButton } from "./cta-button";
import logoAsset from "@/assets/logo-camino-inconsciente.png.asset.json";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="section-shell flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:py-4">
        <a href="/" className="flex min-w-0 items-center" aria-label="Inicio">
          <img
            src={logoAsset.url}
            alt="Mario Paredes · Biodescodificación"
            className="h-9 w-auto max-w-[11rem] object-contain sm:h-10 sm:max-w-[14rem]"
            loading="eager"
          />
        </a>
        <div className="flex shrink-0 items-center">
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
