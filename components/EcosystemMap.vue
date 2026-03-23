<template>
  <div ref="container" class="ecosystem-container">
    <svg :viewBox="`0 0 ${W} ${H}`" class="ecosystem-svg">
      <defs>
        <!-- Glow filters per color -->
        <filter v-for="f in filters" :key="f.id" :id="f.id">
          <feGaussianBlur :stdDeviation="f.std" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <!-- Animated gradient for arcs -->
        <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(245,197,24,0.6)" />
          <stop offset="100%" stop-color="rgba(91,117,217,0.4)" />
        </linearGradient>
      </defs>

      <!-- Connection arcs (drawn behind nodes) -->
      <g class="connections">
        <path
          v-for="(arc, i) in arcs"
          :key="'arc-'+i"
          :d="arc.d"
          fill="none"
          :stroke="arc.color"
          stroke-width="1.8"
          :stroke-dasharray="arc.len"
          :stroke-dashoffset="visible ? 0 : arc.len"
          :style="{ transition: `stroke-dashoffset ${1.2 + i * 0.2}s var(--ot-ease, cubic-bezier(0.23,1,0.32,1)) ${0.3 + i * 0.15}s` }"
          opacity="0.35"
        />
        <!-- Flowing particles along each arc -->
        <circle
          v-for="(arc, i) in arcs"
          :key="'particle-'+i"
          :r="2.5"
          :fill="arc.color"
          :opacity="visible ? 0.7 : 0"
          :style="{ transition: `opacity 0.5s ${0.8 + i * 0.2}s` }"
        >
          <animateMotion
            :dur="`${3 + i * 0.5}s`"
            repeatCount="indefinite"
            :path="arc.d"
          />
        </circle>
      </g>

      <!-- Orbit rings (decorative) -->
      <ellipse
        v-for="(ring, i) in orbitRings"
        :key="'ring-'+i"
        :cx="center.x" :cy="center.y"
        :rx="ring.rx" :ry="ring.ry"
        fill="none"
        :stroke="ring.color"
        stroke-width="0.8"
        :stroke-dasharray="ring.dash"
        :opacity="visible ? 0.12 : 0"
        :style="{ transition: `opacity 1s ${i * 0.3}s` }"
      />

      <!-- Nodes -->
      <g
        v-for="(node, i) in nodes"
        :key="node.id"
        :transform="`translate(${node.x}, ${node.y})`"
        :opacity="visible ? 1 : 0"
        :style="{ transition: `opacity 0.6s var(--ot-ease) ${0.2 + i * 0.12}s, transform 0.6s var(--ot-ease) ${0.2 + i * 0.12}s` }"
        class="node-group"
      >
        <!-- Background glow -->
        <ellipse
          :rx="node.size + 8" :ry="node.size * 0.6 + 6"
          :fill="node.glow"
          :filter="node.isCore ? 'url(#glow-gold)' : ''"
          class="node-glow"
        />
        <!-- Main shape -->
        <rect
          :x="-(node.w / 2)" :y="-(node.h / 2)"
          :width="node.w" :height="node.h"
          :rx="node.isCore ? 18 : 14"
          :fill="node.bg"
          :stroke="node.border"
          :stroke-width="node.isCore ? 2.5 : 1.5"
        />
        <!-- Icon -->
        <text
          :y="node.isCore ? -8 : -4"
          text-anchor="middle"
          :font-size="node.isCore ? 22 : 16"
        >{{ node.icon }}</text>
        <!-- Label -->
        <text
          :y="node.isCore ? 14 : 14"
          text-anchor="middle"
          :fill="node.labelColor"
          :font-size="node.isCore ? 16 : 13"
          font-weight="700"
          font-family="'Inter', sans-serif"
        >{{ node.label }}</text>
        <!-- Subtitle -->
        <text
          :y="node.isCore ? 32 : 28"
          text-anchor="middle"
          fill="#7E8BB0"
          :font-size="node.isCore ? 10 : 9"
          font-family="'Inter', sans-serif"
        >{{ node.sub }}</text>
      </g>

      <!-- Label on arcs -->
      <text
        v-for="(lbl, i) in arcLabels"
        :key="'lbl-'+i"
        :x="lbl.x" :y="lbl.y"
        text-anchor="middle"
        fill="#7E8BB0"
        font-size="9"
        font-family="'Inter', sans-serif"
        :opacity="visible ? 0.7 : 0"
        :style="{ transition: `opacity 0.8s ${1 + i * 0.2}s` }"
      >{{ lbl.text }}</text>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const container = ref(null)
const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const W = 820
const H = 380
const center = { x: W / 2, y: 155 }

const filters = [
  { id: 'glow-gold', std: 8 },
  { id: 'glow-blue', std: 5 },
  { id: 'glow-green', std: 5 },
]

const orbitRings = [
  { rx: 155, ry: 90, color: 'rgba(245,197,24,0.3)', dash: '6 8' },
  { rx: 260, ry: 140, color: 'rgba(91,117,217,0.2)', dash: '4 10' },
]

const nodes = [
  { id: 'core', label: 'CoreTide', sub: 'Engine · Schemas · CI/CD', icon: '⚙️', x: center.x, y: center.y, w: 200, h: 80, size: 50, isCore: true, bg: 'rgba(245,197,24,0.10)', border: '#F5C518', labelColor: '#F5C518', glow: 'rgba(245,197,24,0.06)' },
  { id: 'init', label: 'InitTide', sub: 'Template Bootstrap', icon: '🚀', x: 130, y: 175, w: 160, h: 60, size: 30, isCore: false, bg: 'rgba(91,117,217,0.06)', border: 'rgba(91,117,217,0.35)', labelColor: '#5B75D9', glow: 'rgba(91,117,217,0.04)' },
  { id: 'share', label: 'ShareTide', sub: 'TLP:CLEAR Community', icon: '🤝', x: center.x, y: 290, w: 170, h: 60, size: 30, isCore: false, bg: 'rgba(56,201,122,0.06)', border: 'rgba(56,201,122,0.35)', labelColor: '#38C97A', glow: 'rgba(56,201,122,0.04)' },
  { id: 'syntax', label: 'SyntaxTide', sub: 'VS Code Extension', icon: '🧩', x: 690, y: 175, w: 160, h: 60, size: 30, isCore: false, bg: 'rgba(155,109,255,0.06)', border: 'rgba(155,109,255,0.35)', labelColor: '#9B6DFF', glow: 'rgba(155,109,255,0.04)' },
  { id: 'wiki', label: 'WikiTide', sub: 'Auto-Gen Docs', icon: '📖', x: 130, y: 330, w: 140, h: 50, size: 24, isCore: false, bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.12)', labelColor: '#7E8BB0', glow: 'rgba(255,255,255,0.02)' },
  { id: 'agent', label: 'AgenTide', sub: 'AI Coding Agents', icon: '🤖', x: 690, y: 330, w: 150, h: 50, size: 24, isCore: false, bg: 'rgba(155,109,255,0.06)', border: 'rgba(155,109,255,0.28)', labelColor: '#9B6DFF', glow: 'rgba(155,109,255,0.03)' },
]

// Quadratic bezier arcs between CoreTide and satellites
function arcPath(from, to) {
  const mx = (from.x + to.x) / 2
  const my = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  // perpendicular offset for curve
  const off = Math.min(40, Math.sqrt(dx*dx + dy*dy) * 0.15)
  const cx = mx + (dy > 0 ? -off : off)
  const cy = my + (dx > 0 ? off : -off)
  return `M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`
}

function pathLen(d) {
  // Approximate
  return 400
}

const arcs = computed(() => {
  const core = nodes[0]
  const satellites = nodes.slice(1)
  return satellites.map((sat, i) => ({
    d: arcPath(core, sat),
    color: sat.labelColor,
    len: pathLen(),
  }))
})

const arcLabels = [
  { x: 240, y: 145, text: 'submodule' },
  { x: center.x, y: 240, text: 'community content' },
  { x: 580, y: 145, text: 'extension' },
  { x: 200, y: 268, text: 'auto-docs' },
  { x: 620, y: 268, text: 'AGENTS.md' },
]
</script>

<style scoped>
.ecosystem-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.ecosystem-svg {
  width: 100%;
  max-width: 820px;
}
.node-group {
  cursor: default;
}
.node-group:hover .node-glow {
  opacity: 0.8;
}
.node-glow {
  transition: opacity 0.4s;
  opacity: 0.5;
}
</style>
