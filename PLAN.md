# danielwaisberg.com — Rebuild Plan (v4)

**From:** Wix Premium Light (€181/yr) · renewal **April**
**To:** Astro → GitHub → Cloudflare Pages (~€0/yr + existing domain)
**Domain/DNS:** GoDaddy — records repointed at cutover
**Environment:** GitHub Codespaces in the browser. Nothing installed locally.
**Must keep:** Google Analytics (GA4)

**Status:** Phases 0, 1, 2 complete. Currently at Phase 3 — content.

---

## Purpose

> **This site is a standalone professional presence, independent of LinkedIn, for people evaluating me — recruiters, hiring executives, board nomination committees — who already know my name and want depth, evidence, and judgment that a profile page can't carry.**

Two consequences that drive every decision below:

1. **It must stand alone.** Assume no LinkedIn. Everything needed to evaluate a career must be here, including dates and role scaffolding.
2. **The reader is evaluating, not browsing.** The site must foreground the operator and leader, not only the advocate.

---

## Guiding principles

1. **Nothing breaks until it's replaced.** Wix stays live until the new site is verified on the real domain.
2. **Pipeline before pixels.** ✅ Done.
3. **Learn deliberately.** Understand each step.
4. **The site is a document.** Longevity over cleverness.
5. **Warmth yes, self-deprecation no.** The voice is the site's best asset and stays. But never undercut competence or willingness to engage. Be light about things that don't matter; be plain about things that do.
6. **Show, don't assert.** A full-room photo beats "audiences of over a thousand." A live dashboard beats "I work with data."

---

## Decisions made

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro** | Shared layout across pages; change the nav once |
| Host | **Cloudflare Pages** | Unlimited bandwidth, commercial use permitted, low lock-in |
| Editor | **Codespaces** | Full terminal and live preview, nothing installed locally |
| Repo | **Public** | Part of the professional surface |
| Structure | **7 pages → 5** | Organised by reader need, not artifact type |
| Contact page | **Removed** | Email in footer and on Home. A form plus a joke was working against its own purpose |
| Data page | **Kept, standalone** | Evidence of analytical ability, not a writing sample |

---

## ✅ Phase 0 — Foundations *(complete)*

Renewal April · DNS checked · site archived · sitemap saved · GA4 ID noted.

---

## ✅ Phase 1 — Pipeline *(complete)*

GitHub repo (public, personal account) · Codespace running · Astro scaffolded · Cloudflare Pages deploying on push · one branch + PR done deliberately · `PLAN.md` in the repo.

**Habits:** stop the Codespace when finishing a session; delete it if the gap is weeks. Paste errors verbatim.

---

## ✅ Phase 2 — Information architecture *(complete)*

### Final structure

| Page | Contains | URL |
|---|---|---|
| **Home** | Current role in the first sentence. The four-country arc. Two or three distinguishing claims. Languages. Email and LinkedIn visible. | `/` |
| **Work** | Reverse-chronological, leading with scope and outcome. **Dates on every role.** Education folded in at the end, keeping the Markov Chains thesis. | `/work` |
| **Writing** | The book, plus an article index that doesn't currently exist | `/book` |
| **Speaking** | Two YouTube series, 100+ conferences, languages, 3–4 evidential photos | `/videos` |
| **Data** | Dashboards, framed as a dated archive, ideally interactive | `/dataviz` |

Plus: **downloadable CV (PDF)** at a stable URL, linked from Home and Work. Recruiters and committees forward documents; LinkedIn can't be forwarded.

### URL map

| Old | New | Action |
|---|---|---|
| `/` | `/` | keep |
| `/work` | `/work` | keep |
| `/academic` | `/work` | **301** |
| `/book` | `/book` | keep — becomes Writing |
| `/videos` | `/videos` | keep |
| `/dataviz` | `/dataviz` | keep |
| `/contact` | `/` | **301** |

Every existing inbound link preserved. Two redirects in `_redirects`.

### Assets currently under-weighted

For an evaluating reader, these are buried and need promoting:

- **Founded, grew to 1M+ users, and sold Online Behavior (2022)** — currently one mid-page paragraph
- **Chair of Marketing, Web Analytics Association; Presidential Award (2010)** — governance-adjacent leadership, reads as a footnote
- **Led a cross-functional internal data platform** (engineering, legal, product) — a bullet
- **Published with Wiley (2015)**
- **Four languages: Portuguese, Hebrew, English, Spanish** — presents at conferences in all four. Currently absent from the site entirely.

---

## ▶ Phase 3 — Content *(current)*

**Method:** one Markdown file per page, in the repo, written in this order. Home last — it's a distillation of the others and can't be written before they exist.

### Order of work

1. **`/work`** — most raw material, mostly restructuring. Start here to build momentum.
2. **`/videos` (Speaking)** — assembly plus photo selection
3. **`/dataviz` (Data)** — audit links, then frame
4. **`/book` (Writing)** — assembly; the article index is the new work
5. **`/` (Home)** — last. Hardest. Distils everything above.
6. **CV PDF** — derived from finished Work content

### Per-page tasks

**Work**
- [ ] Add dates, titles, organisation and location to **every** role — the standalone requirement
- [ ] Restructure so each role leads with scope and outcome, not narrative
- [ ] Promote the Online Behavior sale to prominence
- [ ] Promote the WAA chairmanship and Presidential Award
- [ ] Fold in education; keep the Markov Chains thesis as a career through-line
- [ ] Cut the C.S. Lewis quote header
- [ ] Link to the CV PDF

**Speaking**
- [ ] Keep both YouTube series with what each was for
- [ ] State the languages plainly — no "almost perfectly"
- [ ] Select 3–4 photos as evidence: one wide full-room shot, one presenting mid-shot, ideally one visibly international venue
- [ ] Confirm photo rights — conference photographers often retain them

**Data**
- [ ] Verify every dashboard still loads (Data Studio → Looker Studio)
- [ ] Date each one explicitly; frame the page as an archive
- [ ] Static image by default, live dashboard behind a click — avoids the iframe cost on every pageview
- [ ] Check mobile behaviour on anything embedded

**Writing**
- [ ] Reframe the book: published with Wiley, 2015; point to current writing rather than dismissing it
- [ ] Build the article index — 100+ articles currently have no home
- [ ] Absorb the seven article links buried at the bottom of `/dataviz`
- [ ] Verify every outbound link resolves

**Home**
- [ ] Current role in the first sentence
- [ ] Keep the four-country arc — the site's strongest narrative device
- [ ] Two or three distinguishing claims, including languages
- [ ] Email visible; LinkedIn linked
- [ ] Strongest photo
- [ ] Cut the Mark Twain quote pattern

**All pages**
- [ ] Remove self-deprecation that undercuts competence or willingness to engage
- [ ] Page titles and meta descriptions, written deliberately
- [ ] Compress all images

---

## Phase 4 — Design

- [ ] Gather 3–5 reference sites; articulate *why* each works
- [ ] Typography first — on a CV site, type is most of the design
- [ ] Type scale, spacing scale, 2–3 colours, link styling
- [ ] Layouts: base, home, content page
- [ ] Mobile first
- [ ] One deliberate personality detail

---

## Phase 5 — Build

- [ ] Markdown into Astro layouts
- [ ] **GA4 tag** in the shared layout
- [ ] Privacy note (Swiss revised FADP) — required if dashboards are embedded
- [ ] Custom 404
- [ ] Favicon and social share image
- [ ] `sitemap.xml`, `robots.txt`, `_redirects` (the two 301s)
- [ ] Email in footer, no backend
- [ ] CV PDF at a stable path

---

## Phase 6 — Pre-launch QA

- [ ] Every link clicked
- [ ] Phone, wide desktop, second browser
- [ ] Lighthouse
- [ ] Accessibility: contrast, alt text, heading order, keyboard nav
- [ ] LinkedIn link-preview test
- [ ] Side-by-side against the archived PDFs
- [ ] GA firing on every page

---

## Phase 7 — Cutover

- [ ] Lower DNS TTL at GoDaddy to 5 min, 24–48h ahead
- [ ] Add custom domain in Cloudflare Pages; collect records
- [ ] Update records at GoDaddy
- [ ] Verify domain, HTTPS, `www` and non-`www`
- [ ] Spot-check both redirects
- [ ] Wait 48 hours, then restore TTL

---

## Phase 8 — Post-launch

- [ ] Cancel Wix — before the April renewal
- [ ] Resubmit sitemap; check crawl errors after a week
- [ ] `README.md` for future you
- [ ] Twice-yearly maintenance rhythm

---

## Remaining effort

| Phase | Time |
|---|---|
| ~~0, 1, 2~~ | ✅ |
| **3 — Content** | the long one — paced by writing, not code |
| 4 — Design | 3–6 hours |
| 5 — Build | 4–6 hours |
| 6 — QA | 1–2 hours |
| 7 — Cutover | 30 min plus waiting |
| 8 — Post-launch | minimal |

Deadline April.
