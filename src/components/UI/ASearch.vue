<script setup lang="ts">
import AButton from '@/components/UI/AButton.vue'
import ACategoryDropdown from '@/components/UI/ACategoryDropdown.vue'
import { useRouter } from 'vue-router'
import { getCities, getCategories } from '@/composables/api/dictionary'
import { ref, useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

const router = useRouter()
const target = useTemplateRef<HTMLElement>('target')
const citiesList = ref([])
const categoriesList = ref([])
const isCategoryOpen = ref(false)

interface Props {
  isArrowBack?: boolean
}

defineProps<Props>()

const goBack = () => {
  router.go(-1)
}

onClickOutside(target, () => {
  isCategoryOpen.value = false
})

const fetchCities = async () => {
  citiesList.value = await getCities()
}

const fetchCategories = async () => {
  categoriesList.value = await getCategories()
}

fetchCities()
fetchCategories()
</script>

<template>
  <div class="a-search">
    <img
      v-if="isArrowBack"
      @click="goBack"
      src="/icons/arrow-27.svg"
      class="black-fill rotate-180 a-search__arrow"
      alt="arrow"
    />
    <div class="a-search__catalog-wrapper" ref="target">
      <AButton
        title="Категории"
        pre-icon="category"
        class="a-search__catalog"
        @click="isCategoryOpen = !isCategoryOpen"
      />
      <ACategoryDropdown
        v-if="isCategoryOpen"
        :categories="categoriesList"
      />
    </div>

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
  &__arrow {
    display: none;
    margin-right: 8px;
  }
  &__catalog-wrapper {
    position: relative;
    display: inline-block;
  }
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
      line-height: normal;
    }
    &--city {
      color: #3c9462;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}
@media (max-width: 880px) {
  .a-search {
    margin-top: 16px;
    margin-bottom: 8px;
    &__arrow {
      display: block;
    }
    &__input {
      border: 1px solid #f8fafc;
      background: #f8fafc;
    }
    &__catalog,
    &__city {
      display: none;
    }
  }
}
</style>
