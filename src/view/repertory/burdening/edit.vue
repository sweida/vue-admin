<template>
  <main>
    <header class="main-title"><router-link to="/burdening">配料</router-link> <i class="el-icon-arrow-right"></i> {{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-button type="primary" size="small" @click="addBtn">新增配料</el-button>
        <el-button type="success" size="small">全部配料完成</el-button>
        <el-button type="warning" size="small">打 印</el-button>
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
            label="状态">
          </el-table-column>
          <el-table-column
            prop="date"
            label="配料数量"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="配料单位">
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
            label="消耗单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <span class="moreText" @click="doingburBtn(scope.$index, scope.row)">进行配料</span>
              <span class="red" @click="deleteBtn(scope.$index, scope.row)">删除配料</span>
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
            label="系统编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手工编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="配料数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拔单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="消耗单位">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨单位与消耗单位的兑换率">
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

    <!-- 进行配料 -->
    <el-dialog title="进行配料" :visible.sync="doingburDialog" width="1200px" >
      <div class="dialog-main">
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
            prop="date"
            label="批次号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="仓库名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="系统编号">
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
            label="库存数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料规格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="配料数量">
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
            label="调拨单位与消耗单位的兑换率">
          </el-table-column>
          <el-table-column
            prop="address"
            label="有效期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="物料状态">
          </el-table-column>
        </el-table>
      </div>

      <span slot="footer" class="dialog-footer">
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
      doingburDialog: false,
      storeDialog: false,
      dialogTitle: '配料单明细',
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
    deleteBtn() {
      this.$confirm('是否删除该配料?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
    },
    addBtn() {
      this.storeDialog = true
    },
    doingburBtn() {
      this.doingburDialog = true
    }
  }
}
</script>

<style scoped lang="scss">
.main-title{
  a{
    color:#333;
  }
  i{
    text-indent: 0;
  }
}
.main-table{
  width: 100%;
  margin-top: 20px;
  .red{
    cursor: pointer;
    margin-left: 20px;
  }
}

.topmain{
  border-bottom: 0;
  .el-button{
    margin-right: 20px;
  }
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
