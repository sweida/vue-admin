<template>
  <main>
    <header class="main-title">{{$route.name}}</header>
    <section class="main-content scroll">
      <div class="topmain">
        <el-form ref="form" :model="form" label-width="70px" label-position="left">
          <el-form-item label="物料类型">
            <el-select v-model="form.name" placeholder="选择物料类型" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="系统编号">
            <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
          </el-form-item>
          <el-form-item label="手工编号">
            <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium" placeholder="物料名称"></el-input>
          </el-form-item>
          <el-button type="primary" size="small" class="searchBtn">查　询</el-button>
        </el-form>
      </div>
      <div class="head">
        <el-button type="primary" size="small" class="addbtn" @click="addBtn">新增物料</el-button>
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
            label="系统编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手工编号">
          </el-table-column>
          <el-table-column
            prop="name"
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
            label="有效期预警天数">
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存下限">
          </el-table-column>
          <el-table-column
            prop="address"
            label="类型">
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
    <el-dialog :title="dialogTitle" :visible.sync="unitDialog" width="1000px">
      <div class="form_box">
        <el-form ref="form" :model="form" label-width="90px" label-position='left'>
          <el-form-item label="手工编号">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="物料规格">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="调拨单位">
            <el-select v-model="form.name" placeholder="绑定会所" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-checkbox v-model="form.checked">是否为销售单位</el-checkbox>
          </el-form-item>
          <el-form-item label="消耗单位">
            <el-select v-model="form.name" placeholder="绑定会所" size="medium">
              <el-option
                v-for="item in organ"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-checkbox v-model="form.checked">是否为销售单位</el-checkbox>
          </el-form-item>
          <el-form-item label="单位兑换比">
            <el-input v-model="form.name" size="medium" placeholder="调拨与消耗单位兑换比"></el-input>
            <span class="red">1个调拨单位的物料可以兑换多少消耗单位的物料 例如L：mL = 1000</span>
          </el-form-item>
          <el-form-item label="物料类型" class="radioBox">
            <el-radio-group v-model="form.radio">
              <el-radio label="护理配料"></el-radio>
              <el-radio label="销售原料"></el-radio>
              <el-radio label="两者皆宜"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="预警天数">
            <el-input v-model="form.name" size="medium" placeholder="调拨与消耗单位兑换比"></el-input>
          </el-form-item>
          <el-form-item label="库存下限">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.name" size="medium"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="unitDialog = false" size="small">取 消</el-button>
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
        address: '上海市普陀'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀'
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
        id: '',
        checked: '',
        radio: ''
      },
      dialogTitle: '',
      unitDialog: false
    }
  },
  methods: {
    addBtn() {
      this.unitDialog = true
      this.dialogTitle = '新增物料'
    },
    editBtn() {
      this.unitDialog = true
      this.dialogTitle = '修改物料'
    },
    deleteBtn(index, item) {
      this.$confirm('是否删除该物料?', '提示', {
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
.topmain{
  margin-bottom: 20px;
  .el-form-item{
    width:290px;
  }
}
.main-table{
  width: 100%;
}
.form_box{
  width: 820px;
  margin: auto;
  .el-form{
    display: flex;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
    .el-input{
      width:220px;
      margin-right: 50px;
    }
    .el-select{
      margin-right: 50px;
    }
    .radioBox{
      width: 100%;
    }
  }
}
</style>
