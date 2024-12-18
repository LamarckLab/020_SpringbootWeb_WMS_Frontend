<template>
  <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="/Home"
      style="height: 100vh"
      :collapse="isCollapse"
      :collapse-transition="false"
  >
    <el-menu-item index="/Home">
      <i class="el-icon-s-home"></i>
      <span slot="title" style="font-size: 16px">Home</span>
    </el-menu-item>

    <el-menu-item index="/One">
      <i class="el-icon-s-promotion"></i>
      <span slot="title" style="font-size: 16px">Option One</span>
    </el-menu-item>

    <el-menu-item index="/Two">
      <i class="el-icon-s-data"></i>
      <span slot="title" style="font-size: 16px">Option Two</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "AsideComponent",
  data(){
    return{
    }
  },
  props:{
    isCollapse:Boolean
  }
}
</script>

<style>

</style>