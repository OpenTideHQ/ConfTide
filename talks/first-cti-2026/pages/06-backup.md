---
disabled: false
---

## <span class="text-gold">Backup</span>: Complete Object Model

<table class="mt-4">
  <thead>
    <tr><th>Object</th><th>Abbr.</th><th>Purpose</th><th>Location</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="text-threat">Threat Vector</span></td>
      <td><code>TVM</code></td>
      <td>Atomically modelled TTP from intelligence</td>
      <td><code>Objects/Threat Vectors/</code></td>
    </tr>
    <tr>
      <td><span class="text-detect">Detection Objective</span></td>
      <td><code>DOM</code></td>
      <td>Detection strategy with signals</td>
      <td><code>Objects/Detection Objectives/</code></td>
    </tr>
    <tr>
      <td><span class="text-rule">Detection Rule</span></td>
      <td><code>MDR</code></td>
      <td>Detection-as-Code for deployment</td>
      <td><code>Objects/Detection Rules/</code></td>
    </tr>
    <tr>
      <td><span class="text-[var(--ot-gray-400)]">Detection Model</span></td>
      <td><code>CDM</code></td>
      <td>Legacy modelling approach</td>
      <td class="text-[var(--ot-gray-400)]"><code>Objects/Detection Models/</code></td>
    </tr>
    <tr>
      <td><span class="text-[var(--ot-gray-400)]">Business Request</span></td>
      <td><code>BDR</code></td>
      <td>Compliance-driven detection needs</td>
      <td class="text-[var(--ot-gray-400)]"><code>Objects/Business Requests/</code></td>
    </tr>
  </tbody>
</table>

---
layout: two-cols
---

## <span class="text-gold">Backup</span>: Tech Stack

<div class="pr-4">

| Layer | Technology |
|-------|-----------|
| Language | `Python 3.10+` |
| Objects | `YAML` |
| Schemas | `JSON Schema (Draft-07)` |
| Config | `TOML` |
| Index | `JSON (index.json)` |
| Identity | `UUIDv4` |
| VCS | `Git (submodule)` |
| IDE | `VS Code + SyntaxTide` |

</div>

::right::

<div class="pl-4">

| CI/CD | Support |
|-------|---------|
| GitHub Actions | <span class="text-rule">✓ Recommended</span> |
| Azure DevOps | <span class="text-rule">✓</span> |
| GitLab CI | <span class="text-rule">✓</span> |

### Detection Platforms

<div class="flex flex-wrap gap-1 mt-3">
  <span class="badge badge-navy text-[10px]">Microsoft Sentinel</span>
  <span class="badge badge-navy text-[10px]">CrowdStrike XDR</span>
  <span class="badge badge-navy text-[10px]">Splunk Enterprise</span>
  <span class="badge badge-navy text-[10px]">Defender for Endpoint</span>
  <span class="badge badge-navy text-[10px]">SentinelOne</span>
  <span class="badge badge-navy text-[10px]">Carbon Black Cloud</span>
  <span class="badge badge-navy text-[10px]">HarfangLab</span>
</div>

</div>
