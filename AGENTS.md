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


## Presentation rules
- Keep shared brand colors in semantic tokens in src/styles.css so all content pages inherit the same identity.
- Keep the portrait CDN pointer as the source of its path and resolve it against the public Lovable asset host so external Vercel deployments can load it without a local asset proxy.
- Keep presentation edits separate from contact server functions so visual changes do not affect saved leads or email notifications.
