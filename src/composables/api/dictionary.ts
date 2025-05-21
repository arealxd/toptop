import api from '@/services/api'

export const getCities = async () => {
  try {
    const response = await api.get('/cities')
    return response?.data?.data
  } catch (error: any) {
    console.error('Ошибка при получении списка городов:', error?.response?.data || error.message)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response?.data?.data
  } catch (error: any) {
    console.error('Ошибка при получении категорий:', error?.response?.data || error.message)
    throw error
  }
}

export const getMajors = async () => {
  try {
    const response = await api.get('/majors')
    return response?.data?.data
  } catch (error: any) {
    console.error('Ошибка при получении специальностей:', error?.response?.data || error.message)
    throw error
  }
}
