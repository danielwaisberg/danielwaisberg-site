# danielwaisberg.com — Rebuild Plan (v3)

**From:** Wix Premium Light (€181/yr) · renewal **April**
**To:** Astro → GitHub → Cloudflare Pages (~€0/yr + existing domain)
**Domain/DNS:** GoDaddy — stays put, records repointed at cutover
**Site size:** homepage + 6 pages
**Nature of the site:** a CV, not a data-driven publication
**Environment:** GitHub Codespaces in the browser. Nothing installed locally.
**Must keep:** Google Analytics (GA4)

**Status:** Phases 0 and 1 complete. Currently at Phase 2.

---

## Guiding principles

1. **Nothing breaks until it's replaced.** Wix stays live and paid until the new site is verified on the real domain.
2. **Pipeline before pixels.** ✅ Done — the deploy loop works.
3. **Learn deliberately.** Understand each step, don't just paste it.
4. **The site is a document.** Favour longevity over cleverness.
5. **It's a CV, not a content platform.** Design and structure decisions should follow from that, not from blog-shaped defaults.

---

## Decisions made

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro** | Seven pages sharing a header/nav/footer; a shared layout means changing the nav once, not seven times |
| Host | **Cloudflare Pages** | Unlimited bandwidth, commercial use permitted, auto-detects Astro. Low lock-in — switching later is DNS plus a repo connection |
| Editor | **Codespaces** | Full terminal and live preview, nothing installed locally |
| Repo | **Public** | Part of the professional surface; also unlocks GitHub Pages as a fallback host |

---

## ✅ Phase 0 — Foundations *(complete)*

- [x] Wix renewal date: **April**
- [x] DNS records at GoDaddy checked; comfortable making the change
- [x] Current site archived
- [x] sitemap.xml saved — URL inventory in hand
- [x] GA4 Measurement ID noted → **needed in Phase 5**
- [x] Analytics deep-dive skipped by decision — this is a CV, not a traffic-optimised site
- [x] Inbound-links report skipped — pages and URLs are being kept

---

## ✅ Phase 1 — Pipeline *(complete)*

- [x] GitHub account confirmed personal
- [x] Repository created (public)
- [x] Codespace launches; `github.dev` and Codespaces both reachable on the network
- [x] Astro scaffolded — built in `temp-astro`, moved up with `dotglob`, `.git` verified intact
- [x] `npm run dev` previewing successfully
- [x] Committed and pushed
- [x] Cloudflare Pages connected; live on `*.pages.dev`
- [x] One branch + pull request done deliberately

**Habits to keep:**
- Stop the Codespace from github.com/codespaces when finishing a session — storage counts against quota even when stopped, so delete it between phases if there's a long gap
- Paste errors and build logs verbatim rather than paraphrasing
- Batch changes into meaningful commits rather than one per keystroke

**Still to do:** add `PLAN.md` (this file) to the repo, so the plan is version-controlled alongside the site.

---

## ▶ Phase 2 — Information architecture *(current)*

*Goal: decide what the site is for, before deciding what it looks like.*

### 2.1 — Write the one-sentence purpose

Answer briefly, in writing:

- Who lands here? Name the two or three real types of person.
- How did they arrive — search, a link in a bio, a conference programme, a colleague's recommendation?
- What should they leave knowing, or having done?
- What would make the site a failure even if it looked beautiful?

Compress into: *"This site exists so that [audience] can [do/understand] [what]."*

Every later decision gets tested against that sentence. Without it, IA choices default to taste, and taste can't be argued with.

### 2.2 — Content inventory

One row per page:

| URL | Page title | What it's for | Still true? | Verdict |
|---|---|---|---|---|

**Verdict:** Keep · Rewrite · Merge · Kill.

Default to Kill and make each page argue for its survival against the 2.1 sentence. Since traffic data is deliberately out of scope here, the sentence is the only arbiter — which is exactly why 2.1 comes first.

### 2.3 — Reduce

Seven pages is already lean; the question is whether it should be four or five. Watch for:

- A Contact page holding only an email address → fold into the footer and About
- Overlapping About / Bio / CV → almost always one page
- A page describing something you no longer do → Kill
- A near-dormant blog → Kill, or consolidate into a Writing index

Every page removed is one you never have to maintain, redesign, or feel guilty about.

### 2.4 — Structure and navigation

- **3–5 nav items.** More stops being navigable.
- **Label by what the reader wants**, not internal category. "Writing" beats "Content".
- **Order matters** — first and last positions get the most attention.
- **Decide what the homepage does:** a *directory* pointing onward, or a *destination* that stands alone. For a CV site, destination usually wins — most visitors read one page and leave.

### 2.5 — URL mapping

| Old URL | New URL | Action |
|---|---|---|

- **Match old paths wherever a page survives.** Free preservation of every existing link. Resist tidying URLs that already work.
- Moved page → note a 301 redirect.
- Killed page → redirect to the nearest relevant page if anything links to it; otherwise let it 404 honestly.
- Redirects live in a `_redirects` file that Cloudflare Pages reads.

**Phase 2 deliverables:** the sentence, the inventory with verdicts, the final sitemap, the URL mapping table. With those four, Phases 3–5 become execution rather than deliberation.

---

## Phase 3 — Content

- [ ] Rewrite the homepage — hardest, most important, most likely stale
- [ ] Bio in two lengths: long for the site, short for reuse elsewhere
- [ ] Update publications, talks, roles
- [ ] Verify every outbound link resolves
- [ ] Write page titles and meta descriptions deliberately
- [ ] Current photo; compress all images

---

## Phase 4 — Design

- [ ] Gather 3–5 reference sites and articulate *why* each works
- [ ] Typography first — on a CV site, type is most of the design
- [ ] Define type scale, spacing scale, 2–3 colours, link styling
- [ ] Build layouts: base, homepage, content page
- [ ] Mobile first
- [ ] One deliberate personality detail

---

## Phase 5 — Build

- [ ] Content into the repo as Markdown
- [ ] Implement layouts and styles
- [ ] **GA4 tag** in the shared layout, using the Phase 0 Measurement ID
- [ ] Privacy note covering analytics (Swiss revised FADP)
- [ ] Custom 404
- [ ] Favicon and social share image
- [ ] `sitemap.xml`, `robots.txt`, `_redirects`
- [ ] Contact method requiring no backend

---

## Phase 6 — Pre-launch QA

- [ ] Every link clicked
- [ ] Phone, wide desktop, second browser
- [ ] Lighthouse — a static CV site should score near-perfect
- [ ] Accessibility: contrast, alt text, heading order, keyboard navigation
- [ ] Link-preview test on LinkedIn
- [ ] Side-by-side against the archived PDFs
- [ ] GA firing on every page

---

## Phase 7 — Cutover

- [ ] Lower DNS TTL at GoDaddy to 5 minutes, 24–48h ahead
- [ ] Add custom domain in Cloudflare Pages; collect target records
- [ ] Update records at GoDaddy, replacing Wix's
- [ ] Verify: domain loads, HTTPS works, `www` and non-`www` both resolve
- [ ] Spot-check redirects against the Phase 2 mapping
- [ ] Wait 48 hours
- [ ] Restore TTL

---

## Phase 8 — Post-launch

- [ ] Cancel Wix — only now, and before the April renewal
- [ ] Resubmit sitemap; check crawl errors after a week
- [ ] Watch traffic 4–6 weeks against baseline
- [ ] `README.md`: how to edit, how to deploy — written for you-in-two-years
- [ ] Maintenance rhythm: twice a year, check links and refresh content

---

## Remaining effort

| Phase | Time |
|---|---|
| ~~0 — Foundations~~ | ✅ |
| ~~1 — Pipeline~~ | ✅ |
| **2 — Information architecture** | 2–3 hours |
| 3 — Content | the variable one |
| 4 — Design | 3–6 hours |
| 5 — Build | 4–6 hours |
| 6 — QA | 1–2 hours |
| 7 — Cutover | 30 min plus waiting |
| 8 — Post-launch | minimal |

Deadline April. Months of slack remain.
