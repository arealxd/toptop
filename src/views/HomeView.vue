<script setup lang="ts">
import ASearch from '@/components/UI/ASearch.vue'
</script>

<template>
  <div class="home container">
    <ASearch />
    <img src="/images/banner.png" alt="banner" class="home__banner" />
  </div>
</template>

<style scoped lang="scss">
.home {
  &__banner {
    width: 100%;
  }
}
</style>
