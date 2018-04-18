<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="调入仓">
            <el-select v-model="form.name" placeholder="调入仓" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="调出仓">
            <el-select v-model="form.name" placeholder="调出仓" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="调拨物料">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="调拨日期">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="至" label-width="40px">
            <el-date-picker type="date" placeholder="结束时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
        </el-form>
      </div>
      <el-button type="primary" size="small" class="addbtn" @click="addBtn">确定调拨</el-button>
      <el-button type="danger" size="small" class="cancelbtn" @click="addBtn">取消调拨</el-button>
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
            label="调拨编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手工编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调出仓">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调入仓">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨物料">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生产日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨日期">
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
}

.topmain .el-form{
  .el-form-item{
    width: 238px;
  }
  .el-date-editor{
    width: 190px;
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
