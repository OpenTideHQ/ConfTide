<template>
  <div class="trust-container">
    <svg viewBox="0 0 360 280" class="trust-svg">
      <defs>
        <linearGradient id="tt-edge-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(155,109,255,0.5)" />
          <stop offset="100%" stop-color="rgba(245,197,24,0.5)" />
        </linearGradient>
        <linearGradient id="tt-edge-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(245,197,24,0.5)" />
          <stop offset="100%" stop-color="rgba(56,201,122,0.5)" />
        </linearGradient>
        <linearGradient id="tt-edge-3" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="rgba(56,201,122,0.5)" />
          <stop offset="100%" stop-color="rgba(155,109,255,0.5)" />
        </linearGradient>
        <filter id="tt-glow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- Triangle fill -->
      <polygon
        points="180,35 55,220 305,220"
        fill="rgba(155,109,255,0.03)"
        :opacity="visible ? 1 : 0"
        :style="tIn(0.3)"
      />

      <!-- Animated edges -->
      <line x1="180" y1="35" x2="55" y2="220" stroke="url(#tt-edge-1)" stroke-width="2"
            :stroke-dasharray="edgeLen" :stroke-dashoffset="visible ? 0 : edgeLen"
            :style="{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.23,1,0.32,1) 0.3s` }" />
      <line x1="55" y1="220" x2="305" y2="220" stroke="url(#tt-edge-2)" stroke-width="2"
            :stroke-dasharray="edgeLen" :stroke-dashoffset="visible ? 0 : edgeLen"
            :style="{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.23,1,0.32,1) 0.5s` }" />
      <line x1="305" y1="220" x2="180" y2="35" stroke="url(#tt-edge-3)" stroke-width="2"
            :stroke-dasharray="edgeLen" :stroke-dashoffset="visible ? 0 : edgeLen"
            :style="{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.23,1,0.32,1) 0.7s` }" />

      <!-- Center label -->
      <text x="180" y="155" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-weight="800" font-size="16" font-family="'Inter',sans-serif"
            :opacity="visible ? 1 : 0" :style="tIn(1)">TRUST</text>

      <!-- Top node: AI Agent -->
      <g filter="url(#tt-glow)" :opacity="visible ? 1 : 0" :style="tIn(0.4)">
        <circle cx="180" cy="35" r="32" fill="rgba(155,109,255,0.10)" stroke="rgba(155,109,255,0.50)" stroke-width="1.8" class="node-pulse-purple" />
        <text x="180" y="28" text-anchor="middle" fill="#9B6DFF" font-weight="700" font-size="8" font-family="'Inter',sans-serif">CONSTRAINED</text>
        <text x="180" y="40" text-anchor="middle" fill="#9B6DFF" font-weight="700" font-size="8" font-family="'Inter',sans-serif">AI AGENT</text>
      </g>

      <!-- Bottom-left: Schema -->
      <g filter="url(#tt-glow)" :opacity="visible ? 1 : 0" :style="tIn(0.6)">
        <circle cx="55" cy="220" r="32" fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.45)" stroke-width="1.8" class="node-pulse-gold" />
        <text x="55" y="216" text-anchor="middle" fill="#F5C518" font-weight="700" font-size="8" font-family="'Inter',sans-serif">SCHEMA</text>
        <text x="55" y="228" text-anchor="middle" fill="#F5C518" font-weight="700" font-size="8" font-family="'Inter',sans-serif">VALIDATION</text>
      </g>

      <!-- Bottom-right: Human -->
      <g filter="url(#tt-glow)" :opacity="visible ? 1 : 0" :style="tIn(0.8)">
        <circle cx="305" cy="220" r="32" fill="rgba(56,201,122,0.06)" stroke="rgba(56,201,122,0.45)" stroke-width="1.8" class="node-pulse-green" />
        <text x="305" y="216" text-anchor="middle" fill="#38C97A" font-weight="700" font-size="8" font-family="'Inter',sans-serif">HUMAN</text>
        <text x="305" y="228" text-anchor="middle" fill="#38C97A" font-weight="700" font-size="8" font-family="'Inter',sans-serif">REVIEW</text>
      </g>

      <!-- Edge labels -->
      <text x="100" y="120" text-anchor="middle" fill="#7E8BB0" font-size="8" font-family="'Inter',sans-serif" transform="rotate(-52, 100, 120)"
            :opacity="visible ? 0.7 : 0" :style="tIn(1.2)">Guardrails</text>
      <text x="180" y="242" text-anchor="middle" fill="#7E8BB0" font-size="8" font-family="'Inter',sans-serif"
            :opacity="visible ? 0.7 : 0" :style="tIn(1.3)">CI/CD Validation</text>
      <text x="260" y="120" text-anchor="middle" fill="#7E8BB0" font-size="8" font-family="'Inter',sans-serif" transform="rotate(52, 260, 120)"
            :opacity="visible ? 0.7 : 0" :style="tIn(1.4)">PR Review</text>
    </svg>
    <p class="trust-caption">
      AI speed + Schema rigour + Human judgement = <strong>Production-grade output</strong>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => { visible.value = true }, 100) })

const edgeLen = 300

const tIn = (delay) => ({
  transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
})
</script>

<style scoped>
.trust-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.trust-svg {
  width: 100%;
  max-width: 360px;
}
.trust-caption {
  font-size: 0.8em;
  color: var(--ot-gray-200, #C8CEE0);
  text-align: center;
  margin-top: 0.5em;
}
.trust-caption strong {
  color: var(--ot-gold, #F5C518);
}
.node-pulse-purple {
  animation: pulse-p 3s ease-in-out infinite;
}
.node-pulse-gold {
  animation: pulse-g 3s ease-in-out infinite 0.5s;
}
.node-pulse-green {
  animation: pulse-gr 3s ease-in-out infinite 1s;
}
@keyframes pulse-p {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(155,109,255,0.2)); }
  50% { filter: drop-shadow(0 0 16px rgba(155,109,255,0.5)); }
}
@keyframes pulse-g {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(245,197,24,0.2)); }
  50% { filter: drop-shadow(0 0 16px rgba(245,197,24,0.5)); }
}
@keyframes pulse-gr {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(56,201,122,0.2)); }
  50% { filter: drop-shadow(0 0 16px rgba(56,201,122,0.5)); }
}
</style>
