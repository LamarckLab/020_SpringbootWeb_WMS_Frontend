<template>
  <div>
  <el-dropdown>
    <i class="el-icon-user-solid">
    </i><span>拉马克</span>
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
      }
    }
  }
</script>

<style scoped>

</style>