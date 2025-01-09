<script setup lang="ts">
import ACard from '@/components/UI/ACard.vue'
import LongCard from '@/components/UI/LongCard.vue'

interface Props {
  adType: 'sale' | 'rent'
  viewType: 'tiles' | 'list'
}

defineProps<Props>()
</script>

<template>
  <div class="a-top">
    <p class="a-top__title">Топ</p>
    <div v-if="viewType === 'tiles'" class="a-top__tiles">
      <ACard
        v-for="i in 5"
        :key="i"
        :id="1"
        is-favorite
        title="Универсальная коляска Carello Epica"
        slug="universalnaya-kolyaska-carello-epica"
        :price="25000"
        white-new
        type="new"
        city="Алматы"
        date="2024-12-03T12:34:56.000000Z"
        :views="112"
        image="/images/no-image.jpg"
      />
    </div>
    <div v-else class="a-top__list">
      <LongCard
        v-for="i in 5"
        :key="i"
        :id="1"
        is-favorite
        title="Универсальная коляска Carello Epica"
        slug="universalnaya-kolyaska-carello-epica"
        description="Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт..."
        :price="25000"
        type="new"
        white-new
        top
        newest
        city="Алматы"
        date="2024-12-03T12:34:56.000000Z"
        :views="112"
        image="/images/no-image.jpg"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  &__title {
    color: #3c9462;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  &__tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    gap: 24px;
    padding: 24px 24px 42px 24px;
    border-radius: 8px;
    background: #fce8cb;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    border-radius: 8px;
    background: #fce8cb;
  }
}
</style>
