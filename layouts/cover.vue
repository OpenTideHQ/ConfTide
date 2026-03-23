<template>
  <div class="cover-layout">
    <div class="wave-bg">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d="M0,100 C180,40 360,160 540,100 C720,40 900,160 1080,100 C1260,40 1440,160 1440,100 L1440,200 L0,200 Z" fill="rgba(245,197,24,0.5)"/>
        <path d="M0,130 C200,70 400,190 600,130 C800,70 1000,190 1200,130 C1400,70 1440,130 1440,130 L1440,200 L0,200 Z" fill="rgba(91,117,217,0.35)"/>
      </svg>
    </div>
    <div class="cover-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cover-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(ellipse at 30% 60%, rgba(30,58,138,0.55) 0%, #080E2A 72%);
  overflow: hidden;
}
.wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.06;
}
.wave-bg svg {
  position: absolute;
  bottom: -20px;
  width: 200%;
  height: 200px;
  animation: wave-drift 25s linear infinite;
}
@keyframes wave-drift {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.cover-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2em;
}
</style>
