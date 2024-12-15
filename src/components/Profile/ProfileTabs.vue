<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import InfoTab from '@/components/Profile/InfoTab.vue'
import SecurityTab from '@/components/Profile/SecurityTab.vue'

const route = useRoute()
const activeTab = ref<number>(1)

if (route.query.tab) {
  activeTab.value = Number(route.query.tab)
}

const setActiveTab = (id: number) => {
  activeTab.value = id
}
</script>

<template>
  <div class="profile-tabs">
    <div class="profile-tabs__list">
      <p
        @click="setActiveTab(1)"
        class="profile-tabs__list--text"
        :class="{ active: activeTab === 1 }"
      >
        Информация
      </p>
      <p
        @click="setActiveTab(2)"
        class="profile-tabs__list--text"
        :class="{ active: activeTab === 2 }"
      >
        Безопасность
      </p>
    </div>
    <InfoTab v-if="activeTab === 1" />
    <SecurityTab v-else />
  </div>
</template>

<style scoped lang="scss">
.profile-tabs {
  display: flex;
  flex-direction: column;
  gap: 35px;
  &__list {
    display: flex;
    align-items: center;
    &--text {
      cursor: pointer;
      width: 100%;
      max-width: 166px;
      color: #abafb1;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 8px;
      border-bottom: 3px solid transparent;
      &:hover {
        background: #e5e5e5;
        color: #2b2f32;
      }
    }
    .active {
      color: #2b2f32;
      border-bottom: 3px solid #1b59f8;
      &:hover {
        background: none;
      }
    }
  }
}
</style>
