<script setup lang="ts">
import ABreadcrumbs from '@/components/UI/ABreadcrumbs.vue'
import ASearch from '@/components/UI/ASearch.vue'
import ACard from '@/components/UI/ACard.vue'
import PageHeader from '@/components/Mobile/PageHeader.vue'

window.scrollTo(0, 0)

const breadcrumbs = [
  { title: 'Главная', url: '/' },
  { title: 'Избранные', url: '/favorites' }
]
</script>

<template>
  <PageHeader />
  <div class="favorite-view container">
    <ASearch is-arrow-back />
    <ABreadcrumbs :breadcrumbs="breadcrumbs" class="profile-view__breadcrumbs" />
    <h1 class="favorite-view__title">Избранные</h1>
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
  &__title {
    display: none;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    gap: 24px;
    margin-bottom: 40vh;
    margin-top: 40px;
  }
  @media (max-width: 880px) {
    &__title {
      display: block;
    }
    &__list {
      margin-bottom: 50px;
      margin-top: 0;
    }
  }
}
</style>
