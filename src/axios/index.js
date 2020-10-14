/* eslint-disable */
import axios from 'axios'
import { host } from '@/assets/js/host'
const httpRequest = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? host : '',
  timeout: 60000
})
// 请求拦截
httpRequest.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 响应拦截
httpRequest.interceptors.response.use(
  response => {
    console.log(response)
    return Promise.reject(response.data)
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export { httpRequest }
