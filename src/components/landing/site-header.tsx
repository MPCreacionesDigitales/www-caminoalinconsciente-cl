import { CtaButton } from "./cta-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="section-shell flex flex-wrap items-center justify-end gap-x-4 gap-y-2 py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-end gap-2">
          <CtaButton size="md" className="shrink-0">
            Agendar
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
