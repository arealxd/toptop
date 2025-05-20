<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ALogo from '@/components/UI/ALogo.vue'
import AButton from '@/components/UI/AButton.vue'
import { loginApi, registerApi } from '@/composables/api/auth'
import { vMaska } from 'maska/vue'
import PageTitle from '@/components/Mobile/PageTitle.vue'

window.scrollTo(0, 0)

const route = useRoute()
const router = useRouter()
const authType = ref<'login' | 'registration'>('login')
const passwordType = ref<'password' | 'text'>('password')
const repeatPasswordType = ref<'password' | 'text'>('password')
const email = ref<string>('')
const phone = ref<string>('')
const firstName = ref<string>('')
const lastName = ref<string>('')
const middleName = ref<string>('')
const password = ref<string>('')
const repeatPassword = ref<string>('')
const eightCharacters = computed(() => password.value.length >= 8)
const hasUpperCase = computed(() => /[A-Z]/.test(password.value))
const hasNumber = computed(() => /[0-9]/.test(password.value))
const hasSymbol = computed(() => /[!@#$%^&*]/.test(password.value))
const passwordsMatch = computed(() => password.value === repeatPassword.value)
const isLoading = ref(false)

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
  if (authType.value === 'registration') {
    router.push({ query: { type: 'registration' } })
  } else {
    router.push({ query: {} })
  }
  email.value = ''
  phone.value = ''
  firstName.value = ''
  lastName.value = ''
  middleName.value = ''
  password.value = ''
  repeatPassword.value = ''
}

const authAction = async () => {
  isLoading.value = true
  if (authType.value === 'login') {
    await authLogin().finally(() => {
      isLoading.value = false
    })
  } else {
    await authRegistration().finally(() => {
      isLoading.value = false
    })
  }
}

const authLogin = async () => {
  if (!email.value || !password.value) {
    return
  }

  const result = await loginApi(email.value, password.value)
  if (result === 'success') {
    await router.push('/profile')
  }
}

const authRegistration = async () => {
  if (
    !eightCharacters.value ||
    !hasUpperCase.value ||
    !hasNumber.value ||
    !hasSymbol.value ||
    !passwordsMatch.value
  ) {
    return
  }

  const result = await registerApi(
    email.value,
    phone.value,
    firstName.value,
    lastName.value,
    middleName.value,
    password.value
  )
  if (result === 'success') {
    await router.push('/profile')
  }
}
</script>

<template>
  <PageTitle />
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
          v-model="email"
          autocomplete="nope"
          name="fake-login"
          required
          type="email"
          id="login"
          placeholder="Email"
        />
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--input extra">
        <label for="phone">Номер телефона</label>
        <input
          v-model="phone"
          v-maska="'+7 (###) ###-##-##'"
          autocomplete="nope"
          name="fake-phone"
          required
          type="text"
          id="phone"
          placeholder="Номер телефона"
        />
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--input extra">
        <label for="firstName">Имя</label>
        <input
          v-model="firstName"
          autocomplete="nope"
          name="fake-firstName"
          required
          type="text"
          id="firstName"
          placeholder="Имя"
        />
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--input extra">
        <label for="lastName">Фамилия</label>
        <input
          v-model="lastName"
          autocomplete="nope"
          name="fake-lastName"
          required
          type="text"
          id="lastName"
          placeholder="Фамилия"
        />
      </div>
      <div v-if="authType === 'registration'" class="auth-view__form--input extra">
        <label for="middleName">Отчество</label>
        <input
          v-model="middleName"
          autocomplete="nope"
          name="fake-middleName"
          required
          type="text"
          id="middleName"
          placeholder="Отчество"
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
            <img v-if="!hasNumber" src="/icons/validation-error.svg" class="red-fill" alt="check" />
            <img v-else src="/icons/validation-success.svg" alt="check" />
            <p :class="{ 'red-fill': !hasNumber }">Минимум одну цифру</p>
          </div>
          <div class="item">
            <img v-if="!hasSymbol" src="/icons/validation-error.svg" class="red-fill" alt="check" />
            <img v-else src="/icons/validation-success.svg" alt="check" />
            <p :class="{ 'red-fill': !hasSymbol }">Минимум один символ</p>
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
          <a
            href="https://www.fpml.org/spec/fpml-5-10-5-rec-1/html/confirmation/confirmations/fx-ex33-target.pdf"
            target="_blank"
            >Условия использования</a
          >, а также с передачей и обработкой моих данных в TopTop. Я подтверждаю свое
          совершеннолетие и ответственность за размещение объявления
        </p>
      </div>
      <div class="auth-view__form--submits">
        <AButton
          button-type="submit"
          :title="authType === 'login' ? 'Войти' : 'Зарегистрироваться'"
          :loading="isLoading"
        />
        <p class="or">{{ authType === 'login' ? 'или' : 'есть учетная запись?' }}</p>
        <AButton
          @click="toggleAuthType"
          type="text"
          color="#3C9462"
          :title="
            authType === 'login' ? 'Зарегистрироваться' : 'Вы можете войти используя данные профиля'
          "
        />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.page-title {
  display: none;
}
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
        line-height: normal;
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
          color: #3c9462;
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
    .extra {
      margin-top: 24px;
    }
    .login-password {
      margin-top: 24px;
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
          color: #3c9462;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media (max-width: 880px) {
  .page-title {
    display: block;
    margin-top: 22px;
  }
  .auth-view {
    margin-top: 24px;
    background: #fff;
    align-items: center;
    &__bg {
      display: none;
    }
    &__title {
      width: 100%;
      max-width: 400px;
      margin-top: 60px;
      margin-bottom: 24px;
      gap: 16px;
      &--welcome {
        font-size: 20px;
      }
      &--description {
        font-size: 16px;
      }
    }
    &__form {
      width: 100%;
      padding-bottom: 48px;
      &--remember {
        display: none;
      }
      &--submits {
        margin-top: 0;
        :deep(.a-button) {
          span {
            font-size: 16px;
          }
        }
      }
      .confirmations {
        margin-bottom: 24px;
      }
      .login-password {
        margin-top: 24px;
        margin-bottom: 32px;
      }
      .repeat-password {
        margin-top: -8px;
      }
    }
  }
}
</style>
