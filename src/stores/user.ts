import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const surname = ref<string>('John')
  const name = ref<string>('Brown')
  const patronymic = ref<string>('Henry')
  const dateOfBirth = ref<string>('15.05.1990')
  const phone = ref<string>('+77055254900')
  const avatar = ref<string | null>(null)
  const avatarFile = ref<File | null>(null)

  return { surname, name, patronymic, dateOfBirth, phone, avatar, avatarFile }
})
