<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100%">
      <AsideComponent></AsideComponent>
    </el-aside>

    <el-container style="height: 100%">
      <el-header style="text-align: right; font-size: 12px">
        <header-component></header-component>
      </el-header>

      <el-main style="height: 100%">
        <TableComponent></TableComponent>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  padding: 10px;
}
.el-main{
  padding: 20px;
}
.el-aside {
  color: #333;
}
</style>

<script>
  import AsideComponent from "@/components/AsideComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import TableComponent from "@/components/TableComponent.vue";

  export default {
    name: "MainComponent",
    components: {TableComponent, HeaderComponent, AsideComponent},
    // data() {
    //   const item = {
    //     date: '2002-05-10',
    //     name: '拉马克',
    //     address: '北京市朝阳区大屯路'
    //   };
    //   return {
    //     tableData: Array(15).fill(item)
    //   }
    // }
  };
</script>