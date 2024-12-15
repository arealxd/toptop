<script setup lang="ts">
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'
import ACard from '@/components/UI/ACard.vue'

window.scrollTo(0, 0)

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Избранные', url: '/favorites' }
]
</script>

<template>
  <div class="favorite-view container">
    <ASearch />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="profile-view__breadcrumbs" />
    <div class="favorite-view__list">
      <ACard
        v-for="i in 7"
        :key="i"
        :id="1"
        is-favorite
        title="Универсальная коляска Carello Epica"
        slug="universalnaya-kolyaska-carello-epica"
        :price="69990"
        type="new"
        city="Алматы"
        date="2024-12-03T12:34:56.000000Z"
        :views="112"
        image="/images/no-image.jpg"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.favorite-view {
  display: flex;
  flex-direction: column;
  &__breadcrumbs {
    margin-top: 8px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    gap: 24px;
    margin-bottom: 40vh;
    margin-top: 40px;
  }
}
</style>
