## 使用

```
1. mock/index.js 中要导入
const user = require('./user')
const table = require('./table')

const test = require('./test')

const mocks = [
  ...user,
  ...table,
  ...test
]



2. mock/test.js 中定义后端返回的数据
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


3. api/test.js 中定义定义请求的接口
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-scaffolding/test/list',
    method: 'get',
    params
  })
}


4. view中导入api 接口，并调用
import { getList } from '@/api/test'

export default {
  name: 'Dashboard',
  data() {
    return {
      testData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(response => {
        this.testData = response.data.data
      })
    }
  }

}
</script>


5.  Mock.mock
http://mockjs.com/examples.html

https://blog.csdn.net/w_l_x_8882/article/details/117333397

https://blog.csdn.net/qq_40797578/article/details/128990152

```