<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="90px" label-position="left">
          <el-form-item label="系统单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="手工单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="form.name" placeholder="选择订单状态" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出库仓">
            <el-select v-model="form.name" placeholder="选择出库仓" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="预计出货时间 从" label-width="120px">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="至" label-width="40px">
            <el-date-picker type="date" placeholder="结束时间" size="medium" v-model="form.date"></el-date-picker>
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
            label="系统退货单号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手工退货单号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="制表日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="仓库">
          </el-table-column>
          <el-table-column
            prop="address"
            label="预计到货日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="快递公司">
          </el-table-column>
          <el-table-column
            prop="address"
            label="单据备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="editBtn(scope.$index, scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>

    <!-- 弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="storeDialog" width="1200px" >
      <div class="dialog-main">
        <div class="headInfo">
          <span>单号：23455345345332453</span>
          <span>手工单号：23455</span>
          <span>出库仓：南山仓</span>
          <span>订单状态：待出库</span>
          <span>预计出库时间：2018-12-12 15:10:20</span>
          <span>快递公司：顺丰</span>
          <span>订单备注：无</span>
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
            label="物料系统编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料手工编号">
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
            label="调拨单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="消耗单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="进货单价">
          </el-table-column>
          <el-table-column
            prop="address"
            label="退货单价">
          </el-table-column>
          <el-table-column
            prop="address"
            label="退货数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="金额">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
        </el-table>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="addstoreBtn" size="small">打 印</el-button>
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
  margin-top: 20px;
}

.topmain .el-form{
  padding-right: 20%;
  .el-date-editor{
    width: 190px;
  }
  .searchBtn{
    margin-bottom: 12px;
  }
}
.moreText{
  color:#3BB3FF;
  cursor: pointer;
  text-decoration:underline;
  line-height: 28px;
}
</style>
