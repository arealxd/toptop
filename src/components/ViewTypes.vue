<script setup lang="ts">
import AButton from '@/components/UI/AButton.vue'

interface Props {
  adType: 'sale' | 'rent'
  viewType: 'tiles' | 'list'
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'changeAdType', ad: 'sale' | 'rent'): void
  (e: 'changeViewType', view: 'tiles' | 'list'): void
}>()
</script>

<template>
  <div class="view-types">
    <div class="view-types__ad-type">
      <p class="view-types__ad-type--title">Тип объявления:</p>
      <AButton
        class="view-types__ad-type--button"
        @click="emit('changeAdType', 'sale')"
        title="Продажа"
        :type="adType === 'sale' ? 'colored' : 'outlined'"
      />
      <AButton
        class="view-types__ad-type--button"
        @click="emit('changeAdType', 'rent')"
        title="Аренда"
        :type="adType === 'rent' ? 'colored' : 'outlined'"
      />
    </div>
    <div class="view-types__shown">
      <p class="view-types__ad-type--title">Вид:</p>
      <AButton
        class="view-types__shown--button"
        :class="{ active: viewType === 'tiles' }"
        @click="emit('changeViewType', 'tiles')"
        title="Плитки"
        :type="viewType === 'tiles' ? 'colored' : 'outlined'"
        gap="8px"
        pre-icon="view-tiles"
      />
      <AButton
        class="view-types__shown--button"
        :class="{ active: viewType === 'list' }"
        @click="emit('changeViewType', 'list')"
        title="Списком"
        :type="viewType === 'list' ? 'colored' : 'outlined'"
        gap="8px"
        pre-icon="view-list"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-types {
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  border-radius: 8px;
  background: #f5f5f5;
  margin-bottom: 24px;
  &__ad-type {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
    &--title {
      color: #151515;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &--button {
      max-width: 205px;
      max-height: 40px;
    }
  }
  &__shown {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 24px;
    &--button {
      min-width: 120px;
      max-height: 40px;
    }
    :deep(.a-button) {
      span {
        font-size: 16px;
      }
      &.outlined {
        &:hover {
          .a-button__preicon {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
              hue-rotate(73deg) brightness(104%) contrast(101%);
          }
        }
      }
    }
    .active {
      :deep(.a-button__preicon) {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(73deg)
          brightness(104%) contrast(101%);
      }
    }
  }
}
</style>
