---
description: "Use when creating or editing SVG diagram Vue components for Slidev presentations. Covers animation patterns, color conventions, and component structure."
applyTo: "components/*.vue"
---

# Vue Diagram Components (ConfTide)

## Architecture

All diagram components are animated SVGs rendered inline. They follow these conventions:

- **CSS animations only** — no JS-driven animation loops
- **Scoped styles** — use `<style scoped>`
- **Reactive visibility** — use `onMounted` with `visible` ref for entrance animations
- **Consistent color palette** — use brand color variables

## Component Template

```vue
<template>
  <div class="diagram-container">
    <svg :viewBox="`0 0 ${W} ${H}`" class="diagram-svg">
      <defs><!-- Gradients, filters, clip paths --></defs>
      <g :opacity="visible ? 1 : 0" :style="tIn(0)">
        <!-- Animated content group -->
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const W = 820
const H = 300
const visible = ref(false)

onMounted(() => { setTimeout(() => { visible.value = true }, 200) })

const tIn = (d) => `transition: opacity 0.6s ease ${d}s, transform 0.6s ease ${d}s`
</script>

<style scoped>
.diagram-container { display: flex; justify-content: center; margin-top: 1rem; }
.diagram-svg { width: 100%; max-width: 820px; }
</style>
```

## Brand Colors for SVG

| Context | Fill/Stroke | Faded (backgrounds) |
|---------|------------|---------------------|
| Threat (red) | `#E05265` | `rgba(224,82,101,0.12)` |
| Detect (blue) | `#5B75D9` | `rgba(91,117,217,0.12)` |
| Rule (green) | `#38C97A` | `rgba(56,201,122,0.12)` |
| Agent (purple) | `#9B6DFF` | `rgba(155,109,255,0.12)` |
| Gold (accent) | `#F5C518` | `rgba(245,197,24,0.12)` |
| Text muted | `#7E8BB0` | — |
| Text light | `#C8CEE0` | — |

## Naming Convention

**Never** prefix component names with `Si` — it conflicts with unplugin-icons' Simple Icons prefix and will break the build.

## Staggered Entrance Pattern

Use the `tIn(delay)` helper for staggered group reveals:

```html
<g :opacity="visible ? 1 : 0" :style="tIn(0)"><!-- First group --></g>
<g :opacity="visible ? 1 : 0" :style="tIn(0.3)"><!-- Second group --></g>
<g :opacity="visible ? 1 : 0" :style="tIn(0.6)"><!-- Third group --></g>
```

## CSS Animation Classes

For repeating animations, define keyframes in `<style scoped>`:

```css
.pulse-animation {
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
```
