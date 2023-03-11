import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-scaffolding/test/list',
    method: 'get',
    params
  })
}
