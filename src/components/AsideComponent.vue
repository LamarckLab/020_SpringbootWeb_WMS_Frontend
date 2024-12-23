<template>
  <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="/Home"
      style="height: 100%"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
  >
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title" style="font-size: 16px">Home</span>
    </el-menu-item>

    <el-menu-item :index="'/'+item.menuClick" v-for="(item,i) in menu" :key="i" >
      <i :class="item.menuIcon"></i>
      <span slot="title" style="font-size: 16px">{{item.menuName}}</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "AsideComponent",
  data(){
    return{
      menu:[
        {
          menuClick:'admin',
          menuName:'Admin Set',
          menuIcon:'el-icon-s-custom',
        },{
          menuClick:'user',
          menuName:'User Set',
          menuIcon:'el-icon-user-solid',
        }
      ]
    }
  },
  props:{
    isCollapse:Boolean  // 说明这个isCollapse变量是父组件提供的
  }
}
</script>

<style>

</style>