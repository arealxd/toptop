import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const lastName = ref<string>('')
  const firstName = ref<string>('')
  const middleName = ref<string>('')
  const email = ref<string>('')
  const phone = ref<string>('')
  const avatar = ref<string | null>(null)
  const avatarFile = ref<File | null>(null)

  return { lastName, firstName, middleName, email, phone, avatar, avatarFile }
})
