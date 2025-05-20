<script setup lang="ts">
import { ref } from 'vue'
import AModal from '@/components/UI/AModal.vue'
import AButton from '@/components/UI/AButton.vue'
import { useRouter } from 'vue-router'
import { deleteAccount } from '@/composables/api/profile'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()
const isModalVisible = ref<boolean>(false)
const modalType = ref<'logout' | 'delete'>('logout')
const isLoading = ref<boolean>(false)

const toggleModal = (type: 'logout' | 'delete') => {
  isModalVisible.value = !isModalVisible.value
  modalType.value = type
}

const logout = () => {
  localStorage.removeItem('access_token')
  router.push('/auth')
}

const deleteProfile = async () => {
  isLoading.value = true
  try {
    await deleteAccount(userStore.profile?.id)
    logout()
  } finally {
    isLoading.value = false
  }
}

const modalActions = () => {
  if (modalType.value === 'logout') {
    logout()
  } else if (modalType.value === 'delete') {
    deleteProfile()
  }
}
</script>

<template>
  <div class="profile-footer">
    <AModal v-if="isModalVisible" @close="toggleModal">
      <div class="profile-footer__delete-modal">
        <p class="title" v-if="modalType === 'logout'">Вы уверены, что хотите выйти из аккаунта?</p>
        <p class="title" v-else>Вы уверены, что хотите удалить аккаунт?</p>
        <div class="buttons">
          <AButton class="button" title="Отмена" @click="toggleModal" />
          <AButton
            class="button"
            background="#FF0000"
            color="#fff"
            :title="modalType === 'logout' ? 'Выйти' : 'Удалить'"
            :loading="isLoading"
            :loading-size="21"
            @click="modalActions"
          />
        </div>
      </div>
    </AModal>
    <div class="profile-footer__my-ads">
      <RouterLink to="/my-ads" class="profile-footer__my-ads--title">
        <p>Мои объявления</p>
        <img src="/icons/arrow-27.svg" alt="arrow" />
      </RouterLink>
      <p class="profile-footer__my-ads--indicator">1 активных объявлении</p>
    </div>
    <div class="profile-footer__buttons">
      <button class="profile-footer__buttons--item" @click="toggleModal('logout')">Выйти из аккаунта</button>
      <button class="profile-footer__buttons--item delete" @click="toggleModal('delete')">Удалить аккаунт</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  margin-bottom: 78px;
  border-top: 1px solid #d9d9d9;
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
  &__my-ads {
    width: 100%;
    max-width: 688px;
    min-height: 178px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #fce8cb url('/images/my-ads.png') no-repeat right bottom;
    border-radius: 8px;
    padding: 24px;
    &--title {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 16px;
      p {
        color: #3c9462;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &--item {
      width: fit-content;
      color: #3c9462;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover {
        text-decoration: underline;
      }
    }
    .delete {
      color: #ff0000;
    }
  }
}
</style>
