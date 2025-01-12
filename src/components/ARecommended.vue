<script setup lang="ts">
import { ref } from 'vue'
import LongCard from '@/components/UI/LongCard.vue'
import AButton from '@/components/UI/AButton.vue'
import APagination from '@/components/UI/APagination.vue'
import ACard from '@/components/UI/ACard.vue'

interface Props {
  adType: 'sale' | 'rent'
  viewType: 'tiles' | 'list'
}

defineProps<Props>()

const currentPage = ref(1)
const totalPages = ref(14)

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
</script>

<template>
  <div class="a-recommended">
    <p class="a-recommended__title">Рекомендованные объявления</p>
    <div v-if="viewType === 'list'" class="a-recommended__list">
      <LongCard
        v-for="i in 3"
        :key="i"
        :id="1"
        is-favorite
        title="Универсальная коляска Carello Epica"
        slug="universalnaya-kolyaska-carello-epica"
        description="Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт..."
        :price="69990"
        type="new"
        top
        newest
        city="Алматы"
        date="2024-12-03T12:34:56.000000Z"
        :views="112"
        image="/images/no-image.jpg"
      />
    </div>
    <div v-else class="a-recommended__tiles">
      <ACard
        v-for="i in 5"
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
    <AButton class="a-recommended__more" title="Загрузить еще" type="outlined" />
    <span class="a-recommended__line"></span>
    <APagination :current-page="currentPage" :total-pages="totalPages" @change="changePage" />
  </div>
</template>

<style scoped lang="scss">
.a-recommended {
  display: flex;
  flex-direction: column;
  margin-bottom: 78px;
  &__title {
    color: #4a4a4a;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
  &__tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }
  &__more {
    max-width: 343px;
    margin: 0 auto;
  }
  &__line {
    width: 100%;
    height: 1px;
    background: #d9d9d9;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 880px) {
    margin-bottom: 30px;
    &__more,
    &__line,
    .a-pagination {
      display: none;
    }
    &__list,
    &__tiles {
      margin-bottom: 0;
      background-color: #fff;
      padding: 16px;
      border-radius: 8px;
    }
  }
}
</style>
