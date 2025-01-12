<script setup lang="ts">
import { useHomeStore } from '@/stores/home'
import ASearch from '@/components/UI/ASearch.vue'
import HomeCategories from '@/components/HomeCategories.vue'
import ARecommended from '@/components/ARecommended.vue'
import ATop from '@/components/ATop.vue'
import ViewTypes from '@/components/ViewTypes.vue'
import PageHeader from '@/components/Mobile/PageHeader.vue'

window.scrollTo(0, 0)

const homeStore = useHomeStore()

const setAdType = (type: 'sale' | 'rent') => {
  homeStore.adType = type
}

const setViewType = (view: 'tiles' | 'list') => {
  homeStore.viewType = view
}
</script>

<template>
  <PageHeader />
  <div class="home container">
    <ASearch />
    <img src="/images/banner.png" alt="banner" class="home__banner" />
    <img src="/images/banner-mobile.svg" alt="banner" class="home__banner-mobile" />
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
  &__banner-mobile {
    display: none;
  }
}
@media (max-width: 880px) {
  .home {
    &__banner {
      display: none;
    }
    &__banner-mobile {
      display: flex;
      width: 100%;
    }
  }
}
</style>
