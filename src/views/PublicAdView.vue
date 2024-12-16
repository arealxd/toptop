<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'
import PublicAdForm from '@/components/PublicAd/PublicAdForm.vue'

window.scrollTo(0, 0)

const route = useRoute()
const breadcrumbs = ref()

if (route.query.type) {
  if (route.query.type === 'edit') {
    breadcrumbs.value = [
      { title: 'Главная', url: '/' },
      { title: 'Профиль', url: '/profile' },
      { title: 'Мои объявления', url: '/my-ads' },
      { title: 'Редактировать', url: `/public-ad/${route.params.slug}?type=edit` }
    ]
  } else {
    breadcrumbs.value = [
      { title: 'Главная', url: '/' },
      { title: 'Создать', url: `/public-ad/${route.params.slug}` }
    ]
  }
}
</script>

<template>
  <div class="public-ad-view container">
    <ASearch />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="public-ad-view__breadcrumbs" />
    <PublicAdForm />
  </div>
</template>

<style scoped lang="scss">
.public-ad-view {
  display: flex;
  flex-direction: column;
  &__breadcrumbs {
    margin-top: 8px;
  }
}
</style>
