<template>
  <main>
    <header class="main-title">引导</header>
    <section class="main-content scroll">
      <div class="head">
        设置向导（基础资料）：在使用仓库功能时，请先设置企业的基础资料
      </div>
      <div class="main-table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="菜单名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="点击进入"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="功能描叙">
          </el-table-column>
        </el-table>
      </div>
    </section>

  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  created() {
    console.log(222,this.b(1,1,2,5));
  },
  methods: {
    b(c, d, a){
      arguments[2] = 10
      console.log(arguments.length)
    }
  }
}
</script>

<style scoped lang="scss">

.main-table{
  width: 60%;
}

</style>
