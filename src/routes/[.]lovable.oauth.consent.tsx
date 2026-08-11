import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = { redirect_url?: string; redirect_to?: string; client?: { name?: string } | null } | null;
type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthResult; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthResult; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthResult; error: { message: string } | null }>;
};
const oauthApi = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id");
    if (!authorizationId) throw new Error("Falta authorization_id");
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return { needsAuth: true as const, details: null };
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return { needsAuth: false as const, details: data };
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-md p-10 text-center">
      <h1 className="text-xl font-semibold">No se pudo cargar la solicitud</h1>
      <p className="mt-2 text-muted-foreground">{String((error as Error)?.message ?? error)}</p>
    </main>
  ),
});

function Consent() {
  const { needsAuth, details } = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn() {
    setBusy(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href },
    });
    if (error) {
      setBusy(false);
      setError(error.message);
    }
  }

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("El servidor de autorización no devolvió una URL de retorno.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-8">
      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">
          Conectar {details?.client?.name ?? "una aplicación"} a Inner Harmony Sessions
        </h1>
        <p className="mt-3 text-muted-foreground">
          {needsAuth
            ? "Inicia sesión para autorizar esta conexión."
            : `Esto permite que ${details?.client?.name ?? "la aplicación"} use las herramientas de este sitio en tu nombre. No omite las políticas de acceso a los datos.`}
        </p>
        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}
        <div className="mt-6 flex gap-3">
          {needsAuth ? (
            <button
              disabled={busy}
              onClick={signIn}
              className="rounded-lg bg-primary px-5 py-2.5 text-primary-foreground disabled:opacity-60"
            >
              {busy ? "Redirigiendo…" : "Iniciar sesión con Google"}
            </button>
          ) : (
            <>
              <button
                disabled={busy}
                onClick={() => decide(true)}
                className="rounded-lg bg-primary px-5 py-2.5 text-primary-foreground disabled:opacity-60"
              >
                {busy ? "Procesando…" : "Aprobar"}
              </button>
              <button
                disabled={busy}
                onClick={() => decide(false)}
                className="rounded-lg border px-5 py-2.5 disabled:opacity-60"
              >
                Cancelar conexión
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
