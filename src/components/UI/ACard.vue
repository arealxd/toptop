<script setup lang="ts">
import { formatDate } from '@/composables/useFormatDate'

interface Props {
  id: number
  isFavorite: boolean
  slug: string
  title: string
  price: number
  type: 'new' | 'used'
  city: string
  date: string | Date
  views: number
  image: string
  whiteNew?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="a-card">
    <div class="a-card__image-wrapper">
      <router-link :to="`/product/${slug}`">
        <img class="a-card__image" :src="image" :alt="title" />
      </router-link>
      <img
        class="a-card__favorite"
        :src="`/icons/favorite-${isFavorite ? 'active' : 'disabled'}-wrapped.svg`"
        alt="favorite"
      />
    </div>
    <router-link :to="`/product/${slug}`" class="a-card__title">
      {{ title }}
    </router-link>
    <div class="a-card__indicators">
      <p class="type" :class="{ new: type === 'new', 'white-new': whiteNew && type === 'new' }">
        {{ type === 'new' ? 'новый' : 'Б/у' }}
      </p>
      <p class="sale">продажа</p>
    </div>
    <p class="a-card__price">{{ price?.toLocaleString('ru-RU') }} тг</p>
    <div class="a-card__info">
      <p>{{ city }}</p>
      <p>{{ formatDate(date) }}</p>
      <div class="views">
        <img src="/icons/views.svg" alt="views" />
        <p>{{ views?.toLocaleString('ru-RU') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 140px;
  }
  &__image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  &__favorite {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  &__title {
    color: #303030;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 8px;
    margin-bottom: 16px;
    &:hover {
      color: #3c9462;
    }
  }
  &__indicators {
    display: flex;
    align-items: center;
    gap: 8px;
    .type,
    .sale {
      width: fit-content;
      padding: 4px 8px;
      border-radius: 8px;
      text-align: center;
      color: #6e6e6e;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: #ededed;
    }
    .new {
      color: #ff5100;
      background: #fce8cb;
    }
    .white-new {
      background: #fff;
    }
  }
  &__price {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 16px;
    margin-bottom: 22px;
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      color: #898989;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .views {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
