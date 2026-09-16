# Design fixes — what to change and why

Two files to replace, then edits to three Markdown files.

---

## Part 1 — replace two files

```
src/styles/global.css     → replace
src/layouts/Base.astro    → replace
```

**What changed in them:**

- Page-specific heading colours, with higher specificity so they reliably win
- `.tagline` style for the homepage subtitle
- Rust pull-quote treatment for blockquotes on Home and Data only — Work keeps grey, for the Dickinson poem and the thesis abstract
- `img.float` and `img.float.cover` for floated images
- `hr` and `blockquote` now `clear: both`, so floats end cleanly without any markup in your content
- localStorage removed from the dark mode toggle, as you asked. It still defaults to the visitor's OS setting; the toggle now lasts for the page view only.

---

## Part 2 — why your text vanished

**This is the thing worth understanding, because it will bite again.**

In Markdown, an HTML block runs until the next **blank line**. If you write:

```html
<div class="langs">
  ...
</div>
Four countries, four languages. I work in...
```

…that last sentence gets swallowed into the HTML block and never renders. It looks like it disappeared.

The fix is a blank line after `</div>`:

```html
<div class="langs">
  ...
</div>

Four countries, four languages. I work in...
```

Same rule applies after a raw `<img>` or any other HTML tag. **Always leave a blank line after an HTML tag** if Markdown follows it.

---

## Part 3 — `content/home.md`

**a. Add the tagline and move the portrait up.** Directly under the H1:

```html
# Hey there. I'm Daniel Waisberg.

<p class="tagline">Making data available and useful at scale</p>

<img class="float" src="/images/daniel-waisberg.jpg" alt="Daniel Waisberg smiling at a Google developer relations conference">
```

Then **delete** the old image line further down:
```
![Daniel Waisberg smiling](/images/daniel-waisberg.jpg)
```

**b. Make the second paragraph a pull quote.** Put `> ` at the start of it — the paragraph beginning "Most of what I do comes back to the same thing". One character plus a space.

```markdown
> Most of what I do comes back to the same thing: making data available and useful at scale. Finding the right data for the right question, then presenting it so that someone can act on it. That's been the through-line since my master's thesis, which used Markov chains to model how people move through websites — pages as states, visits as transitions. Twenty years later, it's still roughly the problem I work on.
```

That's it — no closing markup needed. The blockquote and the `---` divider below it both clear the floating image automatically.

**c. The languages block, with the sentence kept.** Replace the "Four countries, four languages…" paragraph with:

```html
<div class="langs">
  <div class="label">Four countries, four languages</div>
  <div class="list"><span lang="pt">Português</span><i>/</i><span lang="he">עברית</span><i>/</i><span lang="en">English</span><i>/</i><span lang="es">Español</span></div>
</div>
```

```markdown
Four countries, four languages. I work in Portuguese, Hebrew, English and Spanish, and present at conferences in all of them - which is less a party trick than a way of noticing that the same idea needs to be framed differently depending on who's in the room.
```

**Note the blank line between them.** That's what was missing before.

---

## Part 4 — `content/writing.md`

**a.** Replace the Search Central screenshot:
```
![Google Search developer documentation profile](/images/google-search-central-profile.png)
```
with:
```html
<img class="float" src="/images/google-search-central-profile.png" alt="Daniel Waisberg author profile on the Google Search Central blog">
```

**b.** Replace the book cover:
```
![Google Analytics Integrations book cover](/images/google-analytics-integrations-cover.png)
```
with:
```html
<img class="float cover" src="/images/google-analytics-integrations-cover.png" alt="Cover of Google Analytics Integrations, published by Wiley">
```

The extra `cover` class makes it narrower — 170px rather than 220px — because a book cover at the same width as a screenshot looks oversized.

---

## Part 5 — `content/data.md`

Make the second paragraph a pull quote — the one starting "I built them while on the Google Analytics team". Add `> ` at the start.

---

## Part 6 — run and push

```
npm run dev
```

Check: tagline under the H1, portrait floating left, rust-bordered pull quote, languages strip with the sentence below it, four cards, olive headings on every page, floated images on Writing.

Then:

```
git add .
git commit -m "Restore design details across all pages"
git push
```
