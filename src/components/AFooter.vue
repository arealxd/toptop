<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ALogo from '@/components/UI/ALogo.vue'

const { t } = useI18n()

const firstRow = [
  { title: t('footer.aboutUs'), link: '/' },
  { title: t('footer.terms'), link: '/' },
  { title: t('footer.privacy'), link: '/' },
  { title: t('footer.contact'), link: '/' }
]

const secondRow = [
  { title: t('footer.advertising'), link: '/' },
  { title: t('footer.career'), link: '/' },
  { title: t('footer.help'), link: '/' },
  { title: t('footer.rules'), link: '/' }
]

const thirdRow = [{ title: t('footer.mobileApp'), link: '/mobile-app' }]

const socialIcons = [
  { icon: '/icons/instagram.svg', link: 'https://www.instagram.com/' },
  { icon: '/icons/telegram.svg', link: 'https://web.telegram.org/' },
  { icon: '/icons/tiktok.svg', link: 'https://tiktok.com/' },
  { icon: '/icons/facebook.svg', link: 'https://facebook.com/' },
  { icon: '/icons/youtube.svg', link: 'https://www.youtube.com/' }
]
</script>

<template>
  <footer class="footer-wrapper">
    <div class="container footer">
      <ALogo />
      <div class="footer__list">
        <div class="footer__list--item">
          <ul>
            <li v-for="item in firstRow" :key="item.title">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__list--item">
          <ul>
            <li v-for="item in secondRow" :key="item.title">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__list--item">
          <ul>
            <li v-for="item in thirdRow" :key="item.title">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__list--item">
          <p>{{ t('footer.social') }}</p>
          <div class="social-list">
            <a v-for="icon in socialIcons" :key="icon.icon" :href="icon.link" target="_blank">
              <img :src="icon.icon" alt="social" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <p>© 2024 TopTop.kz</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-wrapper {
  background: #f2f2f3;
  padding: 31px 0;
}
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__list {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    &--item {
      display: flex;
      flex-direction: column;
      gap: 11px;
      .social-list {
        display: flex;
        align-items: center;
        gap: 16px;
        & img {
          &:hover {
            opacity: 0.7;
          }
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      a,
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        color: #888b94;
        &:hover {
          color: #151515;
        }
      }
    }
  }
  &__copyright {
    padding-top: 16px;
    border-top: 1px solid #d9d9d9;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #b0b0b0;
    }
  }
}

@media (max-width: 880px) {
  .footer-wrapper {
    display: none;
  }
}
</style>
