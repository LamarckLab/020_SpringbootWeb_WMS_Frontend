<template>
  <el-table :data="tableData">
    <el-table-column prop="id" label="ID" width="80">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="180">
    </el-table-column>
    <el-table-column prop="age" label="Age" width="180">
    </el-table-column>
    <el-table-column prop="sex" label="Sex" width="180">
      <template slot-scope="scope">
        <el-tag
            :type="scope.row.sex == '1' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.sex == '1' ? 'Male' : 'Female'}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="phone" label="Tel" width="200">
    </el-table-column>
    <el-table-column prop="roleId" label="Role" width="200">
      <template slot-scope="scope">
        <el-tag
            :type="scope.row.roleId == '0' ? 'danger' : 'info'"
            disable-transitions>{{scope.row.roleId == '0' ? 'Administrator' : 'User'}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="operate" label="Operate" width="200">
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