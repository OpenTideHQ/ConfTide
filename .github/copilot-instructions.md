# ConfTide — Agent Context & Project Handbook

> Multi-talk Slidev presentation monorepo for OpenTide conferences.
> Deployed to GitHub Pages at `https://opentidehq.github.io/ConfTide/`.

---

## Project Overview

**ConfTide** is a monorepo that houses conference presentations for OpenTide, built with [Slidev](https://sli.dev) v51. Each talk lives in `talks/<talk-slug>/` and shares a common design system (style.css, Vue components, layouts) from the project root. The first (and currently only) talk is **FIRST CTI 2026**.

### Speakers & Affiliation

- **Amine Besson** & **Rémi Séguy**
- European Commission CSOC (DG DIGIT)

---

## Directory Structure

```
ConfTide/
├── .github/
│   ├── copilot-instructions.md    ← YOU ARE HERE
│   └── workflows/deploy.yml       ← GitHub Pages CI/CD
├── components/                    ← Vue diagram components (auto-imported by Slidev)
│   ├── AgentArchitecture.vue      ← AgenTide orbit diagram (SVG, animated)
│   ├── BottleneckDiagram.vue      ← Funnel → Bottleneck → Trickle (SVG, animated)
│   ├── DetectionSignals.vue       ← DOM → 3 signal nodes tree (SVG, animated)
│   ├── EcosystemMap.vue           ← Hexagonal ecosystem with central node (SVG, animated)
│   ├── OpenTideLogo.vue           ← Inline SVG logo mark
│   ├── PipelineFlow.vue           ← Intel → Detect → Deploy pipeline (SVG, animated)
│   └── TrustTriangle.vue          ← Three-vertex triangle (SVG, animated)
├── landing/
│   └── index.html                 ← GitHub Pages root landing page (links to talks)
├── layouts/
│   ├── cover.vue                  ← Custom cover slide layout
│   └── section-divider.vue        ← Part N divider slide layout
├── public/                        ← Root-level public assets (logos)
│   ├── opentide-banner.png
│   └── opentide-logo.png
├── scripts/
│   └── build.sh                   ← Multi-talk build script
├── talks/
│   └── first-cti-2026/
│       ├── components → ../../components    ← SYMLINK (required)
│       ├── global-bottom.vue → ../../global-bottom.vue  ← SYMLINK
│       ├── layouts → ../../layouts          ← SYMLINK
│       ├── style.css → ../../style.css      ← SYMLINK
│       ├── public/                          ← Talk-level public assets
│       │   ├── opentide-banner.png
│       │   └── opentide-logo.png
│       ├── slides.md              ← Main Slidev entry (frontmatter + src imports)
│       └── pages/                 ← Composable markdown slide pages
│           ├── 01-about.md        ← About Us + Agenda
│           ├── 02-widening-gap.md ← Part 1: The Widening Gap (4 slides)
│           ├── 03-opentide.md     ← Part 2: OpenTide Framework (9 slides)
│           ├── 04-agentide.md     ← Part 3: AgenTide (9 slides)
│           ├── 05-road-ahead.md   ← Part 4: Road Ahead + Closing (4 slides)
│           └── 06-backup.md       ← Backup slides (2 slides)
├── global-bottom.vue              ← Footer (logo + speaker names), shown on all slides
├── style.css                      ← Design system (~340 lines), all custom classes
├── uno.config.ts                  ← UnoCSS config with brand colors
├── package.json                   ← npm scripts: dev, build, export:pdf
└── .gitignore
```

---

## Critical Technical Knowledge

### Slidev Resource Resolution (THE #1 GOTCHA)

Slidev resolves `style.css`, `global-bottom.vue`, `layouts/`, and `components/` **relative to the entry `slides.md` file**, NOT the `package.json` / project root. Since the entry is at `talks/first-cti-2026/slides.md`, all shared resources must be accessible from that directory.

**Solution:** Symlinks in `talks/first-cti-2026/` point back to project root:
- `style.css` → `../../style.css`
- `global-bottom.vue` → `../../global-bottom.vue`
- `layouts/` → `../../layouts/`
- `components/` → `../../components/`

**When adding a new talk:** Create the same symlinks in the new `talks/<slug>/` directory.

### Component Naming — Avoid `Si` Prefix

Components starting with `Si` (e.g., `SignalDiagram.vue`) conflict with unplugin-icons' Simple Icons prefix. The build will fail with errors like `Could not load ~icons/si/gnal-diagram`. Always use a different prefix — e.g., `DetectionSignals.vue` instead of `SignalDiagram.vue`.

### Public Assets — Talk-Level Required

The `public/` directory must exist at the talk level (`talks/<slug>/public/`) for images referenced as `/image.png` in slides. The root-level `public/` is NOT used by Slidev at build time.

### Build Script

`scripts/build.sh` uses `npx @slidev/cli build` (not `npx slidev`). It appends `|| true` because the build exits non-zero when `playwright-chromium` isn't installed (optional, for OG image generation). The actual SPA is built successfully before that error.

Build output goes to `dist/<talk-slug>/` at the project root.

### Playwright Optional

PDF export and OG image generation require `playwright-chromium`. Not installed by default. Install with `npm i -D playwright-chromium` if needed.

---

## Design System

### Brand Colors (CSS Custom Properties)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--ot-navy` | `#1E3A8A` | Primary navy |
| `--ot-navy-deep` | `#0D1640` | Glass card backgrounds |
| `--ot-navy-darker` | `#080E2A` | Slide background |
| `--ot-gold` | `#F5C518` | Accent, headings, highlights |
| `--ot-threat` | `#E05265` | TVM / threat context |
| `--ot-detect` | `#5B75D9` | DOM / detection context |
| `--ot-rule` | `#38C97A` | MDR / rule context |
| `--ot-agent` | `#9B6DFF` | AgenTide / agent context |
| `--ot-warn` | `#F0963A` | Warnings |

### Key CSS Classes (defined in style.css)

| Class | Purpose |
|-------|---------|
| `.glass-card` | Frosted-glass card with gold border glow on hover |
| `.glass-card.threat/.detect/.rule/.agent` | Themed border variants |
| `.badge-gold/.badge-navy/.badge-red/.badge-green/.badge-purple` | Pill badges |
| `.stat-number` / `.stat-label` | Large stat display |
| `.pipeline-stage` / `.pipeline-stage.active` | Chevron pipeline |
| `.pr-card` / `.pr-header` / `.pr-status` | GitHub PR display card |
| `.agent-chat` / `.chat-msg` / `.chat-bubble` | Agent conversation mockup |
| `.gradient-border` | Animated gradient border effect |
| `.animate-float` / `.animate-pulse` / `.animate-glow` | Animations |
| `.text-gold/.text-threat/.text-detect/.text-rule/.text-agent` | Color utilities |

### Typography

- **Sans:** Inter (weights 300–900)
- **Mono:** JetBrains Mono
- **Headings:** weight 800, letter-spacing -0.025em

---

## Commands

```bash
# Development — opens browser at localhost:3030
npm run dev

# Production build — outputs to dist/first-cti-2026/
npm run build

# PDF export (requires playwright-chromium)
npm run export:pdf
```

---

## Talk Content: FIRST CTI 2026

The presentation has **22+ slides** organized in 4 parts + backup:

| Part | File | Slides | Topic |
|------|------|--------|-------|
| — | `01-about.md` | 2 | About Us (EC CSOC, 50+ team, 60+ agencies) + Today's Agenda |
| 1 | `02-widening-gap.md` | 4 | The Widening Gap: intelligence volume/speed/complexity vs team capacity |
| 2 | `03-opentide.md` | 9 | OpenTide Framework: TVM, DOM, MDR objects + pipeline + CI/CD |
| 3 | `04-agentide.md` | 9 | AgenTide: AI agents, AGENTS.md directives, real PR examples, trust |
| 4 | `05-road-ahead.md` | 4 | Road Ahead: Skills framework, community CTA, closing |
| — | `06-backup.md` | 2 | Complete Object Model table + Tech Stack table |

### Vue Diagram Components

All components are animated SVGs rendered inline. They use CSS animations (not JS) and scoped styles.

| Component | Used In | Description |
|-----------|---------|-------------|
| `BottleneckDiagram` | 02-widening-gap.md | Funnel showing CTI volume → bottleneck → detection trickle |
| `EcosystemMap` | 03-opentide.md | Hexagonal map: TVM/DOM/MDR around central OpenTide node |
| `PipelineFlow` | 03-opentide.md | 5-stage pipeline: Intel → Model → Detect → Test → Deploy |
| `DetectionSignals` | 03-opentide.md | DOM tree: parent → 3 signal child nodes |
| `AgentArchitecture` | 04-agentide.md | Orbital diagram: agents orbiting central orchestrator |
| `TrustTriangle` | 04-agentide.md | Triangle: Transparency ↔ Guardrails ↔ Traceability |

---

## Source Material

The original presentation was a Reveal.js single-HTML file at:
`/Users/behemoth/Repositories/OpenTide/FIRST CTI 2026/index.html` (~2130 lines)

The v1 version is at: `/Users/behemoth/Repositories/OpenTide/FIRST CTI 2026/index.v1.html`

All content has been migrated from the Reveal.js HTML to Slidev markdown pages.

---

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Checkout → Node 20 → `npm ci` → `bash scripts/build.sh`
2. Upload `dist/` as pages artifact
3. Deploy to GitHub Pages

Landing page at `dist/index.html` links to individual talks.

---

## Known Issues & Notes

1. **Stale build in `talks/first-cti-2026/dist/`**: An old build output may exist here from early iterations. The correct build output is at `dist/first-cti-2026/` (project root level). The stale one can be deleted.

2. **Root `public/` vs talk `public/`**: Both exist with identical files. Root one is unused by Slidev but kept for reference. The talk-level one is authoritative.

3. **`styles/` directory**: May exist as an empty leftover at project root — can be deleted.

4. **Dev server cwd**: `npm run dev` must be run from the ConfTide project root. The script invokes `slidev talks/first-cti-2026/slides.md --open`.

5. **No git remote yet**: The repo has not been pushed to GitHub. Create `OpenTideHQ/ConfTide` and push to trigger Pages deployment.

---

## Adding a New Talk

1. Create `talks/<new-slug>/slides.md` with frontmatter + src imports
2. Create `talks/<new-slug>/pages/` with markdown slide files
3. Create `talks/<new-slug>/public/` and copy needed assets
4. Create symlinks:
   ```bash
   cd talks/<new-slug>
   ln -s ../../style.css style.css
   ln -s ../../global-bottom.vue global-bottom.vue
   ln -s ../../layouts layouts
   ln -s ../../components components
   ```
5. Add build command to `scripts/build.sh`
6. Add card to `landing/index.html`
7. Add npm scripts to `package.json`
