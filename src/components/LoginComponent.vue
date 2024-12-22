<template>
  <div class="loginBody">
    <div class="loginDiv">
      <div class="login-content">
        <h1 class="login-title">Login</h1>

        <!--登录页面的表单-->
        <el-form :model="loginForm" label-width="100px"
                 :rules="rules" ref="loginForm">

          <!--ID输入框-->
          <el-form-item label="ID" prop="no">
            <el-input style="width: 200px" type="text" v-model="loginForm.no"
                      autocomplete="off" size="small"></el-input>
          </el-form-item>

          <!--Password输入框-->
          <el-form-item label="Password" prop="password">
            <el-input style="width: 200px" type="password" v-model="loginForm.password"
                      show-password autocomplete="off" size="small" @keyup.enter.native="confirm"></el-input>
          </el-form-item>

          <!--提交按钮-->
          <el-form-item style="margin-left: 60px">
            <el-button type="primary" @click="confirm" :disabled="confirm_disabled">Submit</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data(){
    return{
      confirm_disabled:false,
      loginForm:{
        no:'',
        password:''
      },
      rules:{
        no: [
          { required: true, message: 'Enter your ID number please', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Enter your password please', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    // 点击Submit按钮，执行confirm方法
    confirm() {
      // 对表单进行检验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 校验通过, 就不允许重复提交
          this.confirm_disabled = true;
          // 向Controller中的login接口发送请求
          axios.post("http://localhost:9090/login", {
                no: this.loginForm.no,
                password: this.loginForm.password,
              })
              .then((response) => {
                const res = response.data;
                if (res.success) {
                  this.$message.success(res.message);
                  // 跳转到 /main 页面
                  this.$router.push("/main");
                } else {
                  this.$message.error(res.message);
                  this.confirm_disabled = false;
                }
              })
              .catch((error) => {
                console.error(error);
                this.$message.error("Server error. Please try again later.");
                this.confirm_disabled = false;
              });
        } else {
          this.$message.error("Please complete the form");
        }
      });
    },
  }
}
</script>

<style scoped>
.loginBody {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #B3C0D1;
}
.loginDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -250px;
  width: 450px;
  height: 330px;
  background: #fff;
  border-radius: 5%;

}
.login-title {
  margin: 20px 0;
  text-align: center;
}
.login-content {
  width: 400px;
  height: 250px;
  position: absolute;
  top: 25px;
  left: 25px;
}

</style>