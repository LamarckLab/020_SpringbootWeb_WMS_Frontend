<template>
  <div style="text-align: center;height: 100%;padding: 0px;margin: 0px;">
    <h1 style="font-size: 50px;">{{'Welcome！'+user.name}}</h1>
    <el-descriptions  title="Personal Info Sheet" :column="2" size="40" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-custom"></i>
          Account
        </template>
        {{user.no}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          Telephone
        </template>
        {{user.phone}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          Sex
        </template>
        <el-tag
            :type="user.sex === '1' ? 'primary' : 'danger'"
            disable-transitions><i :class="user.sex==1?'el-icon-male':'el-icon-female'"></i>{{user.sex==1?"Male":"Female"}}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          Role
        </template>
        <el-tag
            type="success"
            disable-transitions>{{user.roleId==0?"Super Administrator":(user.roleId==1?"Administrator":"User")}}</el-tag>

      </el-descriptions-item>
    </el-descriptions>

  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      user:{}
    }
  },
  computed:{

  },
  methods:{
    init(){
      this.user = JSON.parse(sessionStorage.getItem('userInfo'))
    }
  },
  created(){
    this.init()
  }
}
</script>

<style scoped>
.el-descriptions{
  width:90%;

  margin: 0 auto;
  text-align: center;
}
</style>

