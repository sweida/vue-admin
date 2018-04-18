<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="手工单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="调出仓">
            <el-select v-model="form.name" placeholder="选择仓库" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="调入仓">
            <el-select v-model="form.name" placeholder="选择仓库" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="form.name" placeholder="选择状态" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期 从">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="至" >
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
            label="时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="单号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="手工单号">
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
            label="经手人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="制单人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
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
    <el-dialog title="调拨记录明细" :visible.sync="storeDialog" width="1200px" >
      <div class="dialog-main">
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
            label="调拨详细编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料批次号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格 ">
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
            label="明细备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <i class="el-icon-delete" @click="deleteBtn(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" size="small">打 印</el-button>
        <el-button type="primary" @click="sureDialog" size="small">确 定</el-button>
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
    },
    deleteBtn() {
      this.$confirm('是否删除该调拨明细记录?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
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
