<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import ALogo from '@/components/UI/ALogo.vue'

const router = useRouter()
const { t } = useI18n()
const { locale } = useI18n()

const setLocale = (value: string): void => {
  locale.value = value
  document.cookie = `locale=${value}; max-age=${60 * 60 * 24 * 30}`
}

const openProfile = (): void => {
  if (localStorage.getItem('access-token')) {
    router.push('/profile')
  } else {
    router.push('/auth')
  }
}

watch(locale, (value) => {
  setLocale(value)
})
</script>

<template>
  <header class="header-wrapper">
    <div class="container header">
      <ALogo />
      <div class="header__actions">
        <router-link to="/" class="header__actions--plus">
          <img src="/icons/plus_circle.svg" alt="plus" />
          <p>{{ t('header.postAd') }}</p>
        </router-link>
        <router-link to="/" class="header__actions--message">
          <img src="/icons/message.svg" alt="message" />
        </router-link>
        <select @click="openProfile" name="profile" id="profile" class="header__actions--profile">
          <option value="" disabled selected hidden>{{ t('header.personalProfile') }}</option>
        </select>
        <select v-model="locale" name="lang" id="lang" class="header__actions--lang">
          <option value="ru">RU</option>
          <option value="kk">KZ</option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-wrapper {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 24px 0;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__actions {
    display: flex;
    align-items: center;
    gap: 40px;
    &--plus {
      display: flex;
      align-items: center;
      background: #fce8cb;
      border-radius: 8px;
      gap: 8px;
      padding-right: 13px;
      transition: all 0.3s ease;
      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 125%;
        color: #ff5100;
      }
      &:hover {
        background: #f9d9a6;
      }
    }
    &--profile,
    &--lang {
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: 300;
      font-size: 16px;
      line-height: 125%;
      color: #151515;
    }
    &--lang {
      font-size: 14px;
      padding-left: 23px;
      border-left: 1px solid #edebeb;
    }
  }
}
</style>
