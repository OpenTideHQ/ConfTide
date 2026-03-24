---
layout: center
class: text-center
---

<div class="relative">
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 text-[5em] font-black text-[rgba(155,109,255,0.07)] select-none">03</span>
  <div class="relative z-1">
    <span class="badge badge-purple">AI-POWERED</span>
    <h2 class="!mt-3">Agen<span class="text-agent">Tide</span></h2>
    <p class="text-[var(--ot-gray-400)]">When structured frameworks meet AI coding agents</p>
  </div>
</div>

---

## The Agen<span class="text-agent">Tide</span> Hypothesis

<p class="text-sm text-[var(--ot-gray-400)] mb-4">What if AI could be a <strong>Detection Engineer</strong> - not just an assistant?</p>

<div class="grid grid-cols-2 gap-5 mb-6">

<div class="glass-card">
  <p class="text-sm">What if an AI agent could read a raw threat intelligence report and <strong class="text-gold">autonomously produce schema-compliant, CI-validated, human-reviewable detection objects</strong>?</p>
</div>

<div class="glass-card">
  <p class="text-sm">Not a chatbot. Not autocomplete. A <strong class="text-agent">full-cycle coding agent</strong> that models threats, designs detections, writes queries, opens PRs - with guardrails.</p>
</div>

</div>

<v-click>

<div class="grid grid-cols-3 gap-5">

<div class="text-center">
  <span class="stat-number">6</span>
  <span class="stat-label">Pull Requests</span>
  <p class="text-xs text-[var(--ot-gray-400)]">Fully autonomous</p>
</div>

<div class="text-center">
  <span class="stat-number">30+</span>
  <span class="stat-label">Objects Created</span>
  <p class="text-xs text-[var(--ot-gray-400)]">TVMs, DOMs, MDRs</p>
</div>

<div class="text-center">
  <span class="stat-number">~15 min</span>
  <span class="stat-label">Average per PR</span>
  <p class="text-xs text-[var(--ot-gray-400)]">End-to-end</p>
</div>

</div>

</v-click>

---

## Agen<span class="text-agent">Tide</span> Architecture

<div class="grid grid-cols-3 gap-6 mt-6 items-center">
  <div class="space-y-2">
    <div class="text-center text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Inputs</div>
    <div class="glass-card threat !p-2.5 text-center">
      <div class="text-threat font-bold text-xs">📰 Intel Report</div>
      <div class="text-[10px] text-white/50 mt-0.5">Raw threat intelligence</div>
    </div>
    <div class="glass-card !p-2.5 text-center">
      <div class="text-gold font-bold text-xs">📝 AGENTS.md</div>
      <div class="text-[10px] text-white/50 mt-0.5">Prime directives</div>
    </div>
    <div class="glass-card !p-2.5 text-center">
      <div class="text-white/80 font-bold text-xs">📌 JSON Schemas</div>
      <div class="text-[10px] text-white/50 mt-0.5">6.3MB validation rules</div>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div class="glass-card agent !p-5 text-center border-2 border-[var(--ot-agent)]">
      <div class="text-3xl mb-2">🤖</div>
      <div class="text-agent font-black text-sm">Agen<span class="text-white">Tide</span></div>
      <div class="text-[10px] text-white/50 mt-2">Copilot Coding Agent</div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="text-center text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Outputs</div>
    <div class="glass-card threat !p-2.5 text-center">
      <div class="text-threat font-bold text-xs">☣️ TVMs (YAML)</div>
    </div>
    <div class="glass-card detect !p-2.5 text-center">
      <div class="text-detect font-bold text-xs">🎯 DOMs (YAML)</div>
    </div>
    <div class="glass-card rule !p-2.5 text-center">
      <div class="text-rule font-bold text-xs">🚨 MDRs (KQL/SPL)</div>
    </div>
    <div class="glass-card !p-2.5 text-center">
      <div class="text-gold font-bold text-xs">🔀 Pull Request</div>
      <div class="text-[10px] text-white/50 mt-0.5">Human review + CI</div>
    </div>
  </div>
</div>

---
layout: two-cols
---

## <code>AGENTS.md</code>: The <span class="text-agent">Brain</span>

<p class="text-xs text-[var(--ot-gray-400)] mb-3">A comprehensive instruction framework that turns AI into a Detection Engineer</p>

<div class="pr-4">

### 5 Prime Directives

<v-clicks>

<div class="flex gap-2 items-start mb-2 text-sm">
  <span class="badge badge-purple min-w-5 text-center">1</span>
  <div><strong>Correctness</strong> - Exact, cognitively correct threat decomposition</div>
</div>

<div class="flex gap-2 items-start mb-2 text-sm">
  <span class="badge badge-purple min-w-5 text-center">2</span>
  <div><strong>Consistency</strong> - Update existing objects before creating new ones</div>
</div>

<div class="flex gap-2 items-start mb-2 text-sm">
  <span class="badge badge-purple min-w-5 text-center">3</span>
  <div><strong>Transparency</strong> - All decisions rationalised and discoverable</div>
</div>

<div class="flex gap-2 items-start mb-2 text-sm">
  <span class="badge badge-purple min-w-5 text-center">4</span>
  <div><strong>Critical Thinking</strong> - Agent can <em>disagree</em> with the user</div>
</div>

<div class="flex gap-2 items-start text-sm">
  <span class="badge badge-purple min-w-5 text-center">5</span>
  <div><strong>Autonomous</strong> - End-to-end changes without hand-holding</div>
</div>

</v-clicks>

</div>

::right::

<v-click>

<div class="pl-4">

### Guardrails

<div class="glass-card agent mb-4">
  <div class="text-xs leading-7">
    <strong class="text-threat">NEVER</strong> modify schemas, templates, or configs<br>
    <strong class="text-threat">NEVER</strong> create folders or restructure the repo<br>
    <strong class="text-gold">ENFORCE</strong> top-down: Intel → TVM → DOM → MDR<br>
    <strong class="text-gold">ENFORCE</strong> one object type per PR/MR<br>
    <strong class="text-rule">USE</strong> only provided intelligence - no hallucinations<br>
    <strong class="text-rule">VALIDATE</strong> all output against JSON schemas
  </div>
</div>

### Communication Protocol

<div class="glass-card agent">
  <div class="text-xs leading-7">
    <strong>Start</strong>: Acknowledge → Outline → Clarify → Plan<br>
    <strong>During</strong>: Explain steps → Update context → Flag decisions<br>
    <strong>End</strong>: Summarise → Explain relationships → Propose follow-up
  </div>
</div>

</div>

</v-click>

---
layout: two-cols
---

## Real Output: <span class="text-agent">Supply Chain Attack</span>

<p class="text-xs text-[var(--ot-gray-400)] mb-3">Agent autonomously processed a Kaspersky report on a Notepad++ supply chain compromise</p>

<div class="pr-4">

<div class="glass-card !p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="badge badge-green text-xs">Open</span>
    <span class="text-sm font-semibold">PR #9 - Notepad++ Supply Chain Attack TVMs</span>
  </div>
  <p class="text-xs text-[var(--ot-gray-400)] !mb-2">Author: <strong class="text-agent">Copilot coding agent</strong></p>
  <ul class="text-xs !my-0 space-y-0.5">
    <li>Notepad++ supply chain attack.yaml</li>
    <li>NSIS installer side-loading.yaml</li>
    <li>ProShow Gold exploitation.yaml</li>
    <li>Lua interpreter shellcode.yaml</li>
    <li>Chrysalis backdoor C2.yaml</li>
    <li>System reconnaissance commands.yaml</li>
    <li>LOLC2 via temp.sh.yaml</li>
    <li>Cobalt Strike Beacon deployment.yaml</li>
    <li>Registry persistence (Run key).yaml</li>
  </ul>
</div>

</div>

::right::

<div class="pl-4">

<div class="glass-card agent mb-3">
  <h3 class="!text-sm !text-agent">What the Agent Produced</h3>
  <div class="text-xs">
    <div class="flex justify-between py-1 border-b border-white/5"><span>YAML files created</span><strong class="text-gold">9</strong></div>
    <div class="flex justify-between py-1 border-b border-white/5"><span>Lines of YAML</span><strong class="text-gold">~2,800</strong></div>
    <div class="flex justify-between py-1 border-b border-white/5"><span>ATT&CK techniques mapped</span><strong class="text-gold">15</strong></div>
    <div class="flex justify-between py-1 border-b border-white/5"><span>IOCs extracted</span><strong class="text-gold">40+</strong></div>
    <div class="flex justify-between py-1"><span>Chaining relationships</span><strong class="text-gold">8 → parent</strong></div>
  </div>
</div>

<v-click>

<div class="glass-card agent">
  <h3 class="!text-sm !text-rule">Self-Correcting Behaviour</h3>
  <p class="text-xs">In PR #4, the agent <strong>corrected its own ATT&CK mapping</strong> - changing G0118 (invalid) to G0016 (APT29). In PR #8, it fixed KQL field names and added null guards.</p>
</div>

</v-click>

</div>

---
layout: two-cols
---

## Full Pipeline: <span class="text-agent">Intel → Detection</span>

<p class="text-xs text-[var(--ot-gray-400)] mb-3">PR #8 shows the complete vertical in a single agent run</p>

<div class="pr-4 space-y-3">

<div class="glass-card !py-2 !px-3 text-sm">
  <h3 class="!m-0 !text-sm">Input: Kaspersky Report</h3>
  <p class="!m-0 !mt-1 text-xs text-[var(--ot-gray-400)]">Raw threat intelligence about a supply chain campaign</p>
</div>

<v-click>
<div class="glass-card threat !py-2 !px-3 text-sm">
  <h3 class="!m-0 !text-sm !text-threat">☣️ 4 Threat Vectors Created</h3>
  <p class="!m-0 !mt-1 text-xs text-[var(--ot-gray-400)]">NSIS side-loading, recon, exfil, C2 - fully chained</p>
</div>
</v-click>

<v-click>
<div class="glass-card detect !py-2 !px-3 text-sm">
  <h3 class="!m-0 !text-sm !text-detect">🎯 1 Detection Objective</h3>
  <p class="!m-0 !mt-1 text-xs text-[var(--ot-gray-400)]">5 signals with data requirements and methodology</p>
</div>
</v-click>

<v-click>
<div class="glass-card rule !py-2 !px-3 text-sm">
  <h3 class="!m-0 !text-sm !text-rule">🚨 1 Detection Rule</h3>
  <p class="!m-0 !mt-1 text-xs text-[var(--ot-gray-400)]">Production KQL (Sentinel) + SPL (Splunk) queries</p>
</div>
</v-click>

<v-click>
<div class="glass-card rule !py-2 !px-3 text-sm">
  <h3 class="!m-0 !text-sm !text-rule">🔀 Pull Request Opened</h3>
  <p class="!m-0 !mt-1 text-xs text-[var(--ot-gray-400)]">Ready for human review with full rationale</p>
</div>
</v-click>

</div>

::right::

<v-click>

<div class="pl-4">

### Agent-Generated KQL

```sql
// Detect suspicious NSIS child processes
// from trojanised Notepad++ installer
DeviceProcessEvents
| where InitiatingProcessFileName
    has_any ("nsis", "notepad++setup")
| where FileName has_any (
    "rundll32.exe",
    "regsvr32.exe",
    "powershell.exe")
| where isnotempty(ProcessCommandLine)
| extend SuspiciousArgs =
    parse_command_line(
      ProcessCommandLine, "windows")
| project TimeGenerated,
    DeviceName,
    InitiatingProcessFileName,
    FileName,
    ProcessCommandLine
```

<p class="text-xs text-center text-[var(--ot-gray-400)] mt-1">Agent self-corrected field names & added <code>isnotempty()</code> guards</p>

</div>

</v-click>

---

## The Agent <span class="text-agent">Conversation</span>

<p class="text-sm text-[var(--ot-gray-400)] mb-4">A typical AgenTide interaction on GitHub</p>

<div class="max-w-2xl mx-auto space-y-3">

<div class="flex gap-3 items-start">
  <span class="text-2xl">🧑</span>
  <div class="glass-card flex-1 !p-3">
    <strong class="text-gold">Analyst:</strong>
    <span class="text-sm"> We just received a Kaspersky report on a Notepad++ supply chain compromise involving DLL side-loading, Chrysalis backdoor, and Cobalt Strike. Please model the full attack chain as TVMs and open a PR.</span>
  </div>
</div>

<v-click>
<div class="flex gap-3 items-start">
  <span class="text-2xl">🤖</span>
  <div class="glass-card agent flex-1 !p-3">
    <strong class="text-agent">AgenTide:</strong>
    <span class="text-sm"> I'll analyse the intelligence and create schema-compliant TVMs. Let me check existing content for overlap…</span>
    <div class="text-xs mt-2 text-[var(--ot-gray-200)]"><strong>Plan:</strong> 1 parent TVM (campaign overview) · 8 child TVMs (atomic techniques) · Chaining via <code>atomicity::implements</code> · ATT&CK mapping for each vector</div>
  </div>
</div>
</v-click>

<v-click>
<div class="flex gap-3 items-start">
  <span class="text-2xl">🤖</span>
  <div class="glass-card agent flex-1 !p-3">
    <strong class="text-agent">AgenTide:</strong>
    <span class="text-sm"> ✅ Created 9 YAML files (~2,800 lines). All pass schema validation. UUIDs generated. Chaining established. Opening PR now.</span>
    <div class="text-xs text-[var(--ot-gray-400)] mt-1">→ PR #9 opened: "Add Notepad++ supply chain attack TVMs"</div>
  </div>
</div>
</v-click>

</div>

---

## Multi-Source <span class="text-agent">Intelligence Processing</span>

<p class="text-sm text-[var(--ot-gray-400)] mb-4">AgenTide has processed diverse intelligence formats - all producing schema-compliant objects</p>

<div class="grid grid-cols-3 gap-5">

<div class="glass-card agent text-center">
  <span class="text-3xl block mb-2">📄</span>
  <h3 class="!text-agent">PDF Reports</h3>
  <p class="text-sm">NCSC RayInitiator analysis → 5 TVMs covering GRUB bootkit, shellcode loader, WebVPN abuse</p>
  <span class="badge badge-navy text-xs mt-2 inline-block">PR #5</span>
</div>

<div class="glass-card agent text-center">
  <span class="text-3xl block mb-2">📰</span>
  <h3 class="!text-agent">Blog Posts</h3>
  <p class="text-sm">Kaspersky, Wiz Research - supply chain campaigns → full attack chain modelling with IOCs</p>
  <span class="badge badge-navy text-xs mt-2 inline-block">PR #7, #9</span>
</div>

<div class="glass-card agent text-center">
  <span class="text-3xl block mb-2">💬</span>
  <h3 class="!text-agent">Short Prompts</h3>
  <p class="text-sm">"Model the SolarWinds compromise" → comprehensive TVM with 19 ATT&CK techniques</p>
  <span class="badge badge-navy text-xs mt-2 inline-block">PR #4</span>
</div>

</div>

<v-click>

<div class="text-center mt-6">
  <p class="text-sm">The key innovation isn't that AI generates text - it's that it does so within a <strong class="text-gold">rigorous engineering framework</strong>.</p>
  <p class="text-xs text-[var(--ot-gray-400)]">Version-controlled · Schema-validated · CI/CD-tested · Human-reviewed</p>
</div>

</v-click>

---
layout: two-cols
---

## Why AgenTide <span class="text-agent">Works</span>

<p class="text-xs text-[var(--ot-gray-400)] mb-3">The secret: structured frameworks make AI reliable</p>

<div class="pr-4 space-y-2">

<div class="glass-card agent !p-3">
  <h3 class="!text-sm !text-agent !mb-1">Schema Constraints</h3>
  <p class="text-xs !m-0">6.3MB JSON Schemas act as structured "knowledge" - the agent reads them at runtime to understand every field, enumeration, and validation rule. <strong>No hallucinated fields can pass validation.</strong></p>
</div>

<div class="glass-card agent !p-3">
  <h3 class="!text-sm !text-agent !mb-1">Top-Down Workflow</h3>
  <p class="text-xs !m-0">AGENTS.md enforces Intelligence → TVM → DOM → MDR ordering. The agent cannot skip steps or create rules without threat models.</p>
</div>

<div class="glass-card agent !p-3">
  <h3 class="!text-sm !text-agent !mb-1">Git as Safety Net</h3>
  <p class="text-xs !m-0">Every agent output is a PR - human reviewable, CI-validated, revertible. <strong>No direct deployment without review.</strong></p>
</div>

</div>

::right::

<v-click>

<div class="pl-4">

<div class="space-y-3">
  <div class="glass-card agent !p-3">
    <div class="flex items-center gap-3">
      <span class="text-xl">🔍</span>
      <div>
        <div class="text-agent font-bold text-sm">Transparency</div>
        <div class="text-xs text-white/60 mt-0.5">All decisions logged and discoverable in PR descriptions</div>
      </div>
    </div>
  </div>
  <div class="glass-card agent !p-3">
    <div class="flex items-center gap-3">
      <span class="text-xl">🛡️</span>
      <div>
        <div class="text-agent font-bold text-sm">Guardrails</div>
        <div class="text-xs text-white/60 mt-0.5">NEVER/ENFORCE directives, schema validation at every step</div>
      </div>
    </div>
  </div>
  <div class="glass-card agent !p-3">
    <div class="flex items-center gap-3">
      <span class="text-xl">📋</span>
      <div>
        <div class="text-agent font-bold text-sm">Traceability</div>
        <div class="text-xs text-white/60 mt-0.5">Git PR trail - every change human-reviewable and revertible</div>
      </div>
    </div>
  </div>
</div>

</div>

</v-click>
