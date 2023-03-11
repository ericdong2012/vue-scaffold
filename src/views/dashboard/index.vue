<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}

      <el-button
        class="icon disk-add"
        icon="yi-eye-slash"
      />
      <el-table :data="testData">
        <el-table-column label="id">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="年龄" prop="age" />
        <el-table-column label="标题" prop="title" />
        <el-table-column label="时间" prop="display_time" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getList } from '@/api/test'

export default {
  name: 'Dashboard',
  data() {
    return {
      testData: []
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
