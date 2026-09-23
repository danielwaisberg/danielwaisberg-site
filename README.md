# danielwaisberg.com

Source for [danielwaisberg.com](https://danielwaisberg.com) — a static site built with [Astro](https://astro.build) and served by Cloudflare Workers.

## Structure

```
content/          the five pages, in Markdown — where editing happens
public/           served as-is: images, CV, favicon, robots.txt, _redirects
src/layouts/      Base.astro: header, nav, footer, head metadata
src/pages/        one file per route, each importing a Markdown file
src/styles/       global.css
```

## Editing

Edit a file in `content/`, preview, commit, push. Every push to `main` deploys automatically.

```
npm install      # first time only
npm run dev      # local preview
```

## Conventions

- One `#` heading per page.
- Leave a blank line after any HTML tag in Markdown, or the text that follows disappears.
- Images go in `public/images/` and are referenced as `/images/name.jpg`.
- Canonical URLs are non-www with no trailing slash; the settings in `astro.config.mjs` and `wrangler.jsonc` must agree.
