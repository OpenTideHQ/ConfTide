---
layout: center
class: text-center
---

<div class="relative">
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-[5em] font-black text-[rgba(245,197,24,0.07)] select-none">04</span>
  <div class="relative z-1">
    <span class="badge badge-gold">WHAT'S NEXT</span>
    <h2 class="!mt-3">The Road <span class="text-gold">Ahead</span></h2>
    <p class="text-[var(--ot-gray-400)]">Skills framework, community, and the agentic future</p>
  </div>
</div>

---
layout: two-cols
---

## Next: The <span class="text-agent">Skills</span> Framework

<p class="text-xs text-[var(--ot-gray-400)] mb-3">Modular, composable AI capabilities for detection engineering</p>

<div class="pr-4 space-y-3">

<div class="glass-card agent">
  <h3 class="!text-sm !text-agent">From AGENTS.md → Skills</h3>
  <p class="text-xs">AGENTS.md is monolithic — one massive instruction set. <strong>Skills</strong> decompose this into modular, reusable capability packages.</p>
</div>

<div class="glass-card agent">
  <h3 class="!text-sm !text-agent">Composable Expertise</h3>
  <p class="text-xs">Each skill encapsulates domain knowledge: TVM creation, signal design, KQL query writing, MISP integration…</p>
  <div class="flex flex-wrap gap-1 mt-2">
    <span class="badge badge-purple text-[9px]">threat-modelling</span>
    <span class="badge badge-purple text-[9px]">signal-design</span>
    <span class="badge badge-purple text-[9px]">kql-queries</span>
    <span class="badge badge-purple text-[9px]">spl-queries</span>
    <span class="badge badge-purple text-[9px]">schema-validation</span>
    <span class="badge badge-purple text-[9px]">misp-integration</span>
  </div>
</div>

</div>

::right::

<v-click>

<div class="pl-4">

<div class="gradient-border rounded-lg p-4">

### <span class="text-agent text-center block">Skill Architecture</span>

```yaml
# SKILL.md for threat-modelling
---
name: threat-modelling
description: >
  Create Threat Vectors from
  intelligence reports
tools:
  - read_file
  - create_file
  - run_in_terminal  # uuidgen
applyTo: "Objects/Threat Vectors/**"
---

## Workflow
1. Analyse intelligence source
2. Identify atomic TTPs
3. Load TVM JSON Schema
4. Generate schema-compliant YAML
5. Validate & present
```

</div>

</div>

</v-click>

---

## Join the <span class="text-gold">Tide</span>

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="glass-card text-center">
  <span class="text-3xl block mb-2">⭐</span>
  <h3>Star & Fork</h3>
  <p class="text-sm">github.com/<strong class="text-gold">OpenTideHQ</strong></p>
  <span class="badge badge-gold text-xs mt-2 inline-block">EUPL 1.2</span>
</div>

<div class="glass-card text-center">
  <span class="text-3xl block mb-2">🤝</span>
  <h3>Contribute to ShareTide</h3>
  <p class="text-sm">Share your <strong class="text-gold">TLP:CLEAR</strong> detection objects with the community</p>
  <span class="badge badge-green text-xs mt-2 inline-block">CC-BY-SA 4.0</span>
</div>

<div class="glass-card text-center">
  <span class="text-3xl block mb-2">🤖</span>
  <h3>Try AgenTide</h3>
  <p class="text-sm">Point Copilot coding agent at your OpenTide instance — <strong class="text-agent">AGENTS.md</strong> does the rest</p>
</div>

</div>

<v-click>

<div class="flex justify-center gap-8 flex-wrap mt-8">
  <div class="text-center">
    <span class="stat-number !text-3xl">30</span>
    <span class="stat-label">GitHub Stars</span>
  </div>
  <div class="text-center">
    <span class="stat-number !text-3xl">7+</span>
    <span class="stat-label">Platforms Supported</span>
  </div>
  <div class="text-center">
    <span class="stat-number !text-3xl">2+</span>
    <span class="stat-label">Years in Production</span>
  </div>
  <div class="text-center">
    <span class="stat-number !text-3xl">EUPL</span>
    <span class="stat-label">Open Source</span>
  </div>
</div>

</v-click>

---
layout: center
class: text-center
---

<div>
  <img src="/opentide-banner.png" alt="OpenTide" class="w-52 mx-auto mb-6 animate-float" />
  <h1 class="!text-4xl !mb-2"><span class="text-white">Open</span><span class="text-gold">Tide</span> + Agen<span class="text-agent">Tide</span></h1>
  <p class="text-[var(--ot-gray-200)] max-w-xl mx-auto mt-3">
    From unstructured threat intelligence to<br>
    <strong class="text-gold">deployed detections at machine speed</strong>
  </p>
  <p class="text-[var(--ot-gold)] font-semibold mt-6 text-sm">github.com/OpenTideHQ</p>
  <div class="mt-6">
    <p class="text-sm"><strong>Amine Besson</strong> & <strong>Rémi Séguy</strong></p>
    <p class="text-xs text-[var(--ot-gray-400)]">European Commission CSOC</p>
  </div>
  <p class="mt-6 text-2xl">Thank you 🌊</p>
  <p class="text-xs text-[var(--ot-gray-600)] mt-2">FIRST CTI 2026</p>
</div>
