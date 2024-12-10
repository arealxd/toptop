<script setup lang="ts">
import { useRoute } from 'vue-router'
import { formatDate } from '@/composables/useFormatDate'
import AButton from '@/components/UI/AButton.vue'
import ACard from '@/components/UI/ACard.vue'

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
    <div class="a-detail__chars">
      <p class="a-detail__chars--title">Характеристики</p>
      <div class="info-block">
        <div class="info-block__item">
          <span class="info-block__label">Состояние:</span>
          <span class="info-block__value">Б/у</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Основной цвет:</span>
          <span class="info-block__value">черный</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Максимальный возраст:</span>
          <span class="info-block__value">до 3-х лет</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Размеры:</span>
          <span class="info-block__value">55x21x67</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Тип:</span>
          <span class="info-block__value">коляска прогулочная</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Механизм складывания:</span>
          <span class="info-block__value">книжка</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Положение спинки:</span>
          <span class="info-block__value">сидя, полулежа, лежа</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Материал:</span>
          <span class="info-block__value">ткань</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Регулировка высоты ручки:</span>
          <span class="info-block__value">Да</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Возможность регулировки:</span>
          <span class="info-block__value">перестановка блока лицом</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Перестановка блока лицом/спиной:</span>
          <span class="info-block__value">Да</span>
        </div>
        <div class="info-block__item">
          <span class="info-block__label">Вес:</span>
          <span class="info-block__value">9.0 кг</span>
        </div>
      </div>
    </div>
    <div class="a-detail__description">
      <p class="a-detail__description--title">Описание</p>
      <p class="a-detail__description--text">
        Коляска Luxmоm 3 в 1. Пoкупали в магазине за 36т. cоcтояниe,кaк нoвoе,пoэтoму такaя цeнa.куплeнa в 2023году, пользовались несколькo рaз,пo пpичинe ,что купили новую. c кoляской в кoмплектe идёт автoлюлькa. всё в xopошeм coстoянии. Сaмa люлька нa коляске мeняeт свое пoложениe, мoжнo гулять с pебeнкoм и oн будет видeть Baс,a можно поменять положение и ребенок будет видеть все, что происходит вокруг. так же положение сидя можно сделать за счёт ремней. !!!С реальным покупателем могу обговорить конечную цену!!!!!!
      </p>
    </div>
    <div class="a-detail__other-ads">
      <div class="a-detail__other-ads--title">
        <p class="text">Другие объявления продавца</p>
        <p class="count">233</p>
        <img src="/icons/arrow-27.svg" alt="arrow">
      </div>
      <div class="a-detail__other-ads--items">
        <ACard
          v-for="i in 4"
          :key="i"
          :id="1"
          title="Универсальная коляска Carello Epica"
          slug="universalnaya-kolyaska-carello-epica"
          :price="25000"
          type="new"
          city="Алматы"
          date="2024-12-03T12:34:56.000000Z"
          :views="112"
          image="/images/no-image.jpg"
        />
      </div>
    </div>
    <div class="a-detail__similar">
      <div class="a-detail__similar--title">Похожие</div>
      <div class="a-detail__similar--items">
        <ACard
          v-for="i in 4"
          :key="i"
          :id="1"
          title="Универсальная коляска Carello Epica"
          slug="universalnaya-kolyaska-carello-epica"
          :price="25000"
          type="new"
          city="Алматы"
          date="2024-12-03T12:34:56.000000Z"
          :views="112"
          image="/images/no-image.jpg"
        />
      </div>
    </div>
    <AButton class="a-detail__all" type="outlined" title="Все объявления" />
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
  &__chars {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    &--title {
      color: #FF5100;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;
    }
    .info-block {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      row-gap: 24px;
      column-gap: 100px;
    }
    .info-block__item {
      display: flex;
      justify-content: space-between;
    }
    .info-block__label {
      color: #898989;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
    }
    .info-block__value {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 32px;
    border-bottom: 1px solid #D9D9D9;
    &--title {
      color: #3347F6;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;
    }
    &--text {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__other-ads {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 32px;
    padding-bottom: 40px;
    border-bottom: 1px solid #D9D9D9;
    &--title {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: fit-content;
      &:hover {
        .text {
          text-shadow: 0 0 1px #3347F6;
        }
      }
      .text {
        color: #3347F6;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
      }
      .count {
        color: #3347F6;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-right: 16px;
        margin-left: 24px;
      }
    }
    &--items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 40px;
    }
  }
  &__similar {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid #D9D9D9;
    &--title {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
    &--items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 40px;
    }
  }
  &__all {
    max-width: 343px;
    margin-top: 32px;
    margin-bottom: 80px;
  }
}
</style>
