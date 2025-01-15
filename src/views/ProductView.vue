<script setup lang="ts">
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ADetail from '@/components/Product/ADetail.vue'
import { useRoute } from 'vue-router'
import ASearch from '@/components/UI/ASearch.vue'
import PageHeader from '@/components/Mobile/PageHeader.vue'

window.scrollTo(0, 0)

const route = useRoute()

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Коляски', url: `/product/${route.params.slug}` }
]
</script>

<template>
  <PageHeader />
  <div class="product-view container">
    <ASearch is-arrow-back />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="product-view__breadcrumbs" />
    <ADetail />
  </div>
</template>

<style scoped lang="scss">
.product-view {
  display: flex;
  flex-direction: column;
  &__breadcrumbs {
    margin-top: 8px;
  }
}
</style>
