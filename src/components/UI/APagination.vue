<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', id: number): void
}>()

const visiblePages = computed(() => {
  const pages: number[] = []
  if (props.totalPages <= 9) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (props.currentPage <= 5) {
      for (let i = 1; i <= 8; i++) {
        pages.push(i)
      }
      pages.push(-1)
      pages.push(props.totalPages)
    } else if (props.currentPage > props.totalPages - 5) {
      pages.push(1)
      pages.push(-1)
      for (let i = props.totalPages - 7; i <= props.totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push(-1)
      for (let i = props.currentPage - 2; i <= props.currentPage + 3; i++) {
        pages.push(i)
      }
      pages.push(-1)
      pages.push(props.totalPages)
    }
  }
  return pages
})
</script>

<template>
  <div class="a-pagination">
    <img
      @click="emit('change', currentPage === 1 ? -1 : 1)"
      class="a-pagination__arrow"
      src="/icons/pagination-double-arrow.svg"
      alt="pagination-arrow"
    />
    <img
      @click="emit('change', currentPage - 1)"
      class="a-pagination__arrow"
      src="/icons/pagination-arrow.svg"
      alt="pagination-arrow"
    />
    <div class="a-pagination__pages">
      <p
        v-for="page in visiblePages"
        :key="page"
        @click="page !== -1 && emit('change', page)"
        class="a-pagination__number"
        :class="{ 'active-page': page === currentPage, 'a-pagination__dots': page === -1 }"
      >
        {{ page === -1 ? '...' : page }}
      </p>
    </div>
    <img
      @click="emit('change', currentPage + 1)"
      class="a-pagination__arrow-reverse"
      src="/icons/pagination-arrow.svg"
      alt="pagination-arrow"
    />
    <img
      @click="emit('change', currentPage === totalPages ? -1 : totalPages)"
      class="a-pagination__arrow-reverse"
      src="/icons/pagination-double-arrow.svg"
      alt="pagination-arrow"
    />
  </div>
</template>

<style scoped lang="scss">
.a-pagination {
  display: flex;
  align-items: center;
  gap: 16px;
  &__arrow,
  &__arrow-reverse {
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
  &__arrow-reverse {
    transform: rotate(180deg);
  }
  &__pages {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  &__number {
    color: #3c9462;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 3px 9px;
    border-radius: 2px;
    height: 24px;
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
    }
  }
  .active-page {
    color: white;
    background: #3c9462;
  }
  &__dots {
    cursor: default;
    &:hover {
      background: transparent;
    }
  }
}
</style>
