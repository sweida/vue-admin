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
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="detailBtn(scope.$index, scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <!-- 弹框 -->
    <el-dialog title="盘点明细列表" :visible.sync="storeDialog" width="1200px" >
      <div class="dialog-main">
        <div class="headInfo">
          <span>创建日期：	2015-04-14 17:07:28</span>
          <span>单号：23455345345332453</span>
          <span>手工单号：23455</span>
          <span>入库仓：南山仓</span>
          <span>制单人：啊啊啊</span>
          <span>经手人：啊啊啊</span>
        </div>
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
            label="物料批次号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料编号">
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
            label="账面数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘点数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘盈数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="单价">
          </el-table-column>
          <el-table-column
            prop="address"
            label="盘亏数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="说明">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" size="small">打 印</el-button>
        <el-button type="primary" @click="storeDialog = false" size="small">确 定</el-button>
      </span>
    </el-dialog>
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
