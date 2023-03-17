import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosInterceptorOptions } from 'axios'

const cloneTreeApi = axios.create({
  baseURL: import.meta.env.VITE_CLONE_TREE_API
})

cloneTreeApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig<AxiosInterceptorOptions>) => {
    const token = localStorage.getItem('token')

    config.headers.Authorization = `Bearer ${token as string}`
    return config
  }
)

export default cloneTreeApi
