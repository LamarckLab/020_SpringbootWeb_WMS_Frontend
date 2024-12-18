<template>
  <el-container style="height: 100%; border: 1px solid #eee; margin-top: -9px">
    <el-aside :width="aside_width" style="background-color: rgb(238, 241, 246); height: 100%; margin-left: -9px">
      <AsideComponent :isCollapse="isCollapse"></AsideComponent>
    </el-aside>

    <el-container style="height: 100%">
      <el-header style="text-align: right; font-size: 12px; border-bottom: darkgray 3px solid">
        <header-component @doCollapse="doCollapse" :icon="icon"></header-component>
      </el-header>

      <el-main style="height: 100%">
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
      doCollapse(){
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