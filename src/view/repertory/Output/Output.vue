<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="出库仓库">
            <el-select v-model="form.name" placeholder="选择出库仓库" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="领料人">
            <el-select v-model="form.name" placeholder="选择领料人" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
          </el-form-item>
          <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
        </el-form>

        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <span class="el-form-item">
            出库单号：CSR2018032613551000606234
          </span>
          <el-form-item label="出库备注" class="remark">
            <el-input v-model="form.name" size="medium" placeholder="出库备注"></el-input>
          </el-form-item>

          <el-button type="primary" size="small" class="searchBtn">确定出库</el-button>
          <el-button type="warning" size="small" class="searchBtn">打印</el-button>
        </el-form>
      </div>
      <div class="main-table">
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            type="selection"
            width="50">
          </el-table-column>
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
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="手工编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生产日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存下限">
          </el-table-column>
          <el-table-column
            prop="address"
            label="账面数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘点数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘盈">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘亏">
          </el-table-column>
          <el-table-column
            prop="address"
            label="说明">
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
    addBtn() {
    },
    addstoreBtn() {

    },
    deleteBtn() {

    }
  }
}
</script>

<style scoped lang="scss">

.main-table{
  width: 100%;
  margin-top: 20px;
}

.topmain{
  flex-direction: column;
  .el-form{
   .el-form-item{
     width: 320px;
   }
   .remark{
     width:680px;
   }
 }
}

.addbtn{
  margin: 20px 0;
}
.cancelbtn{
  margin-left: 40px;
}
.dialog-main{
  .el-form{
    display: flex;
    .el-form-item{
      margin-right: 40px;
    }
  }
}

</style>
