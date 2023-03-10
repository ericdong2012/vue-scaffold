import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-scaffolding/table/list',
    method: 'get',
    params
  })
}
