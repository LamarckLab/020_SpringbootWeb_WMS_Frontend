<template>
  <div id="app">  <!--根节点，它对应于 main.js 中通过 #app 进行挂载的 DOM 节点-->
    <MainComponent></MainComponent>  <!--引入了名为 IndexComponent 的子组件-->
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue";  // 引入了 MainComponent.vue 子组件

export default {
  name: 'App',
  components: {
    MainComponent
  },
  methods:{
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
  beforeMount() {
    // this.loadGet()
    this.loadPost()
  },
}
</script>

<style>
#app {
  height: 100%;
}
</style>
