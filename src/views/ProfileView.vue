<script setup lang="ts">
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'
import ProfileCards from '@/components/Profile/ProfileCards.vue'
import ProfileTabs from '@/components/Profile/ProfileTabs.vue'
import ProfileFooter from '@/components/Profile/ProfileFooter.vue'

window.scrollTo(0, 0)

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Профиль', url: '/profile' }
]
</script>

<template>
  <div class="profile-view container">
    <ASearch />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="profile-view__breadcrumbs" />
    <ProfileCards />
    <ProfileTabs />
    <ProfileFooter />
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
