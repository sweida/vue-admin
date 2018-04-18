<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="分店名称">
            <el-select v-model="form.name" placeholder="选择分店" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料名称" label-width="100px">
            <el-input v-model="form.name" size="medium" placeholder="系统采购单号"></el-input>
          </el-form-item>
          <el-form-item label="物料编号" label-width="100px">
            <el-input v-model="form.name" size="medium" placeholder="系统采购单号"></el-input>
          </el-form-item>
          <el-form-item label="手工编号" label-width="100px">
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
            label="物料系统编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料手工编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料批次号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存下限">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存量">
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
    editBtn() {
      this.storeDialog = true
    },
    addstoreBtn() {

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
    width: 190px;
  }
}
.moreText{
  color:#3BB3FF;
  cursor: pointer;
  text-decoration:underline;
  line-height: 28px;
}
</style>
