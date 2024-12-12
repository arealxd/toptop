<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ALogo from '@/components/UI/ALogo.vue'
import AButton from '@/components/UI/AButton.vue'

window.scrollTo(0, 0);

const route = useRoute()
const router = useRouter()
const authType = ref<'login' | 'registration'>('login')
const passwordType = ref<'password' | 'text'>('password')
const repeatPasswordType = ref<'password' | 'text'>('password')
const login = ref<string>('')
const password = ref<string>('')
const repeatPassword = ref<string>('')
const eightCharacters = computed(() => password.value.length >= 8)
const hasUpperCase = computed(() => /[A-Z]/.test(password.value))
const hasNumberOrSymbol = computed(() => /[0-9!@#$%^&*]/.test(password.value))
const passwordsMatch = computed(() => password.value === repeatPassword.value)

if (route.query.type === 'registration') {
  authType.value = 'registration'
}

const togglePassword = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

const toggleRepeatPassword = () => {
  repeatPasswordType.value = repeatPasswordType.value === 'password' ? 'text' : 'password'
}

const toggleAuthType = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  authType.value = authType.value === 'login' ? 'registration' : 'login'
  login.value = ''
  password.value = ''
  repeatPassword.value = ''
}

const authAction = () => {
  router.push('/profile')
  if (authType.value === 'login') {
    authLogin()
  } else {
    authRegistration()
  }
}

const authLogin = async () => {
  if (!login.value || !password.value) {
    return
  }

  console.log('login')
}

const authRegistration = async () => {
  if (
    !eightCharacters.value ||
    !hasUpperCase.value ||
    !hasNumberOrSymbol.value ||
    !passwordsMatch.value
  ) {
    return
  }

  console.log('registration')
}
</script>

<template>
  <div class="auth-view container">
    <img class="auth-view__bg" src="/images/auth-bg.png" alt="auth-bg" />
    <div class="auth-view__title">
      <p class="auth-view__title--welcome">
        {{ authType === 'login' ? 'Добро пожаловать в' : 'Чтобы зарегистрироваться в' }}
      </p>
      <ALogo class="auth-view__title--logo" size="large" />
      <p class="auth-view__title--description">
        {{
          authType === 'login'
            ? 'Введите логин и пароль чтобы войти в личный кабинет'
            : 'заполните ниже поля'
        }}
      </p>
    </div>
    <form @submit.prevent="authAction" class="auth-view__form">
      <div class="auth-view__form--input">
        <label for="login">Логин</label>
        <input
          v-model="login"
          required
          type="text"
          id="login"
          placeholder="Номер телефона или Email"
        />
      </div>
      <div class="auth-view__form--input input-password login-password">
        <div class="titles">
          <label for="password">Пароль</label>
          <p v-if="authType === 'login'" class="sub-text">Забыли пароль?</p>
        </div>
        <div class="password">
          <input
            v-model="password"
            :type="passwordType"
            required
            id="password"
            placeholder="Пароль"
          />
          <img
            @click="togglePassword"
            class="eye-icon"
            :src="`/icons/${passwordType === 'password' ? 'closed-eye' : 'opened-eye'}.svg`"
            alt="eye"
          />
        </div>
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--input repeat-password">
        <label for="repeat-password">Повторите пароль</label>
        <div class="password">
          <input
            v-model="repeatPassword"
            :type="repeatPasswordType"
            required
            id="repeat-password"
            placeholder="Пароль"
          />
          <img
            @click="toggleRepeatPassword"
            class="eye-icon"
            :src="`/icons/${repeatPasswordType === 'password' ? 'closed-eye' : 'opened-eye'}.svg`"
            alt="eye"
          />
        </div>
      </div>
      <div v-if="authType === 'login'" class="auth-view__form--remember">
        <input type="checkbox" id="remember" />
        <label for="remember">Запомнить меня</label>
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--register-info">
        <div v-if="password.length > 0 || repeatPassword.length > 0" class="register-validation">
          <div class="item">
            <img
              v-if="!eightCharacters"
              src="/icons/validation-error.svg"
              class="red-fill"
              alt="check"
            />
            <img v-else src="/icons/validation-success.svg" alt="check" />
            <p :class="{ 'red-fill': !eightCharacters }">Длина не менее 8 символов</p>
          </div>
          <div class="item">
            <img
              v-if="!hasUpperCase"
              src="/icons/validation-error.svg"
              class="red-fill"
              alt="check"
            />
            <img v-else src="/icons/validation-success.svg" alt="check" />
            <p :class="{ 'red-fill': !hasUpperCase }">Пароль включает в себя заглавные буквы</p>
          </div>
          <div class="item">
            <img
              v-if="!hasNumberOrSymbol"
              src="/icons/validation-error.svg"
              class="red-fill"
              alt="check"
            />
            <img v-else src="/icons/validation-success.svg" alt="check" />
            <p :class="{ 'red-fill': !hasNumberOrSymbol }">Минимум одну цифру или символ</p>
          </div>
          <div class="item">
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
        <p class="confirmations">
          Я соглашаюсь с
          <router-link to="/confirmation" target="_blank">Условия использования</router-link>, а
          также с передачей и обработкой моих данных в TopTop. Я подтверждаю свое совершеннолетие и
          ответственность за размещение объявления
        </p>
      </div>
      <div class="auth-view__form--submits">
        <AButton
          button-type="submit"
          :title="authType === 'login' ? 'Войти' : 'Зарегистрироваться'"
        />
        <p class="or">{{ authType === 'login' ? 'или' : 'есть учетная запись?' }}</p>
        <AButton
          @click="toggleAuthType"
          type="text"
          color="#3347F6"
          :title="
            authType === 'login' ? 'Зарегистрироваться' : 'Вы можете войти используя данные профиля'
          "
        />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.auth-view {
  display: flex;
  flex-direction: column;
  position: relative;
  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 56px 0 0 56px;
  }
  &__title {
    width: fit-content;
    margin-top: 113px;
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-bottom: 36px;
    &--welcome {
      color: #000;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    &--description {
      max-width: 290px;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding-bottom: 90px;
    &--input {
      display: flex;
      flex-direction: column;
      gap: 8px;
      label {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      input {
        width: 100%;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        background: #fff;
        padding: 15px 16px;
      }
      .password {
        position: relative;
        .eye-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
      .titles {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sub-text {
          color: #1472ff;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .login-password {
      margin-top: 38px;
      margin-bottom: 18px;
    }
    .repeat-password {
      margin-top: 6px;
    }
    &--remember {
      display: flex;
      align-items: center;
      gap: 12px;
      input {
        width: 20px;
        height: 20px;
        border: 1px solid #e2e8f0;
        border-radius: 2px;
        cursor: pointer;
        accent-color: #0575e6;
      }
      label {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
      }
    }
    &--submits {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
      .or {
        color: #cacaca;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    &--register-info {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: 16px;
      .register-validation {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .item {
          display: flex;
          align-items: center;
          gap: 6px;
          p {
            color: #555;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
      .confirmations {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        a {
          color: #3347f6;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
