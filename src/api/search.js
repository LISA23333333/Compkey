import {service2} from '@/utils/request'

export function getResult(params) {
    return service2({
      url: '/search?keyword='+params,
      method: 'get',
      params,
      baseURL: 'http://localhost:8802' // 直接通过覆盖的方式
    })
  }