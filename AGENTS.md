# Portfolio deployment handoff

## Objective

Deploy this developer portfolio as the production site through **Vercel**. The repository is already connected to GitHub:

- Repository: `https://github.com/coldgeon/portfolio.git`
- Branch: `main`
- Current pushed commit: `0dc2954`

Use Vercel rather than GitHub Pages. The site uses Next.js App Router with Intercepting Routes and Parallel Routes so static-only hosting is not the intended deployment target.

## Project setup

- Framework: Next.js 16, App Router, TypeScript, MDX
- Package manager: pnpm 11
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Production command: `pnpm start`

`next.config.mjs` already configures MDX. The build script uses Webpack because the local Windows environment had an MDX/Turbopack worker compatibility issue. Do not remove `--webpack` from the build script.

No database, API key, authentication service, or Notion runtime integration is required for the first production deployment.

## Vercel deployment steps

1. Sign in to a Vercel account owned by the portfolio owner.
2. Import `coldgeon/portfolio` from GitHub.
3. Keep the detected **Next.js** framework preset.
4. Use the install and build commands above.
5. Create the production deployment from `main`.
6. After Vercel assigns the production URL, set `NEXT_PUBLIC_SITE_URL` to that exact `https://` URL in Vercel Production environment variables and redeploy. This makes canonical URLs, sitemap, and Open Graph metadata use the real domain.
7. Leave Git integration enabled so future pushes to `main` deploy automatically and pull requests receive preview URLs.

Do not use an unauthenticated temporary deployment. Create the project under the owner’s Vercel account.

## Content and publishing scope

The user has asked to publish the site with the content currently in the repository. This includes the public GitHub link, email address, phone number, profile photo, project images, certificate images, award images, and Nextify presentation PDF.

Do not alter, remove, or add contact details, project claims, awards, certificates, or evidence as part of deployment work. Do not introduce analytics, tracking, forms, third-party SDKs, environment secrets, or a database.

AI Org Simulation is intentionally marked **정리 중**. Its card remains visible on the home page, but its detail page and direct URL must stay unavailable (404) until the content is complete.

## Required checks before publishing

Run these from the repository root:

```sh
pnpm build
pnpm test:e2e
```

After Vercel deploys, verify:

- `/` loads and the selected-projects cards display correctly.
- `/projects/nextify`, `/projects/alarm-u`, and `/projects/replendar` load as standalone pages.
- Opening those projects from the home page opens the URL-backed modal and browser back closes it.
- `/projects/ai-org-simulation` returns 404.
- The Nextify PDF and public image evidence load.
- Mobile layout at approximately 390px has no horizontal overflow.

## Git workflow

Keep `main` as the production branch. Do not rewrite the existing Git history. Commit any deployment-related source change with a clear message and push it to `origin main` after the checks pass.
