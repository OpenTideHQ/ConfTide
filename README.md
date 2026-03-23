# ConfTide

> OpenTide conference presentations — powered by [Slidev](https://sli.dev)

## Talks

| Talk | Event | Date | Status |
|------|-------|------|--------|
| [FIRST CTI 2026](talks/first-cti-2026/) | FIRST CTI Summit | March 2026 | ✅ Ready |

## Quick Start

```bash
npm install
npm run dev          # opens FIRST CTI 2026 talk in browser
```

## Project Structure

```
ConfTide/
├── components/          # Shared Vue components (auto-imported)
├── layouts/             # Custom Slidev layouts
├── public/              # Static assets (logos, images)
├── styles/              # Shared CSS
├── talks/               # One folder per talk
│   └── first-cti-2026/
│       ├── slides.md    # Entry point (frontmatter + imports)
│       └── pages/       # Slide sections (composable markdown)
├── landing/             # GitHub Pages landing page
├── scripts/             # Build & deploy scripts
└── style.css            # Global theme (auto-loaded by Slidev)
```

## Adding a New Talk

1. Create `talks/<talk-name>/slides.md` with Slidev frontmatter
2. Add page files in `talks/<talk-name>/pages/`
3. Add npm scripts in `package.json`
4. Update the build script

## Build & Deploy

```bash
npm run build                    # builds all talks + landing page
npm run build:first-cti-2026     # builds just one talk
npm run export:pdf               # exports to PDF
```

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml`.

## Brand

- **Navy**: `#1E3A8A`
- **Gold**: `#F5C518`
- **Fonts**: Inter (text) + JetBrains Mono (code)
- **License**: EUPL 1.2

---

*Built with ❤️ by the European Commission CSOC team*
