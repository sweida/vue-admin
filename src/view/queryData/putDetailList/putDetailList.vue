<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="出库时间 从" label-width="90px">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="至" label-width="40px">
            <el-date-picker type="date" placeholder="结束时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="出库仓库">
            <el-select v-model="form.name" placeholder="选择仓库" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium" placeholder="系统采购单号"></el-input>
          </el-form-item>
          <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
        </el-form>
      </div>
      <div class="main-table">
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="进货批次"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="出库数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="date"
            label="领料人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="出库人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="出库时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="出库备注">
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
      storeDialog: false,
      dialogTitle: '进货订单明细',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      }],
      form: {
        name: '',
        actDesc: ''
      },
      organ: [
        {
          id: 1,
          name: '阿萨德'
        },
        {
          id: 2,
          name: '发广告'
        }
      ]
    }
  },
  methods: {
    detailBtn() {
      this.storeDialog = true
    }
  }
}
</script>

<style scoped lang="scss">

.main-table{
  width: 100%;
  max-width: 1460px;
  margin-top: 20px;
}

.topmain .el-form{
  .el-form-item{
    width: 280px;
  }
  .el-date-editor{
    width: 210px;
  }
}
.countBox{
  width: 80%;
  margin: auto;
}
</style>
