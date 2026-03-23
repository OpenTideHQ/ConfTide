<template>
  <div class="logo-container" :class="{ animate: animated }">
    <img src="/opentide-banner.png" alt="OpenTide" class="logo-img" />
  </div>
</template>

<script setup>
defineProps({
  animated: { type: Boolean, default: true },
})
</script>

<style scoped>
.logo-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.logo-img {
  max-height: 120px;
  width: auto;
  filter: drop-shadow(0 4px 24px rgba(245,197,24,0.15));
}
.logo-container.animate .logo-img {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>
