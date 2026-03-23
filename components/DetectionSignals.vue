<template>
  <div class="signal-container">
    <svg viewBox="0 0 380 280" class="signal-svg">
      <defs>
        <filter id="sig-glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="sig-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(91,117,217,0.15)" />
          <stop offset="100%" stop-color="rgba(91,117,217,0.02)" />
        </radialGradient>
      </defs>

      <!-- DOM node (center top) -->
      <g :opacity="visible ? 1 : 0" :style="tIn(0.2)">
        <circle cx="190" cy="60" r="45" fill="url(#sig-center)" stroke="rgba(91,117,217,0.45)" stroke-width="2" />
        <text x="190" y="50" text-anchor="middle" font-size="20">🎯</text>
        <text x="190" y="70" text-anchor="middle" fill="#5B75D9" font-weight="700" font-size="11" font-family="'Inter',sans-serif">DOM</text>
        <text x="190" y="84" text-anchor="middle" fill="#7E8BB0" font-size="8" font-family="'Inter',sans-serif">Detection Objective</text>
      </g>

      <!-- Connection lines (animated draw-in) -->
      <line v-for="(sig, i) in signals" :key="'line-'+i"
            :x1="190" y1="105"
            :x2="sig.x" :y2="sig.y - 32"
            stroke="rgba(245,197,24,0.30)" stroke-width="1.8"
            :stroke-dasharray="150"
            :stroke-dashoffset="visible ? 0 : 150"
            :style="{ transition: `stroke-dashoffset 1s cubic-bezier(0.23,1,0.32,1) ${0.4 + i * 0.2}s` }"
      />

      <!-- Signal nodes -->
      <g v-for="(sig, i) in signals" :key="sig.id"
         filter="url(#sig-glow)"
         :opacity="visible ? 1 : 0"
         :style="tIn(0.6 + i * 0.2)"
      >
        <circle :cx="sig.x" :cy="sig.y" r="32" fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.35)" stroke-width="1.5" :class="`signal-node signal-${i}`" />
        <text :x="sig.x" :y="sig.y - 8" text-anchor="middle" font-size="16">📡</text>
        <text :x="sig.x" :y="sig.y + 8" text-anchor="middle" fill="#F5C518" font-weight="600" font-size="9" font-family="'Inter',sans-serif">{{ sig.label }}</text>
        <text :x="sig.x" :y="sig.y + 20" text-anchor="middle" fill="#7E8BB0" font-size="7" font-family="'Inter',sans-serif">{{ sig.method }}</text>
      </g>

      <!-- Data source indicators -->
      <g v-for="(sig, i) in signals" :key="'ds-'+i"
         :opacity="visible ? 1 : 0" :style="tIn(1 + i * 0.15)"
      >
        <rect v-for="(ds, j) in sig.sources" :key="j"
              :x="sig.x - 25 + j * 28" :y="sig.y + 36"
              width="24" height="16" rx="4"
              fill="rgba(91,117,217,0.08)" stroke="rgba(91,117,217,0.20)" stroke-width="0.8"
        />
        <text v-for="(ds, j) in sig.sources" :key="'dst-'+j"
              :x="sig.x - 25 + j * 28 + 12" :y="sig.y + 48"
              text-anchor="middle" fill="#7E8BB0" font-size="6" font-family="'JetBrains Mono',monospace"
        >{{ ds }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const tIn = (delay) => ({
  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
})

const signals = [
  { id: 1, label: 'Signal 1', method: 'Process Monitoring', x: 75, y: 195, sources: ['Sys', 'MDE'] },
  { id: 2, label: 'Signal 2', method: 'File Analysis', x: 190, y: 215, sources: ['EDR', 'AV'] },
  { id: 3, label: 'Signal 3', method: 'Network Monitoring', x: 305, y: 195, sources: ['DNS', 'Prx'] },
]
</script>

<style scoped>
.signal-container {
  display: flex;
  justify-content: center;
}
.signal-svg {
  width: 100%;
  max-width: 380px;
}
.signal-node {
  animation: signal-breathe 3s ease-in-out infinite;
}
.signal-0 { animation-delay: 0s; }
.signal-1 { animation-delay: 0.5s; }
.signal-2 { animation-delay: 1s; }
@keyframes signal-breathe {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(245,197,24,0.15)); }
  50% { filter: drop-shadow(0 0 12px rgba(245,197,24,0.4)); }
}
</style>
