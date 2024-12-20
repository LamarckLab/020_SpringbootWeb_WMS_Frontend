<template>
  <div>
    <div style="margin-bottom: 10px"><!--这部分是搜素框, 里面包含name输入搜索、sex下拉选择、搜索按钮和重置按钮-->
      <el-input v-model="searchName" placeholder="Enter name please" style="width: 200px" suffix-icon="el-icon-search"
                @keyup.enter.native="loadPost"></el-input>  <!--定义了 一个输入框-->
      <el-select v-model="sex" filterable placeholder="Select sex please" style="margin-left: 5px"
                 @keyup.enter.native="loadPost">
        <el-option
            v-for="item in sexs"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" style="margin-left: 10px" @click="loadPost">Search</el-button>  <!--定义了一个搜索按钮-->
      <el-button type="success" @click="resetParam">Reset</el-button>  <!--定义了一个重置按钮-->
    </div>
    <el-table :data="tableData" :header-cell-style="{background: '#F2F5FC', color: '#555555'}" border>  <!--设置了header头中的背景颜色和字体颜色-->
<!--      下面这部分是表头-->
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
              :type="scope.row.roleId == '0' ? 'danger' : (scope.row.roleId == '1' ? 'warning' : 'info')"
              disable-transitions>{{scope.row.roleId == '0' ? 'Super Admin' : (scope.row.roleId == '1' ? 'Admin' : 'User')}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="Operate" width="200">
        <el-button type="success" size="small">Edit</el-button>
        <el-button type="danger" size="small">Delete</el-button>
      </el-table-column>
    </el-table>
<!--    下面这部分是分页的组件-->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      tableData: [],
      pageNum: 1,
      pageSize: 12,
      total: 0,
      searchName:'',
      sex:'',
      sexs:[{
        value: '1',
        label: 'Male'
      }, {
        value: '2',
        label: 'Female'
      }
      ]
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val;
      this.loadPost();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.loadPost();
    },
    resetParam(){
      this.searchName = '';
      this.sex = ''
    },
    loadGet(){
      this.$axios.get('http://localhost:9090/list').then(res=>res.data).then(res=>{
        console.log(res)
        this.tableData = res
      })
    },
    loadPost() {
      this.$axios
          .get('http://localhost:9090/listPage', {
            params: {
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              name: this.searchName,
              sex: this.sex,
            },
          })
          .then((res) => {
            this.tableData = res.data.data; // 分页数据
            this.total = res.data.total;   // 总条数
          });
    },
  },
  beforeMount() {
    // this.loadGet()
    this.loadPost()
  }
};

</script>

<style scoped>

</style>