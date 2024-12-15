<script setup lang="ts">
import AButton from '@/components/UI/AButton.vue'
</script>

<template>
  <div class="profile-cards">
    <div class="profile-cards__wallet">
      <div class="profile-cards__wallet--texts">
        <p class="title">Кошелек</p>
        <p class="id">№2151651</p>
        <p class="money">500 тг</p>
      </div>
      <div class="profile-cards__wallet--buttons">
        <AButton title="+ Пополнить" background="#FCE8CB" color="#FF2C20" />
        <AButton title="История платежей" />
      </div>
    </div>
    <div class="profile-cards__support">
      <RouterLink to="/profile" class="profile-cards__support--title">
        <p>Тех. поддержка</p>
        <img src="/icons/arrow-27.svg" alt="arrow" />
      </RouterLink>
      <p class="profile-cards__support--indicator">1 ответ</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-cards {
  display: flex;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 45px;
  &__wallet {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    border-radius: 8px;
    padding: 16px 16px 21px 16px;
    background: #e0f4ff url('/images/wallet.png') no-repeat right bottom;
    &--texts {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .title {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .id {
        color: #898989;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
      }
      .money {
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    &--buttons {
      display: flex;
      align-items: center;
      gap: 29px;
    }
  }
  &__support {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-radius: 8px;
    background: #f5f5f5 url('/images/headphone.png') no-repeat right bottom;
    &--title {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 35px;
      &:hover {
        p {
          color: #000;
        }
      }
      p {
        color: #4f4f4f;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px;
      }
      img {
        filter: brightness(0) saturate(100%) invert(25%) sepia(0%) saturate(1241%)
          hue-rotate(180deg) brightness(102%) contrast(79%);
      }
    }
    &--indicator {
      color: #5e6366;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
