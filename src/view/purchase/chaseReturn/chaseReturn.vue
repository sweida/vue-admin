<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <span class="el-form-item">
            单号：2345234523532463462
          </span>
          <el-form-item label="手工单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <div class="el-form-item">
            <em>制单人：嘎嘎嘎</em>
            <em>制单日期：2018-03-22</em>
          </div>
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
          <el-form-item label="收款方式">
            <el-select v-model="form.name" placeholder="选择收款方式" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="整单金额">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="出货时间">
            <el-date-picker type="date" placeholder="预计出货时间" size="medium" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="快递公司">
            <el-select v-model="form.name" placeholder="选择快递公司" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="实付金额">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="审核人">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="经手人">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
        </el-form>
        <div class="explain">
          <h4>订单备注</h4>
          <textarea name="" id="" cols="30" rows="10" class="scroll" v-model="form.actDesc"></textarea>
        </div>
      </div>
      <el-button type="primary" size="small" class="addbtn" @click="addBtn">选择库存</el-button>
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
            label="物料批次号">
          </el-table-column>
          <el-table-column
            prop="date"
            label="物料系统编号">
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
            label="物料规格">
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
            label="库存剩余">
          </el-table-column>
          <el-table-column
            prop="address"
            label="退货数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="金额">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="取消选择">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="deleteBtn(scope.$index, scope.row)">取消</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </section>
    <!-- 弹框 -->
    <el-dialog title="选择库存" :visible.sync="storeDialog" width="1200px" >
      <div class="dialog-main">
        <div class="headInfo">
          <el-form ref="form" :model="form" label-width="70px" label-position="left">
            <el-form-item label="系统编号">
              <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
            </el-form-item>
            <el-form-item label="手工编号">
              <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
            </el-form-item>
            <el-form-item label="物料名称">
              <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
        </div>
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="物料批次号">
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
            label="物料规格 ">
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
            label="进货单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="进货数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存剩余">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生产日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="有效期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sureDialog" size="small">确 定</el-button>
      </span>
    </el-dialog>
    <div class="footer">
      <el-button type="primary" size="small" @click="mealCommon(editBtn)">新　建</el-button>
      <el-button type="warning" size="small" @click="mealCommon(saveBtn)">打　印</el-button>
    </div>
  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      storeDialog: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
      this.storeDialog = true
    },
    sureDialog() {
      this.storeDialog = false
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
.headInfo{
  display: -webkit-box;
  height: 40px;
  .el-form{
    display: flex;
    .el-form-item{
      margin-right: 40px;
    }
  }
}
.addbtn{
  margin: 20px 0;
}
</style>
