<script setup lang="ts">
import { ref } from 'vue'
import AModal from '@/components/UI/AModal.vue'
import AButton from '@/components/UI/AButton.vue'

const isModalVisible = ref<boolean>(false)

const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value
}
</script>

<template>
  <div class="profile-footer">
    <AModal v-if="isModalVisible" @close="toggleModal">
      <div class="profile-footer__delete-modal">
        <p class="title">Вы уверены, что хотите удалить аккаунт?</p>
        <div class="buttons">
          <AButton class="button" title="Отмена" @click="toggleModal" />
          <AButton
            class="button"
            background="#FF0000"
            color="#fff"
            title="Удалить"
            @click="toggleModal"
          />
        </div>
      </div>
    </AModal>
    <div class="profile-footer__my-ads">
      <RouterLink to="/profile" class="profile-footer__my-ads--title">
        <p>Мои объявления</p>
        <img src="/icons/arrow-27.svg" alt="arrow" />
      </RouterLink>
      <p class="profile-footer__my-ads--indicator">1 активных объявлении</p>
    </div>
    <button class="profile-footer__delete" @click="toggleModal">Удалить аккаунт</button>
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
      line-height: 14px;
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
        color: #3347f6;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px;
      }
    }
  }
  &__delete {
    width: fit-content;
    color: #ff2c20;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
