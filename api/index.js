import request from '../utils/axios'

// 测试demo
export const getApi = params => {
  return request.get('/test/api', params)
}