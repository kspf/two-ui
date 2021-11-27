<script>
  import { TwoSwitch } from './../index'
  export default {
    data () {
      return {
        model: false
      }
    },
    components: {
      TwoSwitch
    },
    methods: {
      setModel () {
        this.model = !this.model
      },
      onUpdateValue(){
        if (window.confirm('是否要改变状态')) {
          this.model = !this.model
        }
      }
    }
  }
</script>

<template>
  <h3>基础用法</h3>
  <two-switch v-model="model"></two-switch>
  <h3>禁用状态</h3>
  <two-switch v-model="model" disabled="true"></two-switch>
  <h3>加载中</h3>
  <two-switch v-model="model" loading="true"></two-switch>
  <h3>自定义大小</h3>
  <two-switch v-model="model" size="50"></two-switch>
  <h3>自定义颜色</h3>
  <two-switch v-model="model" active-color="#1989fa"></two-switch>
  <h3>异步改变状态</h3>
  <two-switch :model-value="model" @update:model-value="onUpdateValue"></two-switch>
</template>

<style scoped>
</style>
