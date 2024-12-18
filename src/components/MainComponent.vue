<template>
  <el-container style="height: 100%; border: 1px solid #eee; margin-top: -9px">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100%; margin-left: -9px">
      <AsideComponent></AsideComponent>
    </el-aside>

    <el-container style="height: 100%">
      <el-header style="text-align: right; font-size: 12px; border-bottom: darkgray 3px solid">
        <header-component @doCollapse="doCollapse"></header-component>
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
    methods:{
      doCollapse(){
        console.log(1234)
      }
  }
  };
</script>