---
description: "Add a new talk to the ConfTide monorepo. Sets up the full directory structure, symlinks, slides entry point, and build configuration."
agent: "agent"
---

Create a new talk in the ConfTide monorepo. Follow these steps:

1. Ask for the talk slug (e.g., `my-talk-2026`), title, speakers, and event name
2. Create directory structure:
   - `talks/<slug>/pages/` — slide page markdown files
   - `talks/<slug>/public/` — copy logo assets from another talk
3. Create symlinks in `talks/<slug>/`:
   ```
   ln -s ../../style.css style.css
   ln -s ../../global-bottom.vue global-bottom.vue
   ln -s ../../layouts layouts
   ln -s ../../components components
   ```
4. Create `talks/<slug>/slides.md` with frontmatter (theme, title, author, fonts) and `src:` imports for page files
5. Create initial page files (e.g., `01-intro.md`)
6. Add build command to `scripts/build.sh`:
   ```bash
   npx @slidev/cli build talks/<slug>/slides.md --base "${BASE_PATH}/<slug>/" --out "${DIST_DIR}/<slug>" || true
   ```
7. Add npm scripts to `package.json`:
   ```json
   "dev:<slug>": "slidev talks/<slug>/slides.md --open",
   "build:<slug>": "slidev build talks/<slug>/slides.md --out dist/<slug> --base /ConfTide/<slug>/"
   ```
8. Add a card to `landing/index.html` linking to `<slug>/`
9. Run `npm run dev` (with the new talk entry) to verify
