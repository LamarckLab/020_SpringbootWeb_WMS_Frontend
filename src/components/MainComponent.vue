<!--App.vue中<template>中只嵌入了这个MainComponent，所以实质上加载App.vue,是加载这个MainComponent-->
<template>
  <el-container style="height: 100%; border: 1px solid #eee; margin-top: -9px">  <!--整个页面中最大的容器-->
    <el-aside :width="aside_width" style="background-color: rgb(238, 241, 246); margin-left: -9px">  <!--页面中的左侧导航栏-->
      <AsideComponent :isCollapse="isCollapse"></AsideComponent>  <!--将isCollapse变量提交给子组件-->
    </el-aside>

    <el-container style="height: 100%">  <!--页面右侧的大容器-->
      <el-header style="text-align: right; font-size: 12px; border-bottom: darkgray 3px solid">  <!--页面右侧的header-->
        <header-component @doCollapse="doCollapse" :icon="icon"></header-component>  <!--当header上传doCollapse响应，此处会执行doCollapse方法-->
      </el-header>

      <el-main style="height: 100%">  <!--页面右侧的数据展示部分-->
        <TableComponent></TableComponent>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>

</style>

<script>
  import AsideComponent from "@/components/AsideComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import TableComponent from "@/components/TableComponent.vue";

  export default {
    name: "MainComponent",
    components: {TableComponent, HeaderComponent, AsideComponent},
    data(){
      return{
        isCollapse:false,
        aside_width:'200px',
        icon:'el-icon-s-fold'
      }
    },
    methods:{
      doCollapse(){  // 当doCollapse方法被执行，会将isCollapse的值取反
        this.isCollapse = !this.isCollapse
        if(!this.isCollapse){
          this.aside_width = '200px'
          this.icon = 'el-icon-s-fold'
        }
        else{
          this.aside_width = '64px'
          this.icon = 'el-icon-s-unfold'
        }
      }
  },
  };
</script>