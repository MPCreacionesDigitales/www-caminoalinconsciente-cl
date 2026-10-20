import { CtaButton } from "./cta-button";
import { MINI_APP_URL } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="section-shell flex flex-wrap items-center justify-end gap-x-4 gap-y-2 py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-end gap-2">
          <CtaButton
            variant="outline"
            size="md"
            href={MINI_APP_URL}
            className="px-4 text-center text-xs sm:px-6 sm:text-sm"
          >
            Diccionario de Enfermedades
          </CtaButton>
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
