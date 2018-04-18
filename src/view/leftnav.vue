<template>
  <aside class="scroll">
    <el-menu
      :router='true'
      :default-active="$route.path"
      unique-opened
      class="el-menu-vertical-demo"
      background-color="#2c3c54"
      active-text-color="#ffd04b"
      text-color="#fff">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">引导</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>基础资料</span>
        </template>
        <el-menu-item index="/StoreInfo">仓库信息</el-menu-item>
        <el-menu-item index="/unitSetup">计量单位设置</el-menu-item>
        <el-menu-item index="/payType">支付方式</el-menu-item>
        <el-menu-item index="/express">快递公司</el-menu-item>
        <el-menu-item index="/materialInfo">物料信息</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-sold-out"></i>
          <span>采购管理</span>
        </template>
        <el-menu-item index="/chaseOrder">采购订单</el-menu-item>
        <el-menu-item index="/chaseReturn">采购退货</el-menu-item>
        <el-menu-item index="/putIn">进货入库</el-menu-item>
        <el-menu-item index="/detailList">进货入库明细表</el-menu-item>
        <el-menu-item index="/returnStock">退货出库</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>库存管理</span>
        </template>
        <el-menu-item index="/allot">库存调拨</el-menu-item>
        <el-menu-item index="/sureAllot">确认调拨</el-menu-item>
        <el-menu-item index="/checkStock">库存盘点</el-menu-item>
        <el-menu-item index="/burdening">配料</el-menu-item>
        <el-menu-item index="/productsOutput">销售产品出库</el-menu-item>
        <el-menu-item index="/Output">出库</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span>数据查询</span>
        </template>
        <el-menu-item index="/inventoryWarning">查询库存预警</el-menu-item>
        <el-menu-item index="/validWarning">查询库存有限期预警</el-menu-item>
        <el-menu-item index="/stockList">查询库存记录</el-menu-item>
        <el-menu-item index="/allotList">查询调拨记录</el-menu-item>
        <el-menu-item index="/checkList">查询盘点记录</el-menu-item>
        <el-menu-item index="/OutputList">查询出库记录</el-menu-item>
        <el-menu-item index="/putDetailList">查询出库明细记录表</el-menu-item>
      </el-submenu>
    </el-menu>
  </aside>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath)
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath)
      // }
    }
  }
</script>
<style>
aside .el-menu i{
  text-indent: 0;
}
</style>

<style scoped lang="scss">
aside {
  background: #2c3c54;
  width: 280px;
  min-width: 280px;
  height: 100%;
  margin-right: 20px;
  position: relative;
  box-shadow: 2px 2px 10px #b5b4b4;
  padding: 40px 0;
  box-sizing: border-box;
  overflow: auto;
  .el-menu{
    border-right: none;
    text-indent: 50px;
  }
}

</style>
