import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-scaffolding/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-scaffolding/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-scaffolding/user/logout',
    method: 'post'
  })
}
