<template>
  <div id="app">  <!--根节点，它对应于 main.js 中通过 #app 进行挂载的 DOM 节点-->
    <IndexComponent></IndexComponent>  <!--引入了名为 IndexComponent 的子组件-->
  </div>
</template>

<script>
import IndexComponent from "@/components/IndexComponent.vue";  // 引入了 IndexComponent.vue 子组件

export default {
  name: 'App',
  components: {
    IndexComponent
  }
}
</script>

<style>
</style>
