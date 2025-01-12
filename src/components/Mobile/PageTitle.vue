<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface Props {
  title?: string
}

defineProps<Props>()

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="page-title">
    <img
      @click="goBack"
      src="/icons/arrow-27.svg"
      alt="arrow"
      class="black-fill page-title__arrow"
    />
    <p v-if="title" class="page-title__title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.page-title {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 63px;
  background-color: #fff;
  &__arrow {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%) rotate(180deg);
  }
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
