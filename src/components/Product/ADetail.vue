<script setup lang="ts">
import { useRoute } from 'vue-router'
import { formatDate } from '@/composables/useFormatDate'
import AButton from '@/components/UI/AButton.vue'

const route = useRoute()
const call = (phone: string) => {
  window.open(`tel:${phone}`)
}
</script>

<template>
  <div class="a-detail">
    <h1 class="a-detail__title">{{ route.params.slug }}</h1>
    <div class="a-detail__info">
      <div class="a-detail__info--images">
        <div class="main">
          <img src="/images/auth-bg.png" alt="mini image" />
          <span class="new">новое</span>
        </div>
        <div class="mini-list">
          <img v-for="i in 2" :key="i" src="/images/auth-bg.png" alt="mini image" />
        </div>
      </div>
      <div class="a-detail__info--main">
        <div class="actions">
          <div class="price-date">
            <p class="price">45 000 тг</p>
            <p class="date">{{ formatDate('2024-12-03T12:34:56.000000Z') }}</p>
          </div>
          <div class="indicators">
            <div class="views">
              <img src="/icons/views-24.svg" alt="views" />
              <span>30</span>
            </div>
            <img class="share" src="/icons/share.svg" alt="share" />
            <img class="favorite" src="/icons/favorite-disabled.svg" alt="favorite" />
          </div>
        </div>
        <div class="author">
          <div class="info">
            <img class="avatar" src="/icons/user.svg" alt="user" />
            <div class="user-data">
              <p class="name">Алмас</p>
              <p class="role">Продавец</p>
            </div>
          </div>
          <div class="phone">
            <p class="title">Телефон</p>
            <p class="value">+7 771 586 5858</p>
          </div>
        </div>
        <div class="city">
          <img class="icon" src="/icons/map-splat.svg" alt="map" />
          <p class="title">Алматы</p>
        </div>
        <div class="buttons">
          <AButton title="Написать" />
          <AButton @click="call('+77715865858')" title="Позвонить" background="#FF5100" />
        </div>
      </div>
    </div>
    <div class="description"></div>
  </div>
</template>

<style scoped lang="scss">
.a-detail {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  &__title {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 24px;
  }
  &__info {
    width: 100%;
    display: flex;
    gap: 70px;
    justify-content: space-between;
    &--images {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      .main {
        position: relative;
        width: 100%;
        max-width: 500px;
        height: 280px;
        background-color: #fce8cb;
        border-radius: 8px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
        }
        .new {
          border-radius: 12px;
          background: #3347f6;
          position: absolute;
          bottom: 16px;
          right: 10px;
          color: #fff;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          padding: 3px 8px;
        }
      }
      .mini-list {
        display: flex;
        gap: 16px;
        img {
          cursor: pointer;
          border-radius: 8px;
          width: 150px;
          height: 120px;
          object-fit: cover;
          background-color: #fce8cb;
        }
      }
    }
    &--main {
      width: 100%;
      display: flex;
      flex-direction: column;
      .actions {
        display: flex;
        width: 100%;
        gap: 32px;
        justify-content: space-between;
        .price-date {
          display: flex;
          flex-direction: column;
          gap: 16px;
          .price {
            color: #000;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .date {
            color: #898989;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
          }
        }
        .indicators {
          display: flex;
          align-items: center;
          gap: 32px;
          .views {
            display: flex;
            align-items: center;
            gap: 16px;
            span {
              color: #898989;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
          }
          .share,
          .favorite {
            cursor: pointer;
          }
        }
      }
      .author {
        margin-top: 50px;
        margin-bottom: 24px;
        display: flex;
        width: 100%;
        gap: 32px;
        justify-content: space-between;
        .info {
          display: flex;
          align-items: center;
          gap: 16px;
          .avatar {
            padding: 12px;
            background: #f0f0f0;
            border-radius: 50%;
          }
          .user-data {
            display: flex;
            flex-direction: column;
            gap: 16px;
            .name {
              color: #000;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 14px;
            }
            .role {
              color: #898989;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
          }
        }
        .phone {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
          align-items: flex-end;
          .title {
            color: #898989;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
          }
          .value {
            color: #000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
          }
        }
      }
      .city {
        display: flex;
        align-items: center;
        gap: 16px;
        .title {
          color: #898989;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 14px;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        gap: 19px;
        margin-top: 37px;
      }
    }
  }
}
</style>
