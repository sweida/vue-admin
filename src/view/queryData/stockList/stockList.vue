<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="仓库名称">
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
          <el-form-item label="库存批次">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="物料编号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="手工编号">
            <el-input v-model="form.name" size="medium" placeholder="物料手工编号"></el-input>
          </el-form-item>
          <el-form-item label="入库时间 从" label-width="90px">
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
            label="仓库名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物料编号">
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
            label="物料批次号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="有效期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生产日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="入库日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <i class="el-icon-edit" @click="editBtn(scope.$index, scope.row)"></i>
              <i class="el-icon-delete" @click="deleteBtn(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
    <!-- 修改物料库存 -->
    <el-dialog title="修改物料库存数量" :visible.sync="storeDialog" width="400px" >
      <div class="countBox">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="目前数量">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="修改数量">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
        </el-form>
        <!-- <el-input-number v-model="countInput" :min="1" :max="maxcount" label="描述文字"></el-input-number> -->
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
    editBtn() {
      this.storeDialog = true
    },
    addstoreBtn() {

    },
    deleteBtn(index, item) {
      this.$confirm('是否删除该物料?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
    },
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
    width: 190px;
  }
}
.countBox{
  width: 80%;
  margin: auto;
}
</style>
