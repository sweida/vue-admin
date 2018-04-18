<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="开单日期 从" label-width="90px">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="至" label-width="40px">
            <el-date-picker type="date" placeholder="结束时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="配料状态">
            <el-select v-model="form.name" size="medium">
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
      <!-- <el-button type="primary" size="small" class="addbtn" @click="addBtn">查看明细</el-button>
      <el-button type="danger" size="small" class="cancelbtn" @click="addBtn">删除配料</el-button> -->
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
            label="配料单号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="客户名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="制表日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="项目名称">
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
            label="下单人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="最后更新时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="调拨日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="el-icon-document" @click="detailBtn(scope.$index, scope.row)"></i>
              <i class="el-icon-delete" @click="deleteBtn(scope.$index, scope.row)"></i>
              <!-- <span class="moreText" @click="deleteBtn(scope.$index, scope.row)">查看明细</span>
              <span class="red" @click="deleteBtn(scope.$index, scope.row)">取消配料</span> -->
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

  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      storeDialog: false,
      dialogTitle: '配料单明细',
      tableData: [{
        id: '222',
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
      this.$confirm('是否删除该配料?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
    },
    detailBtn(index, row) {
      this.$router.push('burdening/edit/' + row.id)
      // this.storeDialog = true
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
  .el-form-item{
    width: 260px;
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
