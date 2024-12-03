<script setup lang="ts">
import { formatDate } from '@/composables/useFormatDate'

interface Props {
  id: number
  slug: string
  title: string
  description: string
  price: number
  type: 'new' | 'used'
  top: boolean
  newest: boolean
  city: string
  date: string | Date
  views: number
  image: string
}

defineProps<Props>()
</script>

<template>
  <div class="long-card">
    <router-link :to="`/product/${slug}`" class="long-card__image-wrapper">
      <img class="long-card__image" :src="image" :alt="title" />
    </router-link>
    <div class="long-card__content">
      <router-link :to="`/product/${slug}`" class="long-card__content--title">
        {{ title }}
      </router-link>
      <p class="long-card__content--description">{{ description }}</p>
      <div class="long-card__content--indicators">
        <p class="indicator" :class="{ new: type === 'new' }">
          {{ type === 'new' ? 'новый' : 'Б/у' }}
        </p>
        <p class="indicator">продажа</p>
      </div>
      <div class="long-card__content--details">
        <p>{{ city }}</p>
        <p>{{ formatDate(date) }}</p>
        <div class="views">
          <img src="/icons/views.svg" alt="views" />
          <p>{{ views?.toLocaleString('ru-RU') }} просмотров</p>
        </div>
      </div>
    </div>
    <div class="long-card__actions">
      <div class="info">
        <p class="price">{{ price?.toLocaleString('ru-RU') }} тг</p>
        <p v-if="newest" class="newest">новое</p>
        <p v-if="top" class="newest top">ТОП</p>
      </div>
      <img class="favorite" src="/icons/favorite-disabled.svg" alt="favorite-disabled" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.long-card {
  width: 100%;
  display: flex;
  padding: 0 8px 0 8px;
  border-radius: 8px;
  background: #fff;
  gap: 21px;
  &__image-wrapper {
    max-width: 172px;
    min-width: 172px;
    height: 140px;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    &--title {
      width: fit-content;
      color: #3347f6;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
      &:hover {
        color: #0012b9;
      }
    }
    &--description {
      color: #333340;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-top: 16px;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &--indicators {
      display: flex;
      gap: 16px;
      .indicator {
        width: fit-content;
        border-radius: 8px;
        background: #ededed;
        color: #6e6e6e;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        text-align: center;
        padding: 4px 8px;
      }
      .new {
        color: #ff5100;
        background: #fce8cb;
      }
    }
    &--details {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: auto;
      p {
        color: #898989;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
      }
      .views {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      .price {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
      }
      .newest {
        width: fit-content;
        padding: 4px 8px;
        border-radius: 8px;
        background: #ededed;
        color: #3347f6;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }
      .top {
        color: #ff5100;
        background: #fce8cb;
        text-transform: uppercase;
      }
    }
    .favorite {
      width: fit-content;
      margin-left: auto;
      cursor: pointer;
    }
  }
}
</style>
