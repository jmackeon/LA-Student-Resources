# London Academy Student Resources

A static, single-page portal of approved learning platforms and resources for
London Academy students. Designed as the browser homepage for student Samsung
tablets running Chrome inside Knox kiosk mode. Built with Vite, React,
TypeScript, and plain CSS — no backend, database, authentication, or tracking.

## How the homepage works

The homepage is category-first: it shows eight large category cards (not all
57 resources at once). Tapping a card expands a full-width panel underneath
with that category's resource tiles; tapping it again (or "Close category")
collapses it. Only one category can be expanded at a time. A "View all 57
resources" link beneath the cards shows every resource grouped under its
category heading, for students who want to browse everything at once.

Typing in the search bar searches all 57 resources (by name, domain, and
category) regardless of which category is open, and shows matching tiles
grouped by category. Clearing the search returns to the category overview and
restores whichever category was previously expanded.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Managing resources

All resource data lives in one file: [`src/data/resources.ts`](src/data/resources.ts).
There is no other copy of the resource list anywhere in the app.

Each entry looks like:

```ts
{ name: "Scratch", url: "https://scratch.mit.edu/", category: "Coding & Technology" }
```

- **Add a resource** — add a new object to the `resources` array, under the
  correct category comment block. The grid re-sorts alphabetically within
  each category automatically; you don't need to insert it in any particular
  order.
- **Remove a resource** — delete its object from the array.
- **Hide a resource** (keep it in the data file, e.g. for internal/support
  links, without showing it as a student tile) — add `hidden: true` to the
  entry. Hidden resources are excluded from the grid, search results,
  category counts, and the visible tile count.
- **Recategorize a resource** — change its `category` value to one of the
  values in the `ResourceCategory` type (also exported from the same file).
- **Add a brand-new category** — add it to the `ResourceCategory` union type
  and to the `CATEGORIES` array (which controls category-card and
  grouped-listing order), then add a matching entry to `CATEGORY_META` in
  [`src/data/categoryMeta.tsx`](src/data/categoryMeta.tsx) (pick a Lucide
  icon and one of the theme color variables).

All URLs must use `https://`. URL fragments (e.g. `#animate`) are preserved
since the raw `url` string is used as the link's `href`.

## School logo

Place the school logo at:

```text
public/logo.png
```

It will be served from `/logo.png` and picked up automatically — no code
changes needed. If the file is missing, the header gracefully falls back to
a text/icon mark instead of a broken image.

## Favicon

A placeholder favicon is included at [`public/favicon.svg`](public/favicon.svg)
(a simple navy square with a gold "LA" mark) so the site never ships with a
broken or default icon. Replace that file with the school's real favicon
whenever one is available — no other changes are required.

## Theming

All brand colors are defined as CSS variables at the top of
[`src/styles.css`](src/styles.css) (`--color-navy`, `--color-emerald`,
`--color-gold`, etc.). Change the values there to re-theme the whole site.

## Deploy to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Vercel auto-detects the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

No environment variables, serverless functions, or backend services are
required — this is a fully static site.

## Connect `students.elitelac.com`

1. In the Vercel project, go to **Settings → Domains** and add
   `students.elitelac.com`.
2. Vercel will show a DNS record to create (typically a `CNAME` pointing
   `students` to `cname.vercel-dns.com`). Add that record with whichever
   provider manages the `elitelac.com` DNS.
3. Wait for DNS propagation — Vercel will mark the domain "Valid" once the
   record is detected, and will automatically issue an SSL certificate.
