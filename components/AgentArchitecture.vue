<template>
  <div class="arch-container">
    <svg :viewBox="`0 0 ${W} ${H}`" class="arch-svg">
      <defs>
        <radialGradient id="aa-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(155,109,255,0.22)" />
          <stop offset="100%" stop-color="rgba(155,109,255,0.02)" />
        </radialGradient>
        <filter id="aa-glow">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="aa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#9B6DFF" />
        </marker>
      </defs>

      <!-- Orbital rings around agent -->
      <ellipse :cx="cx" :cy="cy" rx="95" ry="55" fill="none" stroke="rgba(155,109,255,0.08)" stroke-width="1" stroke-dasharray="6 8" class="orbit" />
      <ellipse :cx="cx" :cy="cy" rx="140" ry="80" fill="none" stroke="rgba(155,109,255,0.05)" stroke-width="1" stroke-dasharray="4 12" class="orbit orbit-slow" />

      <!-- INPUT NODES (left side) -->
      <g v-for="(inp, i) in inputs" :key="inp.id"
         :opacity="visible ? 1 : 0"
         :style="tIn(0.2 + i * 0.15)"
      >
        <rect :x="inp.x" :y="inp.y" :width="inp.w" :height="inp.h" :rx="14"
              :fill="inp.bg" :stroke="inp.border" stroke-width="1.5" />
        <text :x="inp.x + inp.w/2" :y="inp.y + inp.h/2 - 6" text-anchor="middle"
              :fill="inp.color" font-weight="700" :font-size="inp.fs || 13" font-family="'Inter',sans-serif">{{ inp.label }}</text>
        <text :x="inp.x + inp.w/2" :y="inp.y + inp.h/2 + 12" text-anchor="middle"
              fill="#7E8BB0" font-size="9" font-family="'Inter',sans-serif">{{ inp.sub }}</text>
      </g>

      <!-- Central AI agent (with animated glow) -->
      <g :opacity="visible ? 1 : 0" :style="tIn(0.5)">
        <circle :cx="cx" :cy="cy" r="70" fill="url(#aa-core)" stroke="rgba(155,109,255,0.35)" stroke-width="2" filter="url(#aa-glow)" class="agent-core" />
        <text :x="cx" :y="cy - 12" text-anchor="middle" font-size="30">🤖</text>
        <text :x="cx" :y="cy + 12" text-anchor="middle" fill="#fff" font-weight="700" font-size="14" font-family="'Inter',sans-serif">AI Agent</text>
        <text :x="cx" :y="cy + 28" text-anchor="middle" fill="#7E8BB0" font-size="9" font-family="'Inter',sans-serif">Copilot Coding Agent</text>
      </g>

      <!-- Intelligence input (bottom) -->
      <g :opacity="visible ? 1 : 0" :style="tIn(0.7)">
        <rect x="300" y="335" width="240" height="55" rx="14" fill="rgba(224,82,101,0.06)" stroke="rgba(224,82,101,0.22)" stroke-width="1.5" />
        <text x="420" y="358" text-anchor="middle" fill="#E05265" font-weight="700" font-size="12" font-family="'Inter',sans-serif">📰 Intelligence Input</text>
        <text x="420" y="375" text-anchor="middle" fill="#7E8BB0" font-size="9" font-family="'Inter',sans-serif">Reports · PDFs · Blog Posts · MISP Events</text>
      </g>

      <!-- OUTPUT NODES (right side) -->
      <g v-for="(out, i) in outputs" :key="out.id"
         :opacity="visible ? 1 : 0"
         :style="tIn(0.8 + i * 0.12)"
      >
        <rect :x="out.x" :y="out.y" :width="out.w" :height="out.h" :rx="12"
              :fill="out.bg" :stroke="out.border" stroke-width="1.5" />
        <text :x="out.x + out.w/2" :y="out.y + out.h/2 - 2" text-anchor="middle"
              :fill="out.color" font-weight="600" font-size="11" font-family="'Inter',sans-serif">{{ out.icon }} {{ out.label }}</text>
        <text :x="out.x + out.w/2" :y="out.y + out.h/2 + 14" text-anchor="middle"
              fill="#7E8BB0" font-size="8" font-family="'JetBrains Mono',monospace">{{ out.sub }}</text>
      </g>

      <!-- Connection lines: inputs → agent -->
      <g v-for="(line, i) in inputLines" :key="'il-'+i">
        <line :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
              :stroke="line.color" stroke-width="1.5" marker-end="url(#aa-arrow)"
              :opacity="visible ? 0.35 : 0" :style="tIn(0.6 + i * 0.1)" />
        <!-- Flowing particle -->
        <circle r="2.5" :fill="line.color" :opacity="visible ? 0.6 : 0" :style="tIn(1)">
          <animate attributeName="cx" :values="`${line.x1};${line.x2}`" :dur="`${3+i*0.4}s`" repeatCount="indefinite" />
          <animate attributeName="cy" :values="`${line.y1};${line.y2}`" :dur="`${3+i*0.4}s`" repeatCount="indefinite" />
        </circle>
      </g>

      <!-- Connection lines: agent → outputs -->
      <g v-for="(line, i) in outputLines" :key="'ol-'+i">
        <line :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
              :stroke="line.color" stroke-width="1.5" marker-end="url(#aa-arrow)"
              :opacity="visible ? 0.35 : 0" :style="tIn(0.9 + i * 0.1)" />
        <circle r="2.5" :fill="line.color" :opacity="visible ? 0.6 : 0" :style="tIn(1.2)">
          <animate attributeName="cx" :values="`${line.x1};${line.x2}`" :dur="`${2.5+i*0.3}s`" repeatCount="indefinite" />
          <animate attributeName="cy" :values="`${line.y1};${line.y2}`" :dur="`${2.5+i*0.3}s`" repeatCount="indefinite" />
        </circle>
      </g>

      <!-- Intel → agent line -->
      <line :x1="420" y1="335" :x2="420" :y2="cy + 70"
            stroke="rgba(224,82,101,0.25)" stroke-width="1.5" marker-end="url(#aa-arrow)"
            :opacity="visible ? 0.35 : 0" :style="tIn(0.8)" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const W = 840
const H = 400
const cx = 420
const cy = 185

const tIn = (delay) => ({
  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
})

const inputs = [
  { id: 'agents', label: 'AGENTS.md', sub: '5 Directives · 10-Step Workflow', x: 15, y: 22, w: 195, h: 72, bg: 'rgba(155,109,255,0.08)', border: 'rgba(155,109,255,0.35)', color: '#9B6DFF', fs: 14 },
  { id: 'schemas', label: 'JSON Schemas', sub: '6.3MB TVM · 3.9MB DOM · 341KB MDR', x: 15, y: 115, w: 195, h: 60, bg: 'rgba(245,197,24,0.06)', border: 'rgba(245,197,24,0.25)', color: '#F5C518' },
  { id: 'templates', label: 'YAML Templates', sub: 'Object scaffolds & examples', x: 15, y: 198, w: 195, h: 55, bg: 'rgba(91,117,217,0.06)', border: 'rgba(91,117,217,0.22)', color: '#5B75D9' },
]

const outputs = [
  { id: 'tvms', icon: '☣️', label: 'TVMs', sub: 'schema-validated YAML', x: 630, y: 35, w: 185, h: 48, bg: 'rgba(224,82,101,0.08)', border: 'rgba(224,82,101,0.25)', color: '#E05265' },
  { id: 'doms', icon: '🎯', label: 'DOMs + Signals', sub: 'with data requirements', x: 630, y: 98, w: 185, h: 48, bg: 'rgba(91,117,217,0.08)', border: 'rgba(91,117,217,0.25)', color: '#5B75D9' },
  { id: 'mdrs', icon: '🚨', label: 'MDRs + Queries', sub: 'KQL, SPL production-ready', x: 630, y: 161, w: 185, h: 48, bg: 'rgba(56,201,122,0.08)', border: 'rgba(56,201,122,0.25)', color: '#38C97A' },
  { id: 'pr', icon: '🔀', label: 'Pull Request', sub: 'Ready for human review', x: 630, y: 230, w: 185, h: 48, bg: 'rgba(56,201,122,0.05)', border: 'rgba(56,201,122,0.18)', color: '#38C97A' },
]

const inputLines = [
  { x1: 210, y1: 58, x2: cx - 70, y2: cy - 30, color: 'rgba(155,109,255,0.4)' },
  { x1: 210, y1: 145, x2: cx - 70, y2: cy, color: 'rgba(245,197,24,0.4)' },
  { x1: 210, y1: 225, x2: cx - 70, y2: cy + 20, color: 'rgba(91,117,217,0.4)' },
]

const outputLines = [
  { x1: cx + 70, y1: cy - 30, x2: 630, y2: 59, color: 'rgba(224,82,101,0.4)' },
  { x1: cx + 70, y1: cy - 10, x2: 630, y2: 122, color: 'rgba(91,117,217,0.4)' },
  { x1: cx + 70, y1: cy + 10, x2: 630, y2: 185, color: 'rgba(56,201,122,0.4)' },
  { x1: cx + 70, y1: cy + 35, x2: 630, y2: 254, color: 'rgba(56,201,122,0.3)' },
]
</script>

<style scoped>
.arch-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.arch-svg {
  width: 100%;
  max-width: 840px;
}
.orbit {
  animation: orbit-rotate 30s linear infinite;
  transform-origin: center;
}
.orbit-slow {
  animation-duration: 45s;
  animation-direction: reverse;
}
@keyframes orbit-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.agent-core {
  animation: agent-pulse 4s ease-in-out infinite;
}
@keyframes agent-pulse {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(155,109,255,0.2)); }
  50% { filter: drop-shadow(0 0 24px rgba(155,109,255,0.4)); }
}
</style>
