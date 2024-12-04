import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const adType = ref<'sale' | 'rent'>('sale')
  const viewType = ref<'tiles' | 'list'>('tiles')

  return { adType, viewType }
})
