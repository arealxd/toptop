<script setup lang="ts">
interface Props {
  title: string
  image: string
  path: string
}

defineProps<Props>()
</script>

<template>
  <router-link :to="path" class="a-category" :style="{ backgroundImage: `url(${image})` }">
    <p class="a-category__title">{{ title }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.a-category {
  padding: 16px;
  border-radius: 8px;
  min-height: 110px;
  background-size: cover;
  background: #f5f5f5 no-repeat right bottom;
  &__title {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media (max-width: 880px) {
    background: #fff no-repeat right bottom;
    padding: 8px;
    background-size: 90px;
    &__title {
      color: #5b5b5b;
      font-size: 14px;
    }
  }
}
</style>
