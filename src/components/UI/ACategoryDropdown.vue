<script setup lang="ts">
interface Category {
  id: number
  name: string
  code: string | null
}

interface Props {
  categories: Category[]
}

defineProps<Props>()
</script>

<template>
  <div class="category-dropdown">
    <ul class="category-dropdown__list">
      <li
        class="category-dropdown__item"
        v-for="category in categories"
        :key="category.id"
      >
        <router-link
          class="category-dropdown__link"
          :to="`/category/${encodeURIComponent(category.name.toLowerCase())}`"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.category-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  z-index: 10;
  width: 100%;
  min-width: 280px;
  max-width: 100%;
  max-height: 320px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  box-sizing: border-box;
}

.category-dropdown__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.category-dropdown__item {
  padding: 0;
}

.category-dropdown__link {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  &:hover {
    background-color: #f1f5f9;
  }
}
</style>
