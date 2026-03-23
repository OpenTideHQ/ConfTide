---
description: "Add a new slide to an existing ConfTide talk. Creates a properly formatted Slidev markdown slide with the correct CSS classes and patterns."
agent: "agent"
---

Add a new slide to the specified talk. Follow these steps:

1. Ask which talk (default: `first-cti-2026`) and which page file to add the slide to
2. Read the target page file to understand the current slide structure and count
3. Read `style.css` to see available CSS classes
4. Create the new slide content using:
   - `---` separator before the slide
   - Appropriate layout frontmatter if needed
   - Brand CSS classes (`.glass-card`, `.badge-*`, `.text-gold`, etc.)
   - `<v-click>` for progressive reveals where appropriate
   - Vue diagram components if a visualization is needed
5. Append the slide to the correct position in the page file
6. Run `npm run dev` to verify the slide renders correctly
