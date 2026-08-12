import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Mail, CalendarCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";
import { SiteFooter } from "@/components/landing/site-footer";
import logoAsset from "@/assets/logo-mario-paredes.png.asset.json";

const title = "¡Gracias por tu compra! | Sesión de Biodescodificación";
const description =
  "Tu compra fue aprobada. Revisa tu correo y escríbeme por WhatsApp para agendar el día y la hora de tu sesión online de Biodescodificación.";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://caminoalinconsciente-cl.lovable.app/gracias" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Gracias,
});

const pasos = [
  {
    icon: Mail,
    title: "Revisa tu correo",
    text: "Hotmart te envió el comprobante de compra. Si no lo ves, revisa la carpeta de spam o promociones.",
  },
  {
    icon: MessageCircle,
    title: "Escríbeme por WhatsApp",
    text: "Envíame un mensaje para coordinar el día y la hora que mejor te acomode.",
  },
  {
    icon: CalendarCheck,
    title: "Nos vemos en tu sesión",
    text: "Recibirás el enlace de la videollamada y una breve guía para prepararte.",
  },
];

function Gracias() {
  return (
    <>
      <header className="border-b border-border/60 bg-background">
        <div className="section-shell flex items-center py-4">
          <a href="/" className="inline-flex items-center" aria-label="Inicio">
            <img
              src={logoAsset.url}
              alt="Mario Paredes Biodescodificación"
              className="h-9 max-w-[12rem] object-contain"
              loading="eager"
            />
          </a>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="section-shell max-w-3xl text-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-9" aria-hidden="true" />
          </span>
          <h1 className="mt-8 text-3xl leading-tight font-medium sm:text-4xl">
            ¡Tu compra fue aprobada!
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Gracias por dar este paso. Ya tienes reservada tu Sesión Online de Biodescodificación:
            solo falta coordinar el día y la hora.
          </p>

          <ol className="mt-12 grid gap-5 text-left sm:grid-cols-3">
            {pasos.map((paso, i) => (
              <li
                key={paso.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <paso.icon className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm font-medium">
                  {i + 1}. {paso.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paso.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-9 text-base font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Agendar por WhatsApp
            </a>
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
