<template>
  <div>
    <div style="margin-bottom: 10px"><!--这部分是搜素框, 里面包含name输入搜索、sex下拉选择、搜索按钮和重置按钮-->
      <el-input v-model="searchName" placeholder="Enter name please" style="width: 200px" suffix-icon="el-icon-search"
                @keyup.enter.native="loadPost"></el-input>  <!--输入框, 定义了提示词、长度、搜索小图标、回车事件, 内部值绑定了searchName变量-->
      <el-select v-model="sex" filterable placeholder="Select sex please" style="margin-left: 5px"
                 @keyup.enter.native="loadPost">  <!--下拉选择框, 定义了提示词、水平偏移、回车事件, 内部值绑定了sex变量-->
        <el-option
            v-for="item in sexes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>  <!--下拉选择框中的选项-->
      </el-select>
      <el-button type="primary" style="margin-left: 10px" @click="loadPost">Search</el-button>  <!--搜索按钮, 定义了：水平偏移量、点击事件-->
      <el-button type="success" @click="resetParam">Reset</el-button>  <!--重置按钮, 定义了：点击事件-->
      <el-button type="warning" style="margin-left: 50px" @click="addUser">New</el-button>
    </div>
    <el-table :data="tableData" :header-cell-style="{background: '#F2F5FC', color: '#555555'}" border>  <!--表格部分，此处定义了表头的背景颜色和字体颜色-->
<!--      下面这部分是表头-->
      <el-table-column prop="id" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="age" label="Age" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="Sex" width="180">
        <template slot-scope="scope">  <!--将性别映射成了彩色标签-->
          <el-tag
              :type="scope.row.sex == '1' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.sex == '1' ? 'Male' : 'Female'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="Tel" width="200">
      </el-table-column>
      <el-table-column prop="roleId" label="Role" width="200">
        <template slot-scope="scope">  <!--将角色类型映射成了彩色标签-->
          <el-tag
              :type="scope.row.roleId == '0' ? 'danger' : (scope.row.roleId == '1' ? 'warning' : 'info')"
              disable-transitions>{{scope.row.roleId == '0' ? 'Super Admin' : (scope.row.roleId == '1' ? 'Admin' : 'User')}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="Operate" width="200">  <!--对角色进行编辑和删除-->
        <el-button type="success" size="small">Edit</el-button>  <!--编辑按钮-->
        <el-button type="danger" size="small">Delete</el-button>  <!--删除按钮-->
      </el-table-column>
    </el-table>
<!--下面这部分是分页的组件-->
    <!--@size-change用于将选定的分页尺寸传给pageSize变量接收-->
    <!--@current-change用于将选定的页码传给pageNum变量接收-->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :current-page="pageNum"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="No">
          <el-col :span="18">
            <el-input v-model="form.no"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Name">
          <el-col :span="18">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Password">
          <el-col :span="18">
            <el-input v-model="form.password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Age">
          <el-col :span="18">
            <el-input v-model="form.age"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">Male</el-radio>
            <el-radio label="2">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Phone">
          <el-col :span="18">
            <el-input v-model="form.phone"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="save">Submit</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      tableData: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      searchName:'',
      sex:'',
      sexes:[{
        value: '1',
        label: 'Male'
      }, {
        value: '2',
        label: 'Female'
      }
      ],
      centerDialogVisible: false,
      form:{
        name:'',
        no:'',
        password:'',
        age:'',
        phone:'',
        sex:'0',
      },
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val;
      this.pageNum = 1;
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
    addUser(){
      this.centerDialogVisible = true
    },
    save(){
      this.$axios
          .post('http://localhost:9090/save', this.form).then((res) => {
            console.log(res)
          });
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
          })  // 这四个参数是前端打包传给后端的内容
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