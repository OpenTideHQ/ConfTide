<template>
  <div class="brand-footer">
    <span class="brand-left">
      <img src="/opentide-logo.png" alt="OpenTide" class="brand-logo-img" />
      <span class="sep">·</span>
      <span class="talk-name">{{ $slidev?.configs?.title || 'ConfTide' }}</span>
    </span>
    <span class="brand-right">Amine Besson &amp; Rémi Séguy — European Commission CSOC</span>
  </div>
</template>

<style scoped>
.brand-footer {
  position: fixed;
  bottom: 0.8em;
  left: 2em;
  right: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65em;
  color: var(--ot-gray-600, #4A5274);
  pointer-events: none;
  z-index: 100;
  font-family: 'Inter', sans-serif;
}
.brand-left {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: 600;
}
.brand-logo-img {
  height: 18px;
  width: auto;
  opacity: 0.7;
}
.sep { opacity: 0.4; }
.talk-name { opacity: 0.6; font-weight: 400; }
.brand-right { opacity: 0.5; }
</style>
