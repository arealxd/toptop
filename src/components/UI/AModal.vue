<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="a-modal">
    <div class="a-modal__overlay" @click="emit('close')"></div>
    <div class="a-modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 1;
    cursor: pointer;
  }
  &__content {
    position: relative;
    z-index: 2;
    background: #fff;
    border-radius: 8px;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
  }
}
</style>
