---
layout: center
class: text-center
---

<div class="relative">
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-[5em] font-black text-[rgba(224,82,101,0.07)] select-none">01</span>
  <div class="relative z-1">
    <span class="badge badge-red">THE PROBLEM</span>
    <h2 class="!mt-3">The Widening <span class="text-threat">Gap</span></h2>
    <p class="text-[var(--ot-gray-400)]">Intelligence velocity vs. detection capacity</p>
  </div>
</div>

---

## Intelligence is <span class="text-threat">Accelerating</span>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="glass-card threat">
  <span class="text-2xl block mb-1">📈</span>
  <h3 class="!text-[var(--ot-threat)]">Volume</h3>
  <p class="text-sm">New CVEs, supply chain attacks, zero-days, APT campaigns - the firehose never stops.</p>
</div>

<div class="glass-card threat">
  <span class="text-2xl block mb-1">⚡</span>
  <h3 class="!text-[var(--ot-threat)]">Speed</h3>
  <p class="text-sm">From advisory to exploitation in <strong class="text-threat">hours, not weeks</strong>. Adversaries operationalise faster than ever.</p>
</div>

<div class="glass-card threat">
  <span class="text-2xl block mb-1">🕸️</span>
  <h3 class="!text-[var(--ot-threat)]">Complexity</h3>
  <p class="text-sm">Multi-stage, multi-platform, supply-chain-aware attacks that span <strong class="text-gold">entire kill chains</strong>.</p>
</div>

<div class="glass-card threat">
  <span class="text-2xl block mb-1">🧑‍💻</span>
  <h3 class="!text-[var(--ot-threat)]">Team Capacity</h3>
  <p class="text-sm">Detection engineers are a <strong class="text-threat">scarce resource</strong>. Manual TTP analysis doesn't scale.</p>
</div>

</div>

---

## The Detection Engineering <span class="text-threat">Bottleneck</span>

<div class="flex items-stretch gap-0 mt-6 mx-auto rounded-2xl overflow-hidden border border-white/10 text-sm">
  <div class="flex-1 bg-[rgba(224,82,101,0.18)] border-r border-[rgba(224,82,101,0.35)] p-4">
    <div class="text-threat font-black text-xs uppercase tracking-widest mb-3">Intelligence Feed</div>
    <ul class="text-xs space-y-1.5 text-white/80 list-none !pl-0">
      <li>☣️ CVE advisories</li>
      <li>☣️ Vendor bulletins</li>
      <li>☣️ APT campaigns</li>
      <li>☣️ OSINT / ISAC feeds</li>
      <li>☣️ Threat intel reports</li>
    </ul>
    <div class="text-threat font-semibold mt-3 text-xs">1,000s per month</div>
  </div>
  <div class="w-36 bg-[rgba(240,150,58,0.22)] border-r border-[rgba(240,150,58,0.40)] flex flex-col items-center justify-center p-3 text-center shrink-0">
    <div class="text-warn font-black text-xs uppercase tracking-widest mb-2">Bottleneck</div>
    <div class="text-3xl my-2">⧗</div>
    <div class="text-warn/70 text-[10px]">Manual CTI analysis<br/>Hours per TTP</div>
  </div>
  <div class="flex-1 bg-[rgba(56,201,122,0.18)] p-4">
    <div class="text-rule font-black text-xs uppercase tracking-widest mb-3">Detection Rules</div>
    <ul class="text-xs space-y-1.5 text-white/80 list-none !pl-0">
      <li>🚨 Sigma / KQL</li>
      <li>🚨 SPL (Splunk)</li>
      <li>🚨 YARA rules</li>
    </ul>
    <div class="text-rule font-semibold mt-3 text-xs">Tens per month</div>
    <div class="text-[10px] text-white/40 mt-1">Deployed to SIEM/EDR</div>
  </div>
</div>

<v-click>

<p class="text-center text-sm text-[var(--ot-gray-200)] mt-4">
The gap isn't <em>knowledge</em> - it's the <strong class="text-gold">operationalisation speed</strong> from intelligence to deployed detection.
</p>

</v-click>

---
layout: two-cols
---

## ATT&CK Alone <span class="text-warn">Isn't Enough</span>

<div class="pr-6">

### <span class="text-warn">The Illusion of Coverage</span>

"We cover 85% of ATT&CK techniques"

<v-click>

But what does that *actually* mean?

- A `T1059` mapping tells you *nothing* about which scripting interpreter, on which OS, via which delivery
- Technique ≠ the specific adversary behaviour you need to detect
- No granularity on **severity, terrain, or attack surface**
- No understanding of **attack chaining**

</v-click>
</div>

::right::

<v-click>

<div class="pl-4">

### <span class="text-gold">What's Missing</span>

| Dimension | ATT&CK | Needed |
|-----------|--------|--------|
| Granularity | <span class="text-threat">Technique-level</span> | <span class="text-rule">Atomic TTP</span> |
| Context | <span class="text-threat">Generic</span> | <span class="text-rule">Surface + Terrain</span> |
| Impact | <span class="text-warn">Implicit</span> | <span class="text-rule">Scored</span> |
| Chaining | <span class="text-threat">None</span> | <span class="text-rule">Attack paths</span> |
| Intel Link | <span class="text-threat">Manual</span> | <span class="text-rule">Native</span> |
| Detection | <span class="text-threat">Separate</span> | <span class="text-rule">Integrated</span> |

</div>

</v-click>
