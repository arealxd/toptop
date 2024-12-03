<script setup lang="ts">
import ASearch from '@/components/UI/ASearch.vue'
import HomeCategories from '@/components/HomeCategories.vue'
import ARecommended from '@/components/ARecommended.vue'
</script>

<template>
  <div class="home container">
    <ASearch />
    <img src="/images/banner.png" alt="banner" class="home__banner" />
    <HomeCategories />
    <ARecommended />
  </div>
</template>

<style scoped lang="scss">
.home {
  &__banner {
    width: 100%;
  }
}
</style>
