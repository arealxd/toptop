import api from '@/services/api'
import { useToast } from 'vue-toastification'
import router from '@/router'

export const loginApi = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', null, {
      auth: {
        username: email,
        password: password
      }
    })

    if (response?.data?.data?.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token)
      useToast().success('Вы успешно вошли в систему')
      await router.push('/profile')
    }
  } catch (error: any) {
    console.error('Ошибка при логине:', error?.response?.data || error?.message)
    useToast().error(error?.response?.data?.message || 'Ошибка при логине')
    throw error
  }
}

export const registerApi = async (
  email: string,
  phone: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  password: string
) => {
  try {
    const response = await api.post('/auth/register', {
      email,
      phone: phone.replace(/\D/g, '').replace(/^8/, '7').replace(/^9/, '7$&'),
      first_name,
      last_name,
      middle_name,
      password
    })

    if (response?.data?.data?.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token)
      useToast().success('Регистрация прошла успешно')
      await router.push('/profile')
    }
  } catch (error: any) {
    console.error('Ошибка при регистрации:', error?.response?.data || error?.message)
    useToast().error(error?.response?.data?.message || 'Ошибка при регистрации')
    throw error
  }
}
