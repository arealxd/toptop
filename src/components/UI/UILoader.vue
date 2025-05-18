<script lang="ts" setup>
interface Props {
  size?: number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#fff'
})
</script>

<template>
  <div
    class="loader"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderTopColor: color
    }"
  />
</template>

<style scoped lang="scss">
.loader {
  border: 4px solid #b9b9b9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  box-sizing: border-box;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
