<!--/App.vue是整个vue工程的根组件，这是在main.js中定义的-->

<template>
  <div id="app">
<!--    <MainComponent></MainComponent>  &lt;!&ndash;引入了名为 IndexComponent 的子组件&ndash;&gt;-->
    <router-view></router-view>
  </div>
</template>

<script>
// import MainComponent from "@/components/MainComponent.vue";  // 引入了 MainComponent.vue 子组件

// export default是JS的语法，用于导出一个对象或者一个模块。里面包含：该组件的名称、引用的子组件、方法和生命周期钩子
export default {
  name: 'App',  // 该组件的名称
  components: {  // 该组件引用的子组件
    // MainComponent
  },
  methods:{  // 该组件的方法
    loadGet(){
      this.$axios.get('http://localhost:9090/list').then(res=>res.data).then(res=>{
        console.log(res)
      })
    },
    loadPost(){
      this.$axios.post('http://localhost:9090/save',{}).then(res=>res.data).then(res=>{
        console.log(res)
      })
    }
  },
  beforeMount() {  // beforeMount指的是：在组件的DOM元素加载到页面之前就触发下面的内容
    // this.loadGet()
    // this.loadPost()
  },
}
</script>

<style>
#app {
  height: 100%;
}
</style>
