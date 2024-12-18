<template>
  <div style="display: flex;line-height: 60px">
    <div>
      <i class="el-icon-s-fold" style="font-size: 25px; cursor: pointer" @click="collapse"></i>
    </div>
    <div style="flex:1; text-align: center; font-size: 26px">
      <span>Welcome to Lamarck's Warehouse Management System</span>
    </div>
  <el-dropdown>
    <i class="el-icon-user-solid" style="font-size: 25px"></i>
    <span>拉马克</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="toUser">个人中心</el-dropdown-item>
      <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "HeaderComponent",
    methods: {
      toUser(){
        console.log('to_user')
      },
      logOut(){
        console.log('logout')
      },
      collapse(){
        this.$emit('doCollapse')
      }
    }
  }
</script>

<style scoped>

</style>