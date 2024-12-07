import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import kk from './locales/kk.json'
import ru from './locales/ru.json'
import { createI18n } from 'vue-i18n'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const locale = document.cookie.match(/locale=([^;]+)/)

const i18n = createI18n({
  locale: locale ? locale[1] : 'ru',
  fallbackLocale: 'ru',
  messages: { kk, ru },
  legacy: false
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Toast)

app.mount('#app')
