<template>
  <div class="cover-layout">
    <div class="top-accent" />
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
  overflow: hidden;
}
.top-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #003399 0%, #F5C518 50%, #003399 100%);
  z-index: 10;
}
.cover-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  padding: 2em;
}
</style>
