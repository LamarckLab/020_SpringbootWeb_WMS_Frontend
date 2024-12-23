<template>
  <div>
    <div style="margin-bottom: 10px">

      <!--姓名输入搜索框-->
      <el-input v-model="searchName" placeholder="Enter name please" style="width: 200px" suffix-icon="el-icon-search"
                @keyup.enter.native="loadPost"></el-input>

      <!--性别下拉选择框-->
      <el-select v-model="sex" filterable placeholder="Select sex please" style="margin-left: 5px"
                 @keyup.enter.native="loadPost">
        <!--下拉选择框中的选项-->
        <el-option
            v-for="item in sexes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>

      <!--搜索按钮-->
      <el-button type="primary" style="margin-left: 10px" @click="loadPost">Search</el-button>
      <!--重置按钮-->
      <el-button type="success" @click="resetParam">Reset</el-button>
      <!--新增用户按钮-->
      <el-button type="warning" style="margin-left: 50px" @click="addUser">New</el-button>
    </div>

    <!--表格主体部分-->
    <el-table
        :data="tableData"
        :header-cell-style="{background: '#F2F5FC', color: '#555555', textAlign: 'center'}"
        border
        :cell-style="{ textAlign: 'center' }"
    >

      <!--表头-->
      <!--Account-->
      <el-table-column prop="no" label="Account" width="160">
      </el-table-column>
      <!--Name-->
      <el-table-column prop="name" label="Name" width="160">
      </el-table-column>
      <!--Age-->
      <el-table-column prop="age" label="Age" width="160">
      </el-table-column>
      <!--Sex-->
      <el-table-column prop="sex" label="Sex" width="160">
        <!--两种性别分别映射为两种彩色标签-->
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.sex == '1' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.sex == '1' ? 'Male' : 'Female'}}</el-tag>
        </template>
      </el-table-column>
      <!--Tel-->
      <el-table-column prop="phone" label="Tel" width="200">
      </el-table-column>
      <!--Role-->
      <el-table-column prop="roleId" label="Role" width="150">
        <!--三种角色类型分别映射成为三种彩色标签-->
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.roleId == '0' ? 'danger' : (scope.row.roleId == '1' ? 'warning' : 'info')"
              disable-transitions>{{scope.row.roleId == '0' ? 'Super Admin' : (scope.row.roleId == '1' ? 'Admin' : 'User')}}</el-tag>
        </template>
      </el-table-column>

      <!--Operate-->
      <el-table-column prop="operate" label="Operate" width="200">
        <!--这里的插槽标签用于访问此行的内容-->
        <template slot-scope="scope">
          <!--编辑按钮-->
          <el-button type="success" size="small" @click="editUser(scope.row)">Edit</el-button>
          <!--删除按钮--> <!--删除确认提示框-->
          <el-popconfirm title="Delete this user?" @confirm="delUser(scope.row.id)">
            <el-button slot="reference" size="small" type="danger">Delete</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!--分页组件-->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :current-page="pageNum"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>

    <!--点击New按钮后弹出来的表单-->
    <el-dialog
        title="User Information Sheet"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <!--表单中的值绑定到form变量中-->
      <el-form ref="form" :model="form" label-width="80px">
        <!--No输入框-->
        <el-form-item label="Account">
          <el-col :span="18">
            <el-input v-model="form.no"></el-input>
          </el-col>
          <!--Name输入框-->
        </el-form-item>
        <el-form-item label="Name">
          <el-col :span="18">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <!--Password输入框-->
        <el-form-item label="Password">
          <el-col :span="18">
            <el-input v-model="form.password"></el-input>
          </el-col>
        </el-form-item>
        <!--Age输入框-->
        <el-form-item label="Age">
          <el-col :span="18">
            <el-input v-model="form.age"></el-input>
          </el-col>
        </el-form-item>
        <!--Sex选择输入框-->
        <el-form-item label="Sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">Male</el-radio>
            <el-radio label="2">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <!--Phone输入框-->
        <el-form-item label="Phone">
          <el-col :span="18">
            <el-input v-model="form.phone"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <!--表单末端部分-->
      <span slot="footer" class="dialog-footer">
        <!--取消按钮-->
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <!--提交按钮-->
        <el-button type="primary" @click="save">Submit</el-button>
      </span>
    </el-dialog>

    <!--点击Edit按钮后弹出来的表单-->
    <el-dialog
        title="User Information Edit Sheet"
        :visible.sync="centerDialogVisible2"
        width="30%"
        center>
      <!--表单的属性部分-->
      <el-form ref="form" :model="editForm" label-width="80px">
        <!--No输入框-->
        <el-form-item label="Account">
          <el-col :span="18">
            <el-input v-model="editForm.no"></el-input>
          </el-col>
        </el-form-item>
        <!--Name输入框-->
        <el-form-item label="Name">
          <el-col :span="18">
            <el-input v-model="editForm.name"></el-input>
          </el-col>
        </el-form-item>
        <!--Password输入框-->
        <el-form-item label="Password">
          <el-col :span="18">
            <el-input v-model="editForm.password"></el-input>
          </el-col>
        </el-form-item>
        <!--Age输入框-->
        <el-form-item label="Age">
          <el-col :span="18">
            <el-input v-model="editForm.age"></el-input>
          </el-col>
        </el-form-item>
        <!--Sex选择输入框-->
        <el-form-item label="Sex">
          <el-radio-group v-model="editForm.sex">
            <el-radio label="1">Male</el-radio>
            <el-radio label="2">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <!--Phone输入框-->
        <el-form-item label="Phone">
          <el-col :span="18">
            <el-input v-model="editForm.phone"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <!--表单末端部分-->
      <span slot="footer" class="dialog-footer">
        <!--取消按钮-->
        <el-button @click="centerDialogVisible2 = false">Cancel</el-button>
        <!--提交按钮-->
        <el-button type="primary" @click="modUser">Submit</el-button>
  </span>
    </el-dialog>
  </div>
</template>



<script>
export default {
  // 组件名称
  name: "TableComponent",

  // 组件中的数据字段
  data() {
    return {
      tableData: [],
      pageNum: 1,
      pageSize: 50,
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
      centerDialogVisible2: false,
      form:{
        id:'',
        name:'',
        no:'',
        password:'',
        age:'',
        phone:'',
        sex:'0',
        roleId:'2',
      },
      editForm:{
        id:'',
        name:'',
        no:'',
        password:'',
        age:'',
        phone:'',
        sex:'0',
        roleId:'2',
      },
    }
  },

  // 组件中的方法
  methods:{
    // 分页器监听页面尺寸
    handleSizeChange(val) {
      this.pageSize = val;
      this.pageNum = 1;
      this.loadPost();
    },
    // 分页器监听页码
    handleCurrentChange(val) {
      this.pageNum = val;
      this.loadPost();
    },
    // Reset按钮绑定的事件，用于重置参数
    resetParam(){
      this.searchName = '';
      this.sex = '';
    },
    // New按钮绑定的事件，用于弹出新增角色表单
    addUser(){
      this.centerDialogVisible = true;
    },
    // 新增按钮中Submit绑定的事件，用于创建新用户
    save(){
      this.$axios.post('http://localhost:9090/save', this.form);
      this.$message({
        message: 'Submit successfully',
        type: 'success',
      });
      this.centerDialogVisible = false;
      this.loadPost();
    },
    // Edit按钮绑定的事件，用于读取当前行信息，赋值到Edit表单
    editUser(row){
      this.editForm.id = row.id;
      this.editForm.name = row.name;
      this.editForm.no = row.no;
      this.editForm.password = '********';
      this.editForm.sex = row.sex+'';
      this.editForm.age = row.age;
      this.editForm.phone = row.phone;
      this.editForm.roleId = row.roleId;
      this.centerDialogVisible2 = true;
    },
    // Edit表单中Submit按钮绑定的事件，用于修改用户信息
    modUser(){
      this.$axios.post('http://localhost:9090/mod', this.editForm);
      this.$message({
        message: 'Edit successfully',
        type: 'success',
      });
      this.centerDialogVisible2  = false;
      this.loadPost();
    },
    // Delete按钮绑定的事件，用于删除用户
    delUser(id){
      console.log(id);
      this.$axios.get('http://localhost:9090/del?id='+id);
      this.$message({
        type:'success',
        message:'Delete successfully'
      })
    },
    // 分页查询方法
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
            this.tableData = res.data.data;
            this.total = res.data.total;
          });
    },
  },
  // 加载页面时访问的方法
  beforeMount() {
    this.loadPost()
  }
};
</script>



<style>
</style>