<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="head">
        <el-button type="primary" size="small" class="addbtn" @click="addBtn">新增仓库</el-button>
      </div>
      <div class="main-table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="date"
            label="仓库编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="仓库名称">
          </el-table-column>
          <el-table-column
            prop="address"
            label="会所名称">
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

    <!-- 弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="storeDialog" width="600px">
      <div class="form_box">
        <el-form ref="form" :model="form" label-width="80px" label-position='left'>
          <el-form-item label="仓库名称">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="仓库备注">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="绑定会所">
            <el-select v-model="form.name" placeholder="绑定会所" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="storeDialog = false" size="small">取 消</el-button>
        <el-button type="primary" @click="addstoreBtn" size="small">确 定</el-button>
        <!-- <el-button type="primary" @click="editstoreBtn" size="small" v-else>保存修改</el-button> -->
      </span>
    </el-dialog>
  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      organ: [
        {
          id: 1,
          name: '阿萨德'
        },
        {
          id: 2,
          name: '发广告'
        }
      ],
      form: {
        name: '',
        id: ''
      },
      dialogTitle: '',
      storeDialog: false
    }
  },
  methods: {
    addBtn() {
      this.storeDialog = true
      this.dialogTitle = '新增仓库'
    },
    editBtn() {
      this.storeDialog = true
    },
    deleteBtn(index, item) {
      this.$confirm('是否删除该仓库?', '提示', {
        type: 'warning'
      }).then(() => {
      }).catch(() => {
      })
    },
    addstoreBtn() {
      this.storeDialog = false
    }
  }
}
</script>

<style scoped lang="scss">

.main-table{
  width: 60%;
}
.form_box{
  width: 300px;
  margin: auto;
}
</style>
