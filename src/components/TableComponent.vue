<template>
  <el-table :data="tableData">
    <el-table-column prop="id" label="ID" width="40">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="100">
    </el-table-column>
    <el-table-column prop="age" label="Age" width="100">
    </el-table-column>
    <el-table-column prop="sex" label="Sex" width="100">
    </el-table-column>
    <el-table-column prop="phone" label="Tel" width="200">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      tableData: []
    }
  },
  methods:{
    loadGet(){
      this.$axios.get('http://localhost:9090/list').then(res=>res.data).then(res=>{
        console.log(res)
        this.tableData = res
      })
    }
  },
  beforeMount() {
    this.loadGet()
  }
};

</script>

<style scoped>

</style>