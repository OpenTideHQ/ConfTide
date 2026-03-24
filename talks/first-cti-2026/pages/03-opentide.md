---
layout: center
class: text-center
---

<div class="relative">
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-[5em] font-black text-[rgba(245,197,24,0.07)] select-none">02</span>
  <div class="relative z-1">
    <span class="badge badge-gold">THE FRAMEWORK</span>
    <h2 class="!mt-3"><span class="text-white">Open</span><span class="text-gold">Tide</span></h2>
    <p class="text-[var(--ot-gray-400)]">Reframing TTP intelligence into scalable detection engineering</p>
  </div>
</div>

---

## What is <span class="text-white">Open</span><span class="text-gold">Tide</span>?

> An open-source framework that **models adversary behaviours as Threat Vectors**, links them to **Detection Objectives** and supporting **Detection Rules** - enabling faster operationalisation of intelligence and finer-grained coverage understanding.

<v-click>

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="glass-card text-center">
  <span class="text-2xl block mb-2">📐</span>
  <h3>Schema-Driven</h3>
  <p class="text-sm">6MB+ JSON Schemas power IDE autocomplete, validation & consistency</p>
</div>

<div class="glass-card text-center">
  <span class="text-2xl block mb-2">🔀</span>
  <h3>Git-Native</h3>
  <p class="text-sm">Everything is YAML in git: branching, PRs, code review for detection content</p>
</div>

<div class="glass-card text-center">
  <span class="text-2xl block mb-2">🚀</span>
  <h3>Multi-Platform</h3>
  <p class="text-sm">Deploy to Sentinel, CrowdStrike, Splunk, SentinelOne, MDE, and more</p>
</div>

</div>

</v-click>

---

## The <span class="text-gold">Tide</span> Ecosystem

<div class="flex items-center justify-center gap-5 mt-5">
  <div class="flex flex-col gap-3">
    <div class="glass-card detect !p-3 text-center min-w-28">
      <div class="text-detect font-bold text-sm">TideKit</div>
      <div class="text-[11px] text-white/60 mt-0.5">Python SDK</div>
    </div>
    <div class="glass-card !p-3 text-center min-w-28">
      <div class="text-white/80 font-bold text-sm">WikiTide</div>
      <div class="text-[11px] text-white/60 mt-0.5">Documentation</div>
    </div>
  </div>
  <div class="glass-card !p-5 text-center border-2 border-[var(--ot-gold)] min-w-40">
    <img src="/opentide-logo.png" class="w-12 mx-auto mb-2" />
    <div class="text-gold font-black text-base">OpenTide</div>
    <div class="text-[11px] text-white/50 mt-1">EUPL 1.2 · CC-BY-SA 4.0</div>
  </div>
  <div class="flex flex-col gap-3">
    <div class="glass-card rule !p-3 text-center min-w-28">
      <div class="text-rule font-bold text-sm">ShareTide</div>
      <div class="text-[11px] text-white/60 mt-0.5">Community content</div>
    </div>
    <div class="glass-card !p-3 text-center min-w-28">
      <div class="text-white/80 font-bold text-sm">SyntaxTide</div>
      <div class="text-[11px] text-white/60 mt-0.5">JSON Schemas</div>
    </div>
    <div class="glass-card agent !p-3 text-center min-w-28">
      <div class="text-agent font-bold text-sm">AgenTide</div>
      <div class="text-[11px] text-white/60 mt-0.5">AI Agents</div>
    </div>
  </div>
</div>

<p class="text-xs text-center text-[var(--ot-gray-400)] mt-3">GitHub · Azure DevOps · GitLab</p>

---

## Three Core <span class="text-gold">Objects</span>

<p class="text-sm text-[var(--ot-gray-400)] mb-4">The data model that connects intelligence to deployed detections</p>

<div class="grid grid-cols-3 gap-5">

<v-click>

<div class="glass-card threat">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(224,82,101,0.15)] border border-[rgba(224,82,101,0.35)]">☣️</span>
    <h3 class="!m-0 !text-[var(--ot-threat)]">Threat Vector</h3>
  </div>
  <p class="text-sm"><strong>TVM</strong> - Atomically modelled TTP from intelligence</p>
  <ul class="text-xs mt-2">
    <li>ATT&CK + Kill Chain mapping</li>
    <li>Attack surface & terrain</li>
    <li>Severity · Leverage · Impact</li>
    <li>CVE · MISP · Actor links</li>
    <li><strong class="text-gold">Chaining</strong> → attack paths</li>
  </ul>
</div>

</v-click>

<v-click>

<div class="glass-card detect">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(91,117,217,0.15)] border border-[rgba(91,117,217,0.35)]">🎯</span>
    <h3 class="!m-0 !text-[var(--ot-detect)]">Detection Objective</h3>
  </div>
  <p class="text-sm"><strong>DOM</strong> - What to detect and how</p>
  <ul class="text-xs mt-2">
    <li>Links to 1+ Threat Vectors</li>
    <li><strong class="text-gold">Signals</strong>: atomic detection ideas</li>
    <li>Data requirements & sources</li>
    <li>Composition strategy</li>
    <li>Vendor detector mapping</li>
  </ul>
</div>

</v-click>

<v-click>

<div class="glass-card rule">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(56,201,122,0.15)] border border-[rgba(56,201,122,0.35)]">🚨</span>
    <h3 class="!m-0 !text-[var(--ot-rule)]">Detection Rule</h3>
  </div>
  <p class="text-sm"><strong>MDR</strong> - Detection-as-Code for deployment</p>
  <ul class="text-xs mt-2">
    <li>Multi-platform queries (KQL, SPL…)</li>
    <li>Response procedures</li>
    <li>Alert severity & playbooks</li>
    <li>Tuning & exclusions</li>
    <li>CI/CD lifecycle management</li>
  </ul>
</div>

</v-click>

</div>

---

## Intelligence → Detection <span class="text-gold">Pipeline</span>

<div class="pipeline-flow mt-8">
  <div class="pipeline-stage active">📰 Intel</div>
  <div class="pipeline-stage">☣️ TVM</div>
  <div class="pipeline-stage">🎯 DOM</div>
  <div class="pipeline-stage">🚨 MDR</div>
  <div class="pipeline-stage active">🚀 Deploy</div>
</div>
<div class="grid grid-cols-5 gap-0 mt-3 text-[10px] text-center text-white/40">
  <div>Reports · CVEs<br/>Advisories</div>
  <div>Threat Vectors<br/>(YAML)</div>
  <div>Detection<br/>Objectives</div>
  <div>KQL · SPL<br/>Sigma</div>
  <div>Sentinel · Splunk<br/>CrowdStrike…</div>
</div>

---
layout: two-cols
---

## Threat Vectors: <span class="text-threat">Beyond ATT&CK</span>

<div class="pr-4 mt-2">

A TVM is an **atomically defined TTP** - richer than an ATT&CK technique, directly tied to intelligence.

```yaml
name: "Notepad++ NSIS installer side-loading"
criticality: High
threat:
  att&ck: [T1574.002, T1195.002]
  killchain: [Delivery, Installation]
  surface: [OS::Windows]
  severity: High
  leverage: Exploitation
  impact: Code Execution
  viability: Confirmed
  terrain:
    - Notepad++ installed via trojanised source
  actors: [{name: StrongPity}]
```

</div>

::right::

<v-click>

<div class="pl-4 mt-2">

### Why This Matters

<div class="glass-card threat mb-3">
  <p class="text-sm !m-0">☣️ <strong class="text-gold">Atomic granularity</strong> - One TVM = one specific adversary action, not a broad technique category</p>
</div>

<div class="glass-card threat mb-3">
  <p class="text-sm !m-0">🔗 <strong class="text-gold">Chaining</strong> - TVMs link to each other to model attack paths & campaign structures</p>
</div>

<div class="glass-card threat mb-3">
  <p class="text-sm !m-0">🌍 <strong class="text-gold">Surface + Terrain</strong> - Scoped to your environment: `OS::Windows`, `Cloud::AWS`</p>
</div>

<div class="glass-card threat">
  <p class="text-sm !m-0">📊 <strong class="text-gold">Scored Risk</strong> - Severity, leverage, impact, viability - not just a technique ID</p>
</div>

</div>

</v-click>

---
layout: two-cols
---

## Detection Objectives: <span class="text-detect">The Strategy</span>

<div class="pr-4 mt-2">

A DOM answers: *"How should we detect this threat?"* - before writing any query.

```yaml
name: "Detect NSIS side-loading via Notepad++"
objective:
  type: Threat
  priority: Critical
  threats: ["tvm-uuid-here"]
  composition:
    strategy: "Multi-signal correlation"
  signals:
    - name: "Suspicious NSIS child process"
      methodology: Process Monitoring
      logsources: [Sysmon, MDE]
    - name: "Temp.sh exfiltration"
      methodology: Network Monitoring
      logsources: [Proxy, DNS]
```

</div>

::right::

<v-click>

<div class="pl-4 mt-2">

### Signals: Detection Atoms

Each **Signal** is an atomic detection opportunity - the building block for rules.

<div class="mt-3 space-y-2">
  <div class="glass-card detect !p-2.5 text-center">
    <div class="text-detect font-bold text-xs">🎯 Detection Objective</div>
    <div class="text-[10px] text-white/50 mt-0.5">NSIS Side-Loading DOM</div>
  </div>
  <div class="grid grid-cols-3 gap-2">
    <div class="glass-card !p-2 text-center">
      <div class="text-gold font-bold text-[10px]">Signal 1</div>
      <div class="text-[9px] text-white/60 mt-0.5">Process<br/>Monitoring</div>
    </div>
    <div class="glass-card !p-2 text-center">
      <div class="text-gold font-bold text-[10px]">Signal 2</div>
      <div class="text-[9px] text-white/60 mt-0.5">Network<br/>Monitoring</div>
    </div>
    <div class="glass-card !p-2 text-center">
      <div class="text-gold font-bold text-[10px]">Signal 3</div>
      <div class="text-[9px] text-white/60 mt-0.5">File<br/>Activity</div>
    </div>
  </div>
</div>

<p class="text-xs text-center text-[var(--ot-gray-400)] mt-2">Signals define <em>what</em> to look for, with data requirements, methodology, and entity scoping.</p>

</div>

</v-click>

---
layout: two-cols
---

## Finer Coverage Than <span class="text-gold">ATT&CK Heatmaps</span>

<div class="pr-4">

### <span class="text-warn">Traditional: ATT&CK Navigator</span>

<p class="text-xs mb-2">Binary coverage per technique - "detected" or "not detected"</p>

<div class="glass-card">
  <div class="flex gap-1 mb-1">
    <span class="inline-block w-7 h-7 rounded bg-[rgba(56,201,122,0.50)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1059</span>
    <span class="inline-block w-7 h-7 rounded bg-[rgba(255,255,255,0.04)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1055</span>
    <span class="inline-block w-7 h-7 rounded bg-[rgba(56,201,122,0.50)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1078</span>
    <span class="inline-block w-7 h-7 rounded bg-[rgba(255,255,255,0.04)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1203</span>
    <span class="inline-block w-7 h-7 rounded bg-[rgba(56,201,122,0.50)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1547</span>
    <span class="inline-block w-7 h-7 rounded bg-[rgba(255,255,255,0.04)] text-[7px] flex items-center justify-center text-white/65 font-mono font-semibold">T1574</span>
  </div>
  <p class="text-xs text-center text-warn mt-2">✗ No context on <em>how well</em> or <em>against what</em></p>
</div>

</div>

::right::

<v-click>

<div class="pl-4">

### <span class="text-gold">OpenTide: Multi-Dimensional</span>

<p class="text-xs mb-2">Coverage mapped per TVM → DOM → Signal → Rule</p>

<div class="glass-card text-sm">
  <div class="flex justify-between py-1 border-b border-white/5">
    <span>☣️ DLL Side-Loading <span class="text-dim">(T1574.002)</span></span>
    <span class="badge badge-green text-xs">3 signals · 2 rules</span>
  </div>
  <div class="flex justify-between py-1 border-b border-white/5">
    <span>☣️ Supply Chain NSIS <span class="text-dim">(T1195.002)</span></span>
    <span class="badge badge-gold text-xs">2 signals · 1 rule</span>
  </div>
  <div class="flex justify-between py-1 border-b border-white/5">
    <span>☣️ Registry Persistence <span class="text-dim">(T1547.001)</span></span>
    <span class="badge badge-green text-xs">4 signals · 3 rules</span>
  </div>
  <div class="flex justify-between py-1 border-b border-white/5">
    <span>☣️ LOLC2 via temp.sh <span class="text-dim">(T1567.002)</span></span>
    <span class="badge badge-red text-xs">1 signal · 0 rules</span>
  </div>
  <div class="flex justify-between py-1">
    <span>☣️ Cobalt Strike Beacon <span class="text-dim">(T1071.001)</span></span>
    <span class="badge badge-green text-xs">5 signals · 4 rules</span>
  </div>
  <p class="text-xs text-center text-gold mt-2">✓ You know <em>exactly what's covered, how, and where gaps remain</em></p>
</div>

</div>

</v-click>

---

## Detection-as-Code <span class="text-gold">Pipeline</span>

<p class="text-sm text-[var(--ot-gray-400)] mb-4">Automated from commit to deployment across 7+ platforms</p>

<div class="pipeline-flow">
  <div class="pipeline-stage active">📝 YAML<br>Objects</div>
  <div class="pipeline-stage">📋 Index<br>Generation</div>
  <div class="pipeline-stage">🔍 Schema<br>Validation</div>
  <div class="pipeline-stage">🧪 Query<br>Validation</div>
  <div class="pipeline-stage active">🚀 Plugin<br>Deployment</div>
  <div class="pipeline-stage">📖 Wiki<br>Generation</div>
</div>

<v-click>

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="glass-card">
  <h3>Status-Driven Lifecycle</h3>
  <div class="flex items-center gap-1 flex-wrap my-2">
    <span class="badge badge-navy text-xs">DESIGN</span>
    <span class="text-gold">→</span>
    <span class="badge badge-navy text-xs">DEV</span>
    <span class="text-gold">→</span>
    <span class="badge badge-navy text-xs">STAGING</span>
    <span class="text-gold">→</span>
    <span class="badge badge-gold text-xs">PRODUCTION</span>
  </div>
  <p class="text-xs mt-1">Rules automatically deploy or disable based on status transitions in the YAML.</p>
</div>

<div class="glass-card">
  <h3>Multi-System Support</h3>
  <p class="text-xs">One MDR file, multiple deployment targets:</p>
  <div class="flex flex-wrap gap-1 mt-2">
    <span class="badge badge-navy text-xs">Microsoft Sentinel</span>
    <span class="badge badge-navy text-xs">CrowdStrike XDR</span>
    <span class="badge badge-navy text-xs">Splunk</span>
    <span class="badge badge-navy text-xs">MDE</span>
    <span class="badge badge-navy text-xs">SentinelOne</span>
    <span class="badge badge-navy text-xs">Carbon Black</span>
    <span class="badge badge-navy text-xs">HarfangLab</span>
  </div>
</div>

</div>

</v-click>
