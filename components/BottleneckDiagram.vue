<template>
  <div class="bottleneck-container">
    <svg :viewBox="`0 0 ${W} ${H}`" class="bottleneck-svg">
      <defs>
        <linearGradient id="bn-red" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(224,82,101,0.38)" />
          <stop offset="100%" stop-color="rgba(224,82,101,0.12)" />
        </linearGradient>
        <linearGradient id="bn-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(56,201,122,0.12)" />
          <stop offset="100%" stop-color="rgba(56,201,122,0.32)" />
        </linearGradient>
        <linearGradient id="bn-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(240,150,58,0.28)" />
          <stop offset="100%" stop-color="rgba(240,150,58,0.10)" />
        </linearGradient>
        <filter id="bn-glow-red">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <!-- Clip for funnel shape -->
        <clipPath id="funnel-clip">
          <polygon :points="funnelPoints" />
        </clipPath>
      </defs>

      <!-- INPUT ZONE: wide block of intelligence sources -->
      <g :opacity="visible ? 1 : 0" :style="tIn(0)">
        <rect x="20" y="30" width="220" height="240" rx="16" fill="url(#bn-red)" stroke="rgba(224,82,101,0.45)" stroke-width="1.5" />
        <text x="130" y="60" text-anchor="middle" fill="#E05265" font-weight="800" font-size="14" font-family="'Inter',sans-serif">INTELLIGENCE</text>
        <!-- Source items with staggered entrance -->
        <g v-for="(src, i) in sources" :key="i" :opacity="visible ? 1 : 0" :style="tIn(0.3 + i * 0.08)">
          <circle :cx="55" :cy="88 + i * 22" r="3" :fill="src.dot" />
          <text :x="68" :y="92 + i * 22" fill="#C8CEE0" font-size="11" font-family="'Inter',sans-serif">{{ src.text }}</text>
        </g>
        <!-- Rising arrows animation -->
        <text x="130" y="255" text-anchor="middle" fill="#E05265" font-size="20" font-weight="800" class="arrows-pulse">↗ ↗ ↗</text>
      </g>

      <!-- FUNNEL: the narrowing bottleneck -->
      <g :opacity="visible ? 1 : 0" :style="tIn(0.6)">
        <polygon :points="funnelPoints" fill="url(#bn-amber)" stroke="rgba(240,150,58,0.50)" stroke-width="1.5" />
        <text x="350" y="138" text-anchor="middle" fill="#F0963A" font-weight="700" font-size="13" font-family="'Inter',sans-serif">MANUAL</text>
        <text x="350" y="155" text-anchor="middle" fill="#F0963A" font-weight="700" font-size="13" font-family="'Inter',sans-serif">ANALYSIS</text>
        <text x="350" y="178" text-anchor="middle" fill="#7E8BB0" font-size="10" font-family="'Inter',sans-serif">🧑‍💻 × limited</text>
      </g>

      <!-- Particle flow: dots going through the funnel -->
      <g v-if="visible">
        <circle v-for="p in particles" :key="p.id" :r="p.r" :fill="p.color" :opacity="p.opacity">
          <animateMotion :dur="p.dur" repeatCount="indefinite" :begin="p.begin">
            <mpath :href="`#${p.path}`" />
          </animateMotion>
        </circle>
      </g>

      <!-- Particle paths (invisible) -->
      <path id="flow-top" d="M240,80 C300,80 330,130 420,150" fill="none" stroke="none" />
      <path id="flow-mid" d="M240,150 C300,150 340,150 420,150" fill="none" stroke="none" />
      <path id="flow-bot" d="M240,220 C300,220 330,170 420,150" fill="none" stroke="none" />

      <!-- Dashed connector to output -->
      <line x1="430" y1="150" x2="480" y2="150" stroke="#7E8BB0" stroke-width="2" stroke-dasharray="6 4" :opacity="visible ? 0.6 : 0" :style="tIn(1)" />

      <!-- OUTPUT ZONE: small detection results -->
      <g :opacity="visible ? 1 : 0" :style="tIn(1)">
        <rect x="485" y="112" width="165" height="76" rx="16" fill="url(#bn-green)" stroke="rgba(56,201,122,0.45)" stroke-width="1.5" />
        <text x="567" y="145" text-anchor="middle" fill="#38C97A" font-weight="800" font-size="14" font-family="'Inter',sans-serif">DETECTIONS</text>
        <text x="567" y="168" text-anchor="middle" fill="#7E8BB0" font-size="11" font-family="'Inter',sans-serif">A handful per sprint</text>
      </g>

      <!-- GAP callouts -->
      <g filter="url(#bn-glow-red)" :opacity="visible ? 1 : 0" :style="tIn(1.3)">
        <rect x="680" y="50" width="120" height="55" rx="12" fill="rgba(224,82,101,0.18)" stroke="rgba(224,82,101,0.50)" stroke-width="1.5" stroke-dasharray="5 3" />
        <text x="740" y="75" text-anchor="middle" fill="#E05265" font-weight="800" font-size="12" font-family="'Inter',sans-serif">COVERAGE</text>
        <text x="740" y="92" text-anchor="middle" fill="#E05265" font-weight="800" font-size="12" font-family="'Inter',sans-serif">GAP</text>
      </g>
      <g filter="url(#bn-glow-red)" :opacity="visible ? 1 : 0" :style="tIn(1.5)">
        <rect x="680" y="130" width="120" height="55" rx="12" fill="rgba(224,82,101,0.18)" stroke="rgba(224,82,101,0.50)" stroke-width="1.5" stroke-dasharray="5 3" />
        <text x="740" y="155" text-anchor="middle" fill="#E05265" font-weight="800" font-size="12" font-family="'Inter',sans-serif">SPEED</text>
        <text x="740" y="172" text-anchor="middle" fill="#E05265" font-weight="800" font-size="12" font-family="'Inter',sans-serif">GAP</text>
      </g>

      <!-- Connector lines to gap boxes -->
      <line x1="650" y1="130" x2="680" y2="100" stroke="rgba(224,82,101,0.25)" stroke-width="1" stroke-dasharray="4 4" :opacity="visible ? 0.5 : 0" :style="tIn(1.4)" />
      <line x1="650" y1="150" x2="680" y2="155" stroke="rgba(224,82,101,0.25)" stroke-width="1" stroke-dasharray="4 4" :opacity="visible ? 0.5 : 0" :style="tIn(1.6)" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const W = 820
const H = 300

const funnelPoints = '275,30 420,115 420,190 275,270'

const tIn = (delay) => ({
  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
})

const sources = [
  { text: 'Reports', dot: '#E05265' },
  { text: 'Advisories', dot: '#E05265' },
  { text: 'MISP Events', dot: '#F0963A' },
  { text: 'Blog Posts', dot: '#F0963A' },
  { text: 'IOC Feeds', dot: '#F5C518' },
  { text: 'CVE Disclosures', dot: '#F5C518' },
  { text: 'Threat Actors', dot: '#5B75D9' },
  { text: 'Supply Chain Alerts', dot: '#5B75D9' },
]

const particles = [
  { id: 1, path: 'flow-top', r: 3.5, color: '#E05265', opacity: 0.8, dur: '4s', begin: '0s' },
  { id: 2, path: 'flow-mid', r: 3, color: '#F0963A', opacity: 0.7, dur: '3.5s', begin: '0.8s' },
  { id: 3, path: 'flow-bot', r: 3.5, color: '#F5C518', opacity: 0.8, dur: '4.5s', begin: '1.5s' },
  { id: 4, path: 'flow-top', r: 2.5, color: '#5B75D9', opacity: 0.6, dur: '5s', begin: '2s' },
  { id: 5, path: 'flow-mid', r: 3, color: '#E05265', opacity: 0.7, dur: '3.8s', begin: '2.5s' },
  { id: 6, path: 'flow-bot', r: 2.5, color: '#F0963A', opacity: 0.6, dur: '4.2s', begin: '3s' },
]
</script>

<style scoped>
.bottleneck-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.bottleneck-svg {
  width: 100%;
  max-width: 820px;
}
.arrows-pulse {
  animation: pulse-soft 2s ease-in-out infinite;
}
@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>
