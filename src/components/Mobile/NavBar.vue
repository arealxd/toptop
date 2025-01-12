<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const activeRoute = computed(() => {
  const routeName = route.name
  if (routeName === 'home') return 1
  if (routeName === 'favorites') return 2
  if (routeName === 'public-ad') return 3
  if (routeName === 'chat') return 4
  if (routeName === 'profile') return 5
  return 0
})

const navList = [
  {
    id: 1,
    icon: '/icons/home.svg',
    title: 'Главная',
    link: '/'
  },
  {
    id: 2,
    icon: '/icons/favorites.svg',
    title: 'Избранное',
    link: '/favorites'
  },
  {
    id: 3,
    icon: '/icons/plus_circle.svg',
    title: 'Подать',
    link: '/public-ad/new'
  },
  {
    id: 4,
    icon: '/icons/message.svg',
    title: 'Чат',
    link: '/chat'
  },
  {
    id: 5,
    icon: '/icons/profile.svg',
    title: 'Профиль',
    link: '/profile'
  }
]
</script>

<template>
  <div class="nav-bar">
    <router-link
      v-for="item in navList"
      :key="item.id"
      :to="item.link"
      class="nav-bar__item"
      :class="{ public: item.id === 3, 'orange-fill': activeRoute === item.id && item.id !== 3 }"
    >
      <img
        class="nav-bar__item--icon"
        :class="{ 'green-fill': item.id === 3 }"
        :src="item.icon"
        :alt="item.title"
      />
      <p class="nav-bar__item--title">{{ item.title }}</p>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  gap: 8px;
  padding: 0 8px;
  @media (max-width: 880px) {
    display: flex;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3px;
    &--title {
      color: #aaa;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .public {
    gap: 4px;
    padding: 14px 21px;
    border-radius: 26px;
    background: #e8eaff;
    max-width: 80px;
    .nav-bar__item--title {
      color: #3c9462;
    }
  }
}
</style>
