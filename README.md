# London Academy Student Resources

A static portal of approved learning platforms and resources for London
Academy students, with a homepage tailored to each learning stage. Designed
as the browser homepage for student Samsung tablets running Chrome inside
Knox kiosk mode. Built with Vite, React, TypeScript, React Router, and plain
CSS — no backend, database, authentication, or tracking.

## Routes

One deployed application serves three stage-specific homepages, plus a root
selector:

| Route               | Audience                              | Browser tab title                          |
| -------------------- | -------------------------------------- | ------------------------------------------- |
| `/`                   | Root — stage picker (teachers/testing) | `London Academy \| Student Resources`        |
| `/primary`            | Primary students                       | `London Academy \| Primary Resources`        |
| `/secondary/nc`       | Secondary students                     | `London Academy \| Secondary Resources`      |
| `/secondary/igcse`    | IGCSE students                         | `London Academy \| IGCSE Resources`          |

All three stage routes render the same reusable components — there are no
per-stage forks of the page. Each stage differs only in:

1. its centred heading/subtitle copy, and
2. which 12 resources appear in its **Quick Access** grid.

The complete **resource directory** (all 56 resources under all 8 categories)
is identical on every stage route — see "The directory is not filtered by
stage" below.

`/` is a **stage picker on first visit only**. Once a student picks a stage
there, or opens a stage route directly, that choice is remembered on that
tablet's Chrome profile and `/` will silently redirect straight to it on
every later visit — see "Remembering a student's stage" below. Every managed
tablet can therefore be configured with the same single homepage URL:
`https://students.elitelac.com/`.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`). Try `/`,
`/primary`, `/secondary/nc`, and `/secondary/igcse`, including a hard refresh
on each nested route.

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## How each stage page works

Every stage route is a simple two-level experience:

1. **Quick Access** (the default view) shows 12 compact, touch-friendly
   platform icons for that stage, arranged 6×2 on tablet-landscape and
   desktop widths, plus a **View All Resources** control below them.
2. Selecting **View All Resources** switches (in place, no page reload) to
   the **resource directory**: eight category cards covering all 56
   resources. Selecting a category expands a full-width panel underneath
   with that category's resource tiles, sorted alphabetically; selecting it
   again (or "Close category") collapses it. Only one category can be
   expanded at a time. The stage-aware **Back to \_\_\_ Resources** button
   returns to that stage's Quick Access.

Search is intentionally not part of this version — see "Search (reserved for
a later phase)" below.

## Remembering a student's stage

All stage/route logic lives in one place:
[`src/utils/stagePreference.ts`](src/utils/stagePreference.ts).

- Visiting `/` reads the stage preference from `localStorage`
  (key `lac-student-stage-v1`). If it holds a valid stage, `/` redirects
  straight to that stage's route using history **replacement**
  (`navigate(path, { replace: true })`), so the redirect doesn't leave an
  extra entry in browser history — pressing Back on a stage page goes to
  whatever was open before `/`, not into a `/` → stage → `/` loop. The
  chooser is never painted first; the redirect decision is made before the
  first render, so there's no flash of the chooser before it happens.
- If nothing is saved, `/` shows **Choose Your Learning Stage** as before.
- If the saved value isn't one of the three known stages, only that invalid
  entry is removed and the chooser is shown — the rest of `localStorage` is
  left untouched.
- **Picking a stage card** and **visiting a stage route directly** (e.g. a
  Knox homepage temporarily pointed at `/secondary/nc`, or a bookmark) both
  save that stage as the new preference — so a direct link becomes the
  tablet's remembered stage too. Both cases are handled by one effect in
  `StagePage`, not duplicated per entry point.
- Every `localStorage` read/write is wrapped in `try/catch`. If storage is
  blocked (private browsing, a locked-down profile, storage quota, etc.) the
  site keeps working — `/` just shows the chooser every visit instead of
  remembering a choice, and picking a stage still navigates normally.
- No cookies, accounts, authentication, or analytics are involved — this is
  a same-device convenience only, never a security or identity mechanism.

### Change Stage

Every stage page's header has a small **Change Stage** button next to the
stage name (top right). It removes the saved preference and sends the
student to `/`, which — since the preference is now gone — shows the
chooser immediately rather than redirecting back to the stage they just
left.

## Managing resources

All resource data lives in one file: [`src/data/resources.ts`](src/data/resources.ts).
There is no other copy of the resource list, and no per-stage copy, anywhere
in the app.

Each entry looks like:

```ts
{ slug: "scratch", name: "Scratch", url: "https://scratch.mit.edu/", category: "Coding & Technology" }
```

`slug` is a stable, unique identifier — it's how stage configs reference a
resource for Quick Access (see below) and it's the conventional local-icon
filename. It should rarely if ever change once a resource is live, since
stage configs point at it.

- **Add a resource** — add a new object to the `resources` array, under the
  correct category comment block, with a new unique `slug`. The directory
  re-sorts alphabetically within each category automatically; you don't need
  to insert it in any particular order.
- **Remove a resource** — delete its object from the array, and remove its
  slug from any stage's `quickAccessResourceIds` in
  [`src/data/stages.ts`](src/data/stages.ts) (see below).
- **Hide a resource** (keep it in the data file, e.g. for internal/support
  links, without showing it as a student tile) — add `hidden: true` to the
  entry. Hidden resources are excluded from the directory, category counts,
  and the visible tile count. A hidden resource cannot be referenced from a
  stage's Quick Access list.
- **Recategorize a resource** — change its `category` value to one of the
  values in the `ResourceCategory` type (also exported from the same file).
- **Add a brand-new category** — add it to the `ResourceCategory` union type
  and to the `CATEGORIES` array (which controls category-card order), then
  add a matching entry to `CATEGORY_META` in
  [`src/data/categoryMeta.tsx`](src/data/categoryMeta.tsx) (pick a Lucide
  icon and one of the theme color variables).

All URLs must use `https://`. URL fragments (e.g. `#animate`) are preserved
since the raw `url` string is used as the link's `href`.

### The directory is not filtered by stage

This is deliberate: every stage route's **View All Resources** directory
shows the same complete set of 56 resources under the same 8 categories.
There is no "primary"/"NC"/"IGCSE" tag on resource records, and none is
planned for the directory — only the 12 Quick Access icons change between
stages. If age/grade-appropriate directory filtering is wanted later, that's
a separate feature to design deliberately, not something to bolt on via ad
hoc tags.

### Changing a stage's Quick Access platforms

Quick Access is configured per stage in
[`src/data/stages.ts`](src/data/stages.ts), by referencing resource `slug`s —
never by duplicating a resource's name, URL, or category:

```ts
quickAccessResourceIds: [
  "toddle-tablet",
  "century",
  "canva",
  // ...
  "wayground",
],
```

- **Feature a platform on a stage** — add its slug to that stage's
  `quickAccessResourceIds`.
- **Remove a platform from a stage's Quick Access** — remove its slug from
  the array (the resource stays fully visible in the directory).
- **Reorder a stage's Quick Access** — reorder the slugs in the array; display
  order follows array order.
- Each stage currently lists exactly 12 slugs. `getResourcesBySlugs` (in
  `resources.ts`) throws immediately if a stage config references a slug that
  doesn't exist in `resources` — a fast, loud signal if a slug is mistyped or
  a resource was renamed without updating `stages.ts`.
- The same resource can appear in more than one stage's Quick Access (several
  currently do, e.g. `century`, `toddle-tablet`) — this is expected and does
  not duplicate the underlying resource record.

### Adding local platform icons

Each resource has an optional `icon` field for a locally stored image:

```ts
{ slug: "canva", name: "Canva", url: "https://www.canva.com/", category: "Creative Tools", icon: "/resource-icons/canva.png" }
```

Conventionally, name the file after the resource's `slug` and drop it under
[`public/resource-icons/`](public/resource-icons/) (create the folder if it
doesn't exist yet). Reference it with a `/`-rooted path. Quick Access cards:

- use `object-fit: contain` so logos are never cropped or stretched, with
  padding around them inside the card;
- fall back to the resource's **name as plain text** if `icon` is omitted or
  the image fails to load — never a broken-image icon;
- never fetch icons from the internet, hotlink them, or call an external
  favicon service.

If a resource appears in more than one stage's Quick Access, it uses the same
`icon` everywhere — set it once on the resource, not per stage.

### Search (reserved for a later phase)

A search bar component exists at
[`src/components/SearchBar.tsx`](src/components/SearchBar.tsx) but is not
currently imported or rendered anywhere — search and "safe research" tooling
are intentionally deferred to a later phase of this project.

## School logo and favicon

The header logo, browser favicon, and app icon all use one file:

```text
public/LAC_logo.png
```

Replace that file to change the logo — nothing else needs to change. If it's
ever missing, the header gracefully falls back to a green graduation-cap mark
instead of a broken image.

Don't stretch, recolor, or distort the logo — the header sizes it to roughly
58px tall via `object-fit: contain`, preserving its original aspect ratio.

## Theming

All brand colors are defined as CSS variables at the top of
[`src/styles.css`](src/styles.css) (`--color-navy`, `--color-emerald`,
`--color-gold`, etc.). Change the values there to re-theme the whole site.
The page background, header, and Quick Access/directory cards are white by
design, with London Academy green used for the stage heading, Quick Access
card borders, and accents.

## Deploy to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Vercel auto-detects the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

[`vercel.json`](vercel.json) rewrites every path to `/index.html` so that
direct visits and hard refreshes on `/primary`, `/secondary/nc`, and
`/secondary/igcse` are served by the React app (client-side routing) instead
of 404ing — this is required since the app uses real URL paths, not hash
routes. No environment variables, serverless functions, or backend services
are required — this is a fully static site.

## Connect `students.elitelac.com`

1. In the Vercel project, go to **Settings → Domains** and add
   `students.elitelac.com`.
2. Vercel will show a DNS record to create (typically a `CNAME` pointing
   `students` to `cname.vercel-dns.com`). Add that record with whichever
   provider manages the `elitelac.com` DNS.
3. Wait for DNS propagation — Vercel will mark the domain "Valid" once the
   record is detected, and will automatically issue an SSL certificate.

## Knox homepage assignment

Only **one** Chrome managed configuration is needed, for every school and
every learning stage:

```text
https://students.elitelac.com/
```

Assign this as the managed Chrome homepage for all device groups — Primary,
Lower Secondary/NC, and IGCSE alike. There's no need for separate Knox
configurations per stage:

1. On a tablet's first visit, the student sees **Choose Your Learning Stage**
   and picks theirs once.
2. That choice is saved in `localStorage` in that Chrome profile, on that
   tablet.
3. Every later visit to `/` — including the tablet's own homepage reopening —
   goes straight to the right stage automatically.
4. If Chrome data is cleared, the device is factory-reset, or a different
   Chrome profile is used, the saved choice is gone and the student sees the
   chooser again on the next visit to `/`.
5. If a student ends up on the wrong stage, they can use the **Change Stage**
   button in the header at any time to clear the saved choice and pick again
   — no need to clear Chrome data or reset the device.

A stage route (e.g. `https://students.elitelac.com/secondary/nc`) still works
if assigned directly instead — visiting it saves that stage as the
preference too, so it becomes the tablet's remembered stage from then on,
including future visits to `/`. This is useful for temporary per-device-group
Knox assignments during rollout, but is no longer required once every device
is pointed at the single root URL above.
