# course-hub — Build Spec for Antigravity

**Repo:** https://github.com/PC-Master-Race/course-hub
**Owner:** Ruben, Adjunct Technology Instructor, Mt. SAC — vocational re-entry courses
**Purpose:** Standalone educational site hosting original course content, replacing Canvas as the
primary content delivery system. Canvas will hold only intro blurbs and links out to this site.
Content here is owned by Ruben, not the college.

---

## 0. Working relationship note

I am not a professional web developer. You are the expert here on architecture, tooling, and
implementation decisions — I'm relying on your judgment for anything not explicitly specified
below. Please account for this in how you communicate throughout the build:

- Any time you need me to do something outside the agent's own reach (authorize an integration,
  click a setting, run a command myself, make an account-level decision), explain it as a clear,
  numbered, step-by-step instruction — don't assume I know where a button or setting lives.
- If a term or concept is unavoidable, briefly explain what it means and why it matters before
  asking me to act on it.
- If you hit a decision point that isn't covered in this spec, ask rather than guessing silently.

---

## 1. Audience

Dual audience, both must be served by the same design:
- Vocational re-entry students taking the AI curriculum (Creating with AI, AI Intermediate, AI
  Beginner, Local AI) — expect a professional, modern, credible tech platform. Must not look dated
  or "built for accessibility" in a clinical sense.
- Older adult and disabled (EOA/AWD) students taking foundational tech courses — need a highly
  legible, predictable, low-cognitive-load layout.

Design goal: one visual language that reads as premium/modern to the first group while being
effortlessly accessible to the second. Do not compromise one for the other.

## 2. Design direction

- Modern, clean aesthetic. Explicitly avoid anything that reads as dated (the old GCFGlobal.org
  site, pre-shutdown, is a structural/content reference ONLY — not a visual reference. Do not
  replicate its early-2010s look).
- Leeway is intentionally given here: propose a strong, current design rather than defaulting to
  a generic template. Google's Material Design 3 language (clean cards, strong typographic
  hierarchy, generous whitespace, rounded corners, subtle depth/shadow, smooth hover/transition
  states) is a good reference point but not a strict spec — use good judgment.
- Fonts: any modern, accessible sans-serif (Inter, Roboto, etc.) is fine. No self-hosting
  requirement — CDN delivery is acceptable.
- Must pass WCAG AA contrast minimums (4.5:1 for normal text) regardless of palette chosen.

## 3. Navigation

Open to Antigravity's judgment on exact pattern (mega-menu overlay vs. sticky top bar with
dropdowns vs. something else) given there are **18 topics** (see list below, more will be added
over time). Whatever pattern is chosen must:
- Scale cleanly past 18 items without feeling cramped or requiring a redesign later
- Be driven entirely by a single config file (see Section 6 — Maintainability)
- Meet WCAG AA keyboard navigation and focus-visibility requirements

## 4. Current topic list (18, more added over time)

1. Excel 1
2. Excel 2
3. Excel 3
4. Creating with AI
5. AI Intermediate
6. AI Beginner
7. Local AI
8. Basic Computing 1
9. Basic Computing 2
10. Word 1
11. Word 2
12. Word 3
13. PowerPoint 1
14. PowerPoint 2
15. Canva
16. Digital Citizenship
17. Samsung One UI
18. iOS
19. Social Media Basics

(Note: list is 19 items as enumerated — treat as current full list; more subjects will be added
over future semesters via the same config-driven pattern.)

## 5. Content model

Each topic gets its own landing/tutorial page. Lesson content includes a mix of:
- Text/HTML instructional content
- Embedded YouTube videos
- Downloadable practice files (xlsx/docx templates), stored directly in the repo under each
  topic's own directory (e.g. `/topics/excel-1/downloads/`) — not an external drive. Files are
  small (tens of KB each); repo size is a non-issue at this content volume.

### Canvas / cross-linking
- This site links out to Canvas where needed, and Canvas links into this site.
- Do NOT attempt to iframe live Canvas pages into this site — Canvas's own security headers
  (X-Frame-Options/CSP) generally block being embedded by external domains and this will likely
  fail regardless of implementation. Canvas iframing this site's pages (the reverse direction) is
  fine and expected to work.
- Fallback/actual plan: Canvas holds a short intro blurb per unit plus a plain link out to the
  matching course-hub page. This is the primary intended pattern, not just a fallback.

## 5a. News / blog section

A separate content section, distinct from the 19 course topics, for written parses of Fighting
Tides video content (AI, privacy, surveillance, Linux commentary).

- **Nav placement**: its own top-level tab, labeled "News" (or similar — Antigravity can suggest
  alternatives), separate from the course topic navigation. Not one of the 19 topic items.
- **No linkback**: these posts do not link back to the Fighting Tides channel/brand. Treat as
  standalone written content on this site.
- **Post structure**: title, date, tags. A YouTube video embed is optional per post (some posts
  will have one, some won't) — the template must support a video slot that can be present or
  omitted per post, not required every time.
- **Tags**: clickable and browsable — clicking a tag shows all other posts sharing that tag
  (a per-tag archive/index page).
- **Search**: needs a site search similar in spirit to the old GCFGlobal/GCF LearnFree site
  search — a search box that surfaces relevant content by keyword. Scope: at minimum search
  across News/blog posts; site-wide search across blog + course lesson content is the better
  long-term outcome if it's not significantly more build effort. Implementation is open to
  Antigravity's judgment, but must work as a static, client-side solution with no backend
  (e.g. Pagefind or Lunr.js are reasonable fits for a Jekyll/GitHub Pages site — Antigravity
  should pick what fits best).
- **Architecture fit**: Jekyll's native blogging support (`_posts` collection, tags, permalinks)
  is a natural fit for this and should be used unless Antigravity has a reason to do otherwise.

## 5b. Visual reference sites

For design inspiration/anchoring (not literal copying), pull structural and stylistic cues from:
- **MDN Web Docs / web.dev** — clean modern documentation UI, good fit for the AI/tech course
  side and for looking like a credible modern tech platform
- **Khan Academy** — best reference for the lesson/tutorial page layout itself: calm,
  uncluttered, progress-friendly, good fit for the EOA/AWD side
- **edX** — homepage course-card grid and category browsing pattern; clean and professional
  without leaning on trend-chasing visual gimmicks
- **Coursera** — same category as edX; good reference for presenting many course categories
  (19+ topics) without the nav feeling overwhelming

Explicitly NOT references (considered and rejected):
- Udemy Business — this is a B2B marketing/sales landing page, not a learning-platform UI;
  doesn't transfer to a student-facing lesson site
- Blackboard — dated, institutional LMS feel; treat as a "definitely not this" anti-reference,
  same category as the old GCFGlobal visual style



- **Static site, built with Jekyll**, using GitHub Pages' native Jekyll support (no external build
  pipeline or hosted CI needed — Pages builds automatically on push).
- **Single source of truth for navigation**: one Jekyll `_data` file (e.g. `_data/topics.yml`)
  drives the nav across every page. Adding a 20th topic means adding one entry to this file, not
  touching every page.
- **Shared layout/includes**: header, nav, and footer are Jekyll includes/layouts, not duplicated
  per page.
- **One lesson = one file**, using Jekyll front matter for metadata (title, topic, last-updated
  date). This must be simple enough that Ruben, Claude, or Antigravity can each independently
  make a future edit (e.g. "update the Excel 1 lesson for the new interface" or "add week 9")
  as a small, contained, low-risk change.
- Site will initially be updated directly by Antigravity (or Cowork) on request — content-editing
  workflow should assume an agent is doing most edits, not manual hand-authoring, so favor
  structure that's easy for an agent to locate and modify correctly over structure that's
  optimized for manual typing.

## 7. Hosting

- GitHub Pages, served at `pc-master-race.github.io/course-hub/` (subpath, not root).
- **GitHub Pages is already enabled** on this repo: Source = "Deploy from a branch," Branch =
  `main`, folder = `/ (root)`. Do not attempt to create the repo or configure Pages settings —
  it's already set up and waiting for the Jekyll site to be pushed to `main`.
- All internal links/asset paths must be relative or use Jekyll's `relative_url` /
  `baseurl`-aware helpers — do not hardcode absolute root paths, or the site will break once
  deployed even if it works locally.
- No custom domain yet. Will be added later; do not build anything that assumes a root-domain
  deployment.

## 8. Accessibility requirements

- WCAG 2.1 AA compliance across the site: 4.5:1 minimum contrast, full keyboard navigation, all
  interactive elements have visible focus states, all images have meaningful alt text, semantic
  heading hierarchy.
- Skip-to-content link on every page.
- No additional accessibility features requested beyond the above (no text-size toggle, no
  high-contrast toggle, no translation toggle — browser-native translation already covers this
  need without a custom widget).

## 9. Analytics

- Google Analytics (GA4). Standard install, no special privacy configuration needed — Ruben is
  not concerned with tracking-privacy tradeoffs on this project and wants visibility into traffic
  volume, referrer sources, and audience behavior.

## 10. Licensing / ownership

- No visible copyright/license footer text needed on the site itself — ownership is established
  via the GitHub repo's license settings, not the rendered site. Ruben is fine with others linking
  to or referencing this content.

## 11. Branding

- No existing logo/wordmark. Antigravity should design a simple text-based wordmark and favicon
  for "course-hub" as part of the build, and can suggest naming/branding options along the way.
  This is a placeholder — full rebrand expected once a custom domain is set up later.

## 12. Browser/device support

- Standard current versions of Chrome/Chromium, Firefox, Opera, Edge, Safari.
- Must work well on Chromebooks specifically, given student device base — no ChromeOS-specific
  blockers, good performance on lower-spec hardware.

## 13. Build sequencing (recommended)

1. Jekyll scaffold: `_config.yml`, base layout, `_data/topics.yml` with all 19 topics, shared
   header/nav/footer includes.
2. Homepage with course-card grid pulling from `_data/topics.yml`.
3. One fully-built topic as the template: **Excel 1** (most complete content, best test case).
4. Review pass with Ruben before scaling the same pattern to the remaining topics.
5. Accessibility pass: automated contrast/alt-text/focus-order check across built pages.
6. News/blog section: `_posts` collection, tag archive pages, static search implementation.
7. GA4 install.
8. Favicon/wordmark pass.

---

*This spec consolidates decisions made across prior planning sessions (repo creation, mega-menu
concept, GCFGlobal structural reference) and a follow-up design/interview pass. It is intended to
be handed to Antigravity as a complete, self-contained brief with no outstanding open questions.*
