<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="home container">
    <h1 class="home__title">{{ t('home.title') }} --- ABOUT PAGE</h1>
    <router-link to="/" class="home__btn">Home</router-link>
  </div>
</template>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 30px;
    color: $secondary-color;
    text-align: center;
  }
  &__btn {
    display: block;
    margin: 20px;
    padding: 10px 20px;
    border: 1px solid $secondary-color;
    border-radius: 5px;
    background-color: $secondary-color;
    color: white;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }
}
</style>
