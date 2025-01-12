<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

const setLocale = (value: string): void => {
  locale.value = value
  document.cookie = `locale=${value}; max-age=${60 * 60 * 24 * 30}`
}

watch(locale, (value) => {
  setLocale(value)
})
</script>

<template>
  <div class="page-header">
    <p class="page-header__title">TopTop.kz</p>
    <select v-model="locale" name="lang" id="lang" class="page-header__lang">
      <option value="ru">RU</option>
      <option value="kk">KZ</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 25px;
  min-height: 56px;
  background: #3c9462;
  @media (max-width: 880px) {
    display: flex;
  }
  &__title {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__lang {
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: transparent;
  }
}
</style>
