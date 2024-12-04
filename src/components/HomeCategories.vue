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
}
</style>
