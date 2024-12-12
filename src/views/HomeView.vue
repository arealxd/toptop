<script setup lang="ts">
import { useHomeStore } from '@/stores/home'
import ASearch from '@/components/UI/ASearch.vue'
import HomeCategories from '@/components/HomeCategories.vue'
import ARecommended from '@/components/ARecommended.vue'
import ATop from '@/components/ATop.vue'
import ViewTypes from '@/components/ViewTypes.vue'

window.scrollTo(0, 0);

const homeStore = useHomeStore()

const setAdType = (type: 'sale' | 'rent') => {
  homeStore.adType = type
}

const setViewType = (view: 'tiles' | 'list') => {
  homeStore.viewType = view
}
</script>

<template>
  <div class="home container">
    <ASearch />
    <img src="/images/banner.png" alt="banner" class="home__banner" />
    <HomeCategories />
    <ViewTypes
      :ad-type="homeStore.adType"
      :view-type="homeStore.viewType"
      @change-ad-type="setAdType"
      @change-view-type="setViewType"
    />
    <ATop :ad-type="homeStore.adType" :view-type="homeStore.viewType" />
    <ARecommended :ad-type="homeStore.adType" :view-type="homeStore.viewType" />
  </div>
</template>

<style scoped lang="scss">
.home {
  &__banner {
    width: 100%;
  }
}
</style>
