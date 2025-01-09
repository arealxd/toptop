<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LongCard from '@/components/UI/LongCard.vue'
import AButton from '@/components/UI/AButton.vue'
import AModal from '@/components/UI/AModal.vue'

const router = useRouter()
const route = useRoute()
const activeTab = ref<number>(1)
const deleteModalVisible = ref<boolean>(false)

const toggleDeleteModal = () => {
  deleteModalVisible.value = !deleteModalVisible.value
}

if (route.query.tab) {
  activeTab.value = Number(route.query.tab)
}

const setActiveTab = (tab: number) => {
  activeTab.value = tab
}
</script>

<template>
  <div class="ads-tab-wrapper">
    <AModal v-if="deleteModalVisible" @close="toggleDeleteModal">
      <div class="ads-tab-wrapper__delete-modal">
        <p class="title">Вы уверены, что хотите удалить объявление?</p>
        <div class="buttons">
          <AButton class="button" title="Отмена" @click="toggleDeleteModal" />
          <AButton
            class="button"
            background="#FF0000"
            color="#fff"
            title="Удалить"
            @click="toggleDeleteModal"
          />
        </div>
      </div>
    </AModal>
    <div class="ads-tab">
      <p @click="setActiveTab(1)" class="ads-tab__item" :class="{ active: activeTab === 1 }">
        Активные
      </p>
      <p @click="setActiveTab(2)" class="ads-tab__item" :class="{ active: activeTab === 2 }">
        Архив
      </p>
      <p @click="setActiveTab(3)" class="ads-tab__item" :class="{ active: activeTab === 3 }">
        Удаленные
      </p>
    </div>
    <div class="list">
      <template v-if="activeTab === 1">
        <div class="list__item" v-for="i in 2" :key="i">
          <LongCard
            :id="1"
            is-favorite
            title="Универсальная коляска Carello Epica"
            slug="universalnaya-kolyaska-carello-epica"
            description="Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт..."
            :price="69990"
            type="new"
            top
            newest
            city="Алматы"
            date="2024-12-03T12:34:56.000000Z"
            :views="112"
            image="/images/no-image.jpg"
          />
          <div class="list__item--buttons">
            <AButton
              class="button"
              title="Продвигать"
              pre-icon="zeus"
              gap="10px"
              background="#FF5100"
            />
            <AButton
              @click="router.push('/public-ad/universalnaya-kolyaska-carello-epica?type=edit')"
              class="button"
              title="Редактировать"
              pre-icon="edit"
              gap="10px"
            />
            <AButton
              @click="toggleDeleteModal"
              class="button"
              title="Удалить"
              background="#FF2C20"
              pre-icon="delete"
              gap="10px"
            />
          </div>
        </div>
      </template>
      <template v-if="activeTab === 2">
        <div class="list__item" v-for="i in 1" :key="i">
          <LongCard
            :id="1"
            is-favorite
            title="Универсальная коляска Carello Epica"
            slug="universalnaya-kolyaska-carello-epica"
            description="Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт..."
            :price="69990"
            type="new"
            top
            newest
            city="Алматы"
            date="2024-12-03T12:34:56.000000Z"
            :views="112"
            image="/images/no-image.jpg"
          />
          <div class="list__item--buttons">
            <AButton class="button" title="Активировать" pre-icon="play" gap="10px" />
            <AButton
              @click="toggleDeleteModal"
              class="button"
              title="Удалить"
              background="#FF2C20"
              pre-icon="delete"
              gap="10px"
            />
          </div>
        </div>
      </template>
      <template v-if="activeTab === 3">
        <div class="list__item" v-for="i in 1" :key="i">
          <LongCard
            :id="1"
            is-favorite
            title="Универсальная коляска Carello Epica"
            slug="universalnaya-kolyaska-carello-epica"
            description="Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт..."
            :price="69990"
            type="new"
            top
            newest
            city="Алматы"
            date="2024-12-03T12:34:56.000000Z"
            :views="112"
            image="/images/no-image.jpg"
          />
          <div class="list__item--buttons">
            <AButton class="button" title="Восстановить" pre-icon="return" gap="10px" />
            <AButton
              @click="toggleDeleteModal"
              class="button"
              title="Удалить"
              background="#FF2C20"
              pre-icon="delete"
              gap="10px"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ads-tab-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  margin-bottom: 40vh;
  &__delete-modal {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    .title {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
}
.ads-tab {
  display: flex;
  align-items: center;
  padding: 24px 8px;
  background: #f8f8f8;
  border-radius: 8px;
  &__item {
    width: 100%;
    max-width: 156px;
    color: #abafb1;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 8px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
      color: #2b2f32;
    }
  }
  .active {
    color: #2b2f32;
    border-bottom: 3px solid #3c9462;
    &:hover {
      background: none;
    }
  }
}
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__item {
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 18px 24px 25px 0;
    &--buttons {
      display: flex;
      margin-left: auto;
      gap: 24px;
      .button {
        min-width: 228px;
        max-width: 228px;
        :deep(.a-button__preicon) {
          filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
            hue-rotate(3deg) brightness(103%) contrast(103%);
        }
      }
    }
  }
}
</style>
