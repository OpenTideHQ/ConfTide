<template>
  <div class="pipeline-container">
    <svg :viewBox="`0 0 ${W} ${H}`" class="pipeline-svg">
      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#F5C518" />
        </marker>
        <linearGradient v-for="g in gradients" :key="g.id" :id="g.id" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" :stop-color="g.from" />
          <stop offset="100%" :stop-color="g.to" />
        </linearGradient>
        <filter id="pf-glow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- Layer boxes -->
      <g v-for="(layer, i) in layers" :key="layer.id">
        <g :opacity="visible ? 1 : 0" :style="tIn(0.15 * i)">
          <!-- Background -->
          <rect
            :x="20" :y="layer.y"
            :width="W - 40" :height="layer.h"
            :rx="16"
            :fill="`url(#${layer.gradId})`"
            :stroke="layer.stroke"
            stroke-width="1.5"
          />
          <!-- Icon + Label -->
          <text :x="50" :y="layer.y + layer.h / 2 - 6" :fill="layer.color" font-weight="800" font-size="14" font-family="'Inter',sans-serif">
            {{ layer.icon }} {{ layer.label }}
          </text>
          <!-- Subtitle -->
          <text :x="50" :y="layer.y + layer.h / 2 + 14" fill="#7E8BB0" font-size="10" font-family="'Inter',sans-serif">
            {{ layer.sub }}
          </text>
          <!-- Right-side badges -->
          <g v-for="(badge, j) in layer.badges" :key="j">
            <rect
              :x="W - 40 - (layer.badges.length - j) * 95"
              :y="layer.y + layer.h / 2 - 10"
              width="88" height="20" rx="10"
              :fill="badge.bg"
              :stroke="badge.border"
              stroke-width="1"
            />
            <text
              :x="W - 40 - (layer.badges.length - j) * 95 + 44"
              :y="layer.y + layer.h / 2 + 3"
              text-anchor="middle"
              :fill="badge.textColor"
              font-size="8" font-weight="600" font-family="'Inter',sans-serif"
            >{{ badge.text }}</text>
          </g>
        </g>
      </g>

      <!-- Animated connection lines between layers -->
      <g v-for="(conn, i) in connections" :key="'conn-'+i">
        <!-- Main line -->
        <line
          :x1="conn.x" :y1="conn.y1"
          :x2="conn.x" :y2="conn.y2"
          stroke="#F5C518" stroke-width="1.5"
          marker-end="url(#pf-arrow)"
          :opacity="visible ? 0.5 : 0"
          :style="tIn(0.3 + i * 0.2)"
        />
        <!-- Label -->
        <text
          :x="conn.x + 8" :y="(conn.y1 + conn.y2) / 2 + 4"
          fill="#F5C518" font-size="10" font-weight="600" font-family="'Inter',sans-serif"
          :opacity="visible ? 0.7 : 0"
          :style="tIn(0.5 + i * 0.2)"
        >{{ conn.label }}</text>
        <!-- Flowing dot -->
        <circle r="3" fill="#F5C518" :opacity="visible ? 0.6 : 0" filter="url(#pf-glow)">
          <animate
            attributeName="cy"
            :from="conn.y1" :to="conn.y2"
            :dur="`${2 + i * 0.3}s`"
            repeatCount="indefinite"
          />
          <animate attributeName="cx" :values="`${conn.x};${conn.x}`" dur="1s" />
        </circle>
      </g>

      <!-- Deploy target box -->
      <g :opacity="visible ? 1 : 0" :style="tIn(1.2)">
        <rect :x="W - 250" :y="layers[3].y" :width="210" :height="layers[3].h" rx="14" fill="rgba(155,109,255,0.04)" stroke="rgba(155,109,255,0.20)" stroke-width="1" />
        <text :x="W - 145" :y="layers[3].y + 22" text-anchor="middle" fill="#9B6DFF" font-weight="600" font-size="10" font-family="'Inter',sans-serif">DEPLOY TO</text>
        <text :x="W - 145" :y="layers[3].y + 38" text-anchor="middle" fill="#7E8BB0" font-size="9" font-family="'Inter',sans-serif">Sentinel · CrowdStrike · Splunk</text>
        <text :x="W - 145" :y="layers[3].y + 52" text-anchor="middle" fill="#7E8BB0" font-size="9" font-family="'Inter',sans-serif">SentinelOne · MDE · HarfangLab</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const W = 820
const H = 420

const tIn = (delay) => ({
  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
})

const gradients = [
  { id: 'pf-threat', from: 'rgba(224,82,101,0.14)', to: 'rgba(224,82,101,0.04)' },
  { id: 'pf-tvm', from: 'rgba(224,82,101,0.10)', to: 'rgba(224,82,101,0.03)' },
  { id: 'pf-dom', from: 'rgba(91,117,217,0.10)', to: 'rgba(91,117,217,0.03)' },
  { id: 'pf-mdr', from: 'rgba(56,201,122,0.10)', to: 'rgba(56,201,122,0.03)' },
]

const layers = [
  {
    id: 'intel', y: 15, h: 60, gradId: 'pf-threat', stroke: 'rgba(224,82,101,0.20)',
    color: '#E05265', icon: '📰', label: 'INTELLIGENCE',
    sub: 'Reports · Advisories · MISP Events · CVEs · Blog Posts',
    badges: [],
  },
  {
    id: 'tvm', y: 110, h: 72, gradId: 'pf-tvm', stroke: 'rgba(224,82,101,0.28)',
    color: '#E05265', icon: '☣️', label: 'THREAT VECTORS (TVM)',
    sub: 'Atomic TTPs · ATT&CK · Kill Chain · Surface · Terrain · Severity · Impact · Chaining',
    badges: [
      { text: 'Schema-Validated', bg: 'rgba(245,197,24,0.08)', border: 'rgba(245,197,24,0.20)', textColor: '#F5C518' },
    ],
  },
  {
    id: 'dom', y: 225, h: 72, gradId: 'pf-dom', stroke: 'rgba(91,117,217,0.28)',
    color: '#5B75D9', icon: '🎯', label: 'DETECTION OBJECTIVES (DOM)',
    sub: 'Signals · Methodology · Data Requirements · Composition Strategy',
    badges: [
      { text: 'Multi-Signal', bg: 'rgba(91,117,217,0.08)', border: 'rgba(91,117,217,0.20)', textColor: '#5B75D9' },
    ],
  },
  {
    id: 'mdr', y: 340, h: 60, gradId: 'pf-mdr', stroke: 'rgba(56,201,122,0.28)',
    color: '#38C97A', icon: '🚨', label: 'DETECTION RULES (MDR)',
    sub: 'Multi-platform queries · KQL · SPL · Response procedures',
    badges: [],
  },
]

const connections = [
  { x: 400, y1: 75, y2: 110, label: '' },
  { x: 400, y1: 182, y2: 225, label: '1:N / N:1' },
  { x: 400, y1: 297, y2: 340, label: '' },
]
</script>

<style scoped>
.pipeline-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.pipeline-svg {
  width: 100%;
  max-width: 820px;
}
</style>
