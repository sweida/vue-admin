<template>
  <header>
    <div class="logo"><img src="../assets/logo.png" alt="">后台管理系统</div>
    <div class="nav">
      <div class="right-nav">
        <!-- 通知 -->
        <div class="bell" @click="tip=!tip">
            <i class="el-icon-bell"></i>
            <span class="num">2</span>
        </div>
        <!-- 通知提示 -->
        <div class="tip" v-if="tip">
        	<div class="tip-top"></div>
          <p>这是通知提示</p>
        </div>

        <el-menu
          :router="true"
          :default-active="$route.path"
          class="el-menu-demo2"
          mode="horizontal"
          background-color="#253752"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu  class="user-nav" index="">
            <template slot="title" >
              <img :src="admin.img" alt="" class="userimg">
              <span class="admin-name">{{admin.name}}</span>
            </template>
            <el-menu-item index="/message">账号信息</el-menu-item>
            <el-menu-item index="/password">修改密码</el-menu-item>
            <el-menu-item index="" @click.native="logout">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      tip: '',
      admin: {
        id: 'admin',
        name: '超级管理员',
        region: '超级管理员',
        img: 'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
        password: '123456'
      }
    }
  },
  methods: {
    logout: function () {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      }).then(() => {
        this.$router.push('/login')
      }).catch(() => {
      })
    }
  }
}
</script>

<style>
header .el-menu--horizontal .el-submenu>.el-menu{
  top:60px;
  border-radius:0;
}
header .el-submenu .el-menu-item{
  min-width: 150px;
}
header .el-menu-demo2 .el-submenu__title{
  color: #fff !important;
  border-bottom-color:#3a4354 !important;
}
</style>

<style scoped lang="scss">
header{
  display: flex;
  height: 60px;
  background: #253752;
  .nav{
    display: flex;
    justify-content: flex-end;
    flex:1
  }
  .logo{
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size: 22px;
    img{
      width: 34px;
      margin-right: 15px;
    }
  }
}

.el-menu-demo li{
  width:100px;
  text-align: center;
}
.right-nav{
  display: flex;
  margin-right: 30px;
  img{
    width: 42px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .tip{
    width: 300px;
    height: 150px;
    padding: 20px;
    background: #475368;
    position: absolute;
    top: 65px;
    z-index: 100;
    right: 205px;
    color: #fff;
    font-size: 14px;
  .tip-top{
    position: absolute;
    right: 20px;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 15px solid #475368;
  }
  }
  .bell{
    width: 60px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
  .num{
      border:0;
      background: red;
      width: 18px;
      height: 18px;
      line-height: 18px;
      border-radius: 50%;
      text-align: center;
      font-size: 12px;
      color: #fff;
      position: absolute;
      right: 8px;
      top: 12px;
  }
  .el-icon-bell{
      color: #fff;
      font-size: 22px;
  }
  }
}
</style>
