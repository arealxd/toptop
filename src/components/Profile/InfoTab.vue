<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { vMaska } from 'maska/vue'
import AButton from '@/components/UI/AButton.vue'
import AModal from '@/components/UI/AModal.vue'

const userStore = useUserStore()
const fileInput = ref<HTMLInputElement | null>(null)
const deleteAvatarModal = ref<boolean>(false)

const toggleDeleteAvatarModal = () => {
  deleteAvatarModal.value = !deleteAvatarModal.value
}

const editProfile = () => {
  console.log('editProfile')
}

const triggerUploadAvatar = () => {
  if (fileInput.value) {
    fileInput.value?.click()
  }
}

const uploadFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    userStore.avatar = URL.createObjectURL(file)
    userStore.avatarFile = file
  }
}
</script>

<template>
  <div class="info-tab">
    <AModal v-if="deleteAvatarModal" @close="toggleDeleteAvatarModal">
      <div class="info-tab__delete-modal">
        <p class="title">Вы уверены, что хотите удалить аватарку?</p>
        <div class="buttons">
          <AButton class="button" title="Отмена" @click="toggleDeleteAvatarModal" />
          <AButton
            class="button"
            background="#FF0000"
            color="#fff"
            title="Удалить"
            @click="toggleDeleteAvatarModal"
          />
        </div>
      </div>
    </AModal>
    <div class="info-tab__info">
      <p class="info-tab__info--name">
        {{ `${userStore.surname} ${userStore.name} ${userStore.patronymic}` }}
      </p>
      <form @submit.prevent="editProfile" class="info-tab__info--list">
        <div class="item">
          <p class="item__title">Фамилия</p>
          <input
            v-model="userStore.surname"
            v-maska="'@@@@@@@@@@@@@@@'"
            required
            class="item__input"
            type="text"
          />
        </div>
        <div class="item">
          <p class="item__title">Имя</p>
          <input
            v-model="userStore.name"
            v-maska="'@@@@@@@@@@@@@@@'"
            required
            class="item__input"
            type="text"
          />
        </div>
        <div class="item">
          <p class="item__title">Отчество</p>
          <input
            v-model="userStore.patronymic"
            v-maska="'@@@@@@@@@@@@@@@'"
            required
            class="item__input"
            type="text"
          />
        </div>
        <div class="item">
          <p class="item__title">Дата рождения</p>
          <input
            v-model="userStore.dateOfBirth"
            v-maska="'##.##.####'"
            required
            class="item__input"
            type="text"
          />
        </div>
        <div class="item">
          <p class="item__title">Номер телефона</p>
          <input
            v-model="userStore.phone"
            v-maska="'+7 ### ### ## ##'"
            required
            class="item__input"
            type="text"
          />
        </div>
        <AButton button-type="submit" title="Редактировать" />
      </form>
    </div>
    <div class="info-tab__avatar">
      <img
        class="info-tab__avatar--image"
        :src="userStore.avatar ?? '/images/no-image.jpg'"
        alt="avatar"
      />
      <div class="info-tab__avatar--actions">
        <div class="item">
          <img src="/icons/upload.svg" alt="upload" @click="triggerUploadAvatar" />
          <input
            @change="uploadFile"
            class="input-file"
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
          />
        </div>
        <div class="item">
          <img @click="toggleDeleteAvatarModal" src="/icons/delete.svg" alt="delete" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-tab {
  display: flex;
  gap: 24px;
  justify-content: space-between;
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
  &__info {
    width: 100%;
    max-width: 688px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &--name {
      color: #45464e;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &--list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 60px;
      row-gap: 24px;
      align-items: flex-end;
      .item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        &__title {
          color: #5e6366;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        &__input {
          padding: 13.75px 13px;
          border: 1px solid rgba(239, 241, 249, 0.6);
          border-radius: 6.671px;
          background: rgba(239, 241, 249, 0.6);
          color: #5e6366;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  &__avatar {
    position: relative;
    display: flex;
    &--image {
      width: 200px;
      height: 200px;
      border-radius: 8px;
      object-fit: cover;
    }
    &--actions {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      gap: 8px;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        cursor: pointer;
        border-radius: 10px;
        background: #fff2e2;
        &:hover {
          background: #f9e8d4;
        }
      }
    }
  }
}
</style>
