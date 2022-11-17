import request from '@/utils/request'

export function getResult(params) {
    return request({
      url: '/test?keyword='+params,
      method: 'get',
      params,
      baseURL: 'http://localhost:8802' // 直接通过覆盖的方式
    })
  }