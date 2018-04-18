<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="产品">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="客户">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="持有产品编号" label-width="110px" style="width:370px">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="form.name" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开单日期">
            <el-date-picker type="date" placeholder="开始时间" size="medium" v-model="form.date"></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker type="date" placeholder="结束时间" size="medium" v-model="form.date"></el-date-picker>
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
            label="客户编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="客户名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="产品名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="获取日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="使用截止日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="来源类型">
          </el-table-column>
          <el-table-column
            prop="address"
            label="产品编号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="领取"
            width="120">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="getBtn(scope.$index, scope.row)">领取</el-button>
              <!-- <i class="el-icon-edit-outline" @click="detailBtn(scope.$index, scope.row)"></i> -->
              <!-- <span class="moreText" @click="deleteBtn(scope.$index, scope.row)">查看明细</span>
              <span class="red" @click="deleteBtn(scope.$index, scope.row)">取消配料</span> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>

    <!-- 领取弹框 -->
    <el-dialog title="请输入领取数量" :visible.sync="storeDialog" width="400px" >
      <div class="countBox">
        <el-input-number v-model="countInput" :min="1" :max="maxcount" label="描述文字"></el-input-number>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="storeDialog = false">取 消</el-button>
        <el-button size="small" type="primary" @click="getConfirm()">确 定</el-button>
      </span>
    </el-dialog>

  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      countInput: '',
      maxcount: '',
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
    addstoreBtn() {

    },
    deleteBtn() {
      this.$confirm('是否删除该配料?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
    },
    detailBtn() {
      this.storeDialog = true
    },
    getBtn() {
      this.storeDialog = true
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
.countBox{
  text-align: center;
}
</style>
