<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules
- The site is hosted on Vercel: server code must not depend on Lovable-only credentials (service role key, LOVABLE_API_KEY). Contact form inserts via the publishable key under an anon INSERT-only RLS policy; notification emails go through Resend (`RESEND_API_KEY`).
