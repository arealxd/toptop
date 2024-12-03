<script setup lang="ts">
import AButton from '@/components/UI/AButton.vue'
</script>

<template>
  <div class="a-search">
    <AButton title="Категории" pre-icon="category" class="a-search__catalog" />
    <div class="a-search__search">
      <img src="/icons/search.svg" alt="search" class="search-icon" />
      <input type="text" placeholder="Поиск" class="a-search__input" />
      <img src="/icons/filter.svg" alt="filter" class="filter-icon" />
    </div>
    <div class="a-search__city">
      <p class="a-search__city--title">Мой город:</p>
      <select name="city" id="city" class="a-search__city--city">
        <option value="1">Алматы</option>
        <option value="2">Астана</option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-search {
  display: flex;
  align-items: center;
  margin: 24px 0;
  gap: 8px;
  &__catalog {
    max-width: 196px;
  }
  &__search {
    position: relative;
    width: 100%;
    .search-icon {
      position: absolute;
      left: 16px;
      top: 12px;
    }
    .filter-icon {
      position: absolute;
      right: 16px;
      top: 12px;
      cursor: pointer;
    }
  }
  &__input {
    width: 100%;
    padding: 11px 16px 11px 48px;
    border: 1px solid #f4f4f4;
    background: #f4f4f4;
    border-radius: 8px;
    color: #151515;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    &::placeholder {
      color: #64748b;
    }
  }
  &__city {
    min-width: fit-content;
    display: flex;
    align-items: center;
    gap: 11px;
    margin-left: 30px;
    &--title {
      color: #151515;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    &--city {
      color: #3347f6;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
