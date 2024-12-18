<script>
  export default {
    name: "TableComponent",
    data() {
      const item = {
        date: '2002-05-10',
        name: '拉马克',
        address: '北京市朝阳区大屯路'
      };
      return {
        tableData: Array(15).fill(item)
      }
    }
  };

</script>

<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期" width="140">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>