<script setup lang="ts">

import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Профиль', url: '/profile' }
]
</script>

<template>
  <div class="profile-view container">
    <ASearch />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="profile-view__breadcrumbs" />
  </div>
</template>

<style scoped lang="scss">
.profile-view {
  display: flex;
  flex-direction: column;
  &__breadcrumbs {
    margin-top: 8px;
  }
}
</style>