<script>
  export default {
    name: "TableComponent",
    data() {
      const item = {
        date: '2002-05-10',
        name: 'Lamarck',
        address: 'Institute of Biophysics'
      };
      return {
        tableData: Array(15).fill(item)
      }
    }
  };

</script>

<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="Date" width="140">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="120">
    </el-table-column>
    <el-table-column prop="address" label="Address">
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>