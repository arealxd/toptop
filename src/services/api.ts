import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + 'accessToken',
    'Accept-Language': 'ru'
  }
})

export default instance
