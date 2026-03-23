<template>
  <div class="section-layout">
    <div class="section-number">{{ $attrs['section-number'] || '' }}</div>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--ot-navy-darker);
}
.section-number {
  font-size: 12em;
  font-weight: 900;
  color: rgba(245,197,24,0.05);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  line-height: 1;
  pointer-events: none;
}
.section-content {
  position: relative;
  z-index: 1;
}
</style>
