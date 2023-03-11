const Mock = require('mockjs')

const data = Mock.mock({
  'data|30': [{
    id: '@id',
    name: 'name',
    age: '@integer(10, 50)',
    title: '@sentence(10, 20)',
    display_time: '@datetime'
  }]
})

module.exports = [
  {
    url: '/vue-scaffolding/test/list',
    type: 'get',
    response: config => {
      const items = data.data
      return {
        code: 200,
        data: {
          total: items.length,
          data: items
        }
      }
    }
  }
]
