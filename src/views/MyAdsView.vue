<script setup lang="ts">
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'
import AdsTab from '@/components/MyAds/AdsTab.vue'

window.scrollTo(0, 0)

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Профиль', url: '/profile' },
  { title: 'Мои объявления', url: '/my-ads' }
]
</script>

<template>
  <div class="my-ads-view container">
    <ASearch />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="my-ads-view__breadcrumbs" />
    <AdsTab />
  </div>
</template>

<style scoped lang="scss">
.my-ads-view {
  display: flex;
  flex-direction: column;
  &__breadcrumbs {
    margin-top: 8px;
  }
}
</style>
