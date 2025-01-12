<script setup lang="ts">
import ACategory from '@/components/UI/ACategory.vue'
</script>

<template>
  <div class="home-categories">
    <ACategory title="Коляски" image="/images/kolyaski.png" path="/" />
    <ACategory title="Столики" image="/images/stoliki.png" path="/" />
    <ACategory title="Автокресла" image="/images/avtokresla.png" path="/" />
    <ACategory
      title="Все объявления"
      image="/images/all_publications.png"
      path="/"
      class="home-categories__all"
    />
  </div>
</template>

<style scoped lang="scss">
.home-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  &__all {
    border: 1px solid #ff2c20;
    :deep(p) {
      color: #ff2c20;
    }
  }
  @media (max-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    column-gap: 16px;
    row-gap: 8px;
    margin-top: 16px;
    margin-bottom: -30px;
    &__all {
      display: flex;
      align-items: center;
      max-height: 56px;
      min-height: 56px;
      grid-column: 1 / 4;
      grid-row: 2 / 3;
      border: none;
      background-color: #3c9462;
      padding: 0 24px;
      :deep(p) {
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
