<template>
  <div style="display: flex;line-height: 60px">
    <div>
      <i :class="icon" style="font-size: 25px; cursor: pointer" @click="collapse"></i>  <!--给侧边栏控制按钮添加了点击事件，点击就会触发collapse方法-->
    </div>
    <div style="flex:1; text-align: center; font-size: 26px">
      <span>Welcome to Lamarck's Warehouse Management System</span>
    </div>
  <el-dropdown>
    <i class="el-icon-user-solid" style="font-size: 25px"></i>
    <span>{{userInfo.name}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="toUser">Personal Info</el-dropdown-item>
      <el-dropdown-item @click.native="logOut">Quit</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "HeaderComponent",
    props:{
      icon:String,
      userInfo: Object,
    },
    data(){
      return{
        // icon: 'el-icon-s-fold'
      }
    },
    methods: {
      toUser(){
        console.log('to_user')
      },
      logOut(){
        this.$confirm('Sure to quit?', '', {
          confirmButtonText: 'Quit',  //确认按钮的文字显示
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true, //文字居中显示

        })
            .then(() => {
              this.$message({
                type:'success',
                message:'Quit successfully'
              })
              // 清除 sessionStorage 中的用户信息
              sessionStorage.removeItem("userInfo"); //  当用户退出时, 清除sessionStorage
              this.$router.push("/"); // 返回登录页面
            })
            .catch(() => {
              this.$message({
                type:'info',
                message:'Cancelled'
              })
            })







      },
      collapse(){
        this.$emit('doCollapse')  // 会将这个点击事件，提交给父组件的doCollapse响应
      }
    }
  }
</script>

<style scoped>

</style>