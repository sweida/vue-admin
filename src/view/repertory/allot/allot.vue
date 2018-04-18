<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <span class="el-form-item">
            制单日期：2018-03-23 17:13:17
          </span>
          <span class="el-form-item">
            单号：CAS2018032317132604345528
          </span>
          <el-form-item label="手工单号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <span class="el-form-item">
            制表人：测试181
          </span>
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
          <el-form-item label="经手人">
            <el-select v-model="form.name" placeholder="选择经手人" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单据备注">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" size="small" class="addbtn" @click="addBtn">增加调拨物料</el-button>
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
            label="系统采购单号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手工采购单号">
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
            label="预计到货日期 ">
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
            label="取消选择">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="editBtn(scope.$index, scope.row)">取消</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>

    <!-- 弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="storeDialog" width="1200px" >
      <div class="dialog-main">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="系统编号">
            <el-input v-model="form.name" size="medium" placeholder="系统采购单号"></el-input>
          </el-form-item>
          <el-form-item label="手工编号">
            <el-input v-model="form.name" size="medium" placeholder="系统采购单号"></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
          </el-form-item>
        </el-form>
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
            label="物料批次号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="系统编号">
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
            label="数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生产日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="有效期预警天数">
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
        <el-button type="primary" @click="storeDialog = false" size="small">确 定</el-button>
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
      this.storeDialog = true
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
    width: 300px;
  }
  .el-date-editor{
    width: 190px;
  }
}
.addbtn{
  margin: 20px 0;
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
