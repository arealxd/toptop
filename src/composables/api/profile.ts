import api from '@/services/api'
import { useToast } from 'vue-toastification'

export const getProfileMe = async () => {
  try {
    const response = await api.get('/profile/me')
    return response?.data?.data
  } catch (error: any) {
    console.error('Ошибка при получении профиля:', error?.response?.data || error.message)
    throw error
  }
}

export const updateProfile = async (
  userId: number,
  payload: {
    first_name?: string
    last_name?: string
    middle_name?: string
    email?: string
    phone?: string
    role?: string
  }
) => {
  const { first_name, last_name, middle_name, email, phone } = payload
  const hasChanges =
    first_name !== undefined ||
    last_name !== undefined ||
    middle_name !== undefined ||
    email !== undefined ||
    phone !== undefined

  if (!hasChanges) {
    useToast().warning('Нет изменений для обновления профиля')
    return 'no_changes'
  }

  try {
    await api.post(`/profile/${userId}`, payload)
    useToast().success('Профиль успешно обновлён')
  } catch (error: any) {
    console.error('Ошибка при обновлении профиля:', error?.response?.data || error.message)
    useToast().error(error?.response?.data?.message || 'Ошибка при обновлении профиля')
    throw error
  }
}

export const getProfileBalance = async () => {
  try {
    const response = await api.get('/profile/balance')
    return response?.data
  } catch (error: any) {
    console.error('Ошибка при получении баланса:', error?.response?.data || error.message)
    throw error
  }
}
