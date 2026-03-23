---
description: "Use when editing Slidev markdown slide pages, creating new slides, or modifying slide content. Covers slide syntax, frontmatter, CSS classes, Vue components, and design patterns for ConfTide presentations."
applyTo: "talks/**/pages/*.md,talks/**/slides.md"
---

# Slidev Slide Authoring (ConfTide)

## Slide Separation

- Slides are separated by `---` on its own line
- First slide in a page file starts with a frontmatter block (`--- ... ---`)
- Subsequent slides use bare `---` separators

## Frontmatter Options

Common slide-level frontmatter:

```yaml
layout: center          # center, two-cols, default, cover, section-divider
class: text-center      # UnoCSS utility classes
transition: slide-left  # Override per-slide transition
clicks: 3               # Total click steps
```

## Custom Layouts

- `cover` — Title slide with centered content
- `section-divider` — Part divider with large number watermark. Props: `part` (number), `badge` (text), `badgeColor` (red/gold/purple/green), `title`, `subtitle`

## Section Divider Pattern

```markdown
---
layout: center
class: text-center
---

<div class="relative">
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-[5em] font-black text-[rgba(224,82,101,0.07)] select-none">01</span>
  <div class="relative z-1">
    <span class="badge badge-red">LABEL</span>
    <h2 class="!mt-3">Title <span class="text-threat">Highlight</span></h2>
    <p class="text-[var(--ot-gray-400)]">Subtitle text</p>
  </div>
</div>
```

## Available CSS Classes

### Cards
- `.glass-card` — Frosted-glass card with gold border glow on hover
- `.glass-card.threat` / `.detect` / `.rule` / `.agent` — Themed variants

### Badges
- `.badge-gold`, `.badge-navy`, `.badge-red`, `.badge-green`, `.badge-purple`

### Stats
- `.stat-number` / `.stat-label` — Large statistic display

### Specialized
- `.pipeline-stage` / `.pipeline-stage.active` — Chevron pipeline steps
- `.pr-card` / `.pr-header` / `.pr-status` — GitHub PR mockup
- `.agent-chat` / `.chat-msg` / `.chat-bubble` — Agent chat mockup

### Colors
- `.text-gold`, `.text-threat`, `.text-detect`, `.text-rule`, `.text-agent`

### Animations
- `.animate-float`, `.animate-pulse`, `.animate-glow`

## Vue Components (auto-imported)

Use inline in markdown: `<ComponentName />`. Available:

| Component | Description |
|-----------|-------------|
| `BottleneckDiagram` | Funnel: CTI volume → bottleneck → detection trickle |
| `EcosystemMap` | Hexagonal map: TVM/DOM/MDR around central OpenTide node |
| `PipelineFlow` | 5-stage pipeline: Intel → Model → Detect → Test → Deploy |
| `DetectionSignals` | DOM tree: parent → 3 signal child nodes |
| `AgentArchitecture` | Orbital diagram: agents orbiting orchestrator |
| `TrustTriangle` | Triangle: Transparency ↔ Guardrails ↔ Traceability |
| `OpenTideLogo` | Inline SVG logo mark |

**Naming rule:** Never prefix components with `Si` — it conflicts with unplugin-icons' Simple Icons.

## Click Animations

Use `<v-click>` to reveal content progressively:

```markdown
<v-click>
<p>This appears on click</p>
</v-click>
```

## Grid Layouts

Use UnoCSS grid utilities:

```html
<div class="grid grid-cols-3 gap-5 mt-6">
  <div class="glass-card">...</div>
  <div class="glass-card">...</div>
  <div class="glass-card">...</div>
</div>
```

## Two-Column Layout

```yaml
---
layout: two-cols
---

Left column content

::right::

Right column content
```

## Brand Colors (CSS variables)

| Variable | Usage |
|----------|-------|
| `--ot-navy` | Primary navy |
| `--ot-gold` | Accent, headings, highlights |
| `--ot-threat` | TVM / threat context (red) |
| `--ot-detect` | DOM / detection context (blue) |
| `--ot-rule` | MDR / rule context (green) |
| `--ot-agent` | AgenTide / agent context (purple) |
| `--ot-warn` | Warnings (amber) |

## Images

Reference images from talk-level `public/` directory with absolute paths: `/opentide-logo.png`.
