import {service2} from '@/utils/request'

export function getResult(params) {
    return service2({
      url: '/search?keyword='+params,
      method: 'get',
      params,
      timeout:20000000000000000,
      baseURL: 'http://localhost:8802' // 直接通过覆盖的方式
    })
  }

  export function getHistory(params) {
    return service2({
      url: '/search/record?userid='+params,
      method: 'get',
      params,
      baseURL: 'http://localhost:8802' // 直接通过覆盖的方式
    })
  }
  export function getRecommend(params) {
    return service2({
      url: '/search/recommend?userid='+params,
      method: 'get',
      params,
      baseURL: 'http://localhost:8802' // 直接通过覆盖的方式
    })
  }