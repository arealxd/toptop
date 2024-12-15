<script setup lang="ts">
import AButton from '@/components/UI/AButton.vue'
import { computed, ref } from 'vue'

const oldPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showRepeatNewPassword = ref(false)
const eightCharacters = computed(() => newPassword.value.length >= 8)
const hasUpperCase = computed(() => /[A-Z]/.test(newPassword.value))
const hasNumberOrSymbol = computed(() => /[0-9!@#$%^&*]/.test(newPassword.value))
const passwordsMatch = computed(() => newPassword.value === repeatNewPassword.value)

const toggleShowPassword = (type: 'old' | 'new' | 'repeat') => {
  if (type === 'old') {
    showOldPassword.value = !showOldPassword.value
  } else if (type === 'new') {
    showNewPassword.value = !showNewPassword.value
  } else if (type === 'repeat') {
    showRepeatNewPassword.value = !showRepeatNewPassword.value
  }
}

const editPassword = () => {
  if (
    !eightCharacters.value ||
    !hasUpperCase.value ||
    !hasNumberOrSymbol.value ||
    !passwordsMatch.value
  ) {
    return
  }

  console.log('editPassword')
}
</script>

<template>
  <form @submit.prevent="editPassword" class="security-tab">
    <div class="item">
      <p class="item__title">Старый пароль</p>
      <div class="input-wrapper">
        <input
          v-model="oldPassword"
          placeholder="Cтарый пароль"
          required
          class="item__input"
          :type="showOldPassword ? 'text' : 'password'"
        />
        <img
          class="eye-icon"
          @click="toggleShowPassword('old')"
          :src="showOldPassword ? '/icons/opened-eye.svg' : '/icons/closed-eye.svg'"
          alt="eye"
        />
      </div>
    </div>
    <div class="item">
      <p class="item__title">Новый пароль</p>
      <div class="input-wrapper">
        <input
          v-model="newPassword"
          placeholder="Новый пароль"
          required
          class="item__input"
          :type="showNewPassword ? 'text' : 'password'"
        />
        <img
          class="eye-icon"
          @click="toggleShowPassword('new')"
          :src="showNewPassword ? '/icons/opened-eye.svg' : '/icons/closed-eye.svg'"
          alt="eye"
        />
      </div>
    </div>
    <div class="item">
      <p class="item__title">Повторите новый пароль</p>
      <div class="input-wrapper">
        <input
          v-model="repeatNewPassword"
          placeholder="Повторите новый пароль"
          required
          class="item__input"
          :type="showRepeatNewPassword ? 'text' : 'password'"
        />
        <img
          class="eye-icon"
          @click="toggleShowPassword('repeat')"
          :src="showRepeatNewPassword ? '/icons/opened-eye.svg' : '/icons/closed-eye.svg'"
          alt="eye"
        />
      </div>
      <div v-if="newPassword.length > 0 || repeatNewPassword.length > 0" class="item__validation">
        <div class="item__validation--step">
          <img
            v-if="!eightCharacters"
            src="/icons/validation-error.svg"
            class="red-fill"
            alt="check"
          />
          <img v-else src="/icons/validation-success.svg" alt="check" />
          <p :class="{ 'red-fill': !eightCharacters }">Длина не менее 8 символов</p>
        </div>
        <div class="item__validation--step">
          <img
            v-if="!hasUpperCase"
            src="/icons/validation-error.svg"
            class="red-fill"
            alt="check"
          />
          <img v-else src="/icons/validation-success.svg" alt="check" />
          <p :class="{ 'red-fill': !hasUpperCase }">Пароль включает в себя заглавные буквы</p>
        </div>
        <div class="item__validation--step">
          <img
            v-if="!hasNumberOrSymbol"
            src="/icons/validation-error.svg"
            class="red-fill"
            alt="check"
          />
          <img v-else src="/icons/validation-success.svg" alt="check" />
          <p :class="{ 'red-fill': !hasNumberOrSymbol }">Минимум одну цифру или символ</p>
        </div>
        <div class="item__validation--step">
          <img
            v-if="!passwordsMatch"
            src="/icons/validation-error.svg"
            class="red-fill"
            alt="check"
          />
          <img v-else src="/icons/validation-success.svg" alt="check" />
          <p :class="{ 'red-fill': !passwordsMatch }">Пароли не совпадают</p>
        </div>
      </div>
    </div>
    <AButton class="button" button-type="submit" title="Сохранить" />
  </form>
</template>

<style scoped lang="scss">
.security-tab {
  width: 100%;
  max-width: 688px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 24px;
  align-items: flex-start;
  .item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    &__validation {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 16px;
      &--step {
        display: flex;
        align-items: center;
        gap: 8px;
        p {
          color: #a3acb6;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
    &__title {
      color: #5e6366;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .input-wrapper {
      position: relative;
      .eye-icon {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    &__input {
      width: 100%;
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
  .button {
    margin-top: 22px;
  }
}
</style>
