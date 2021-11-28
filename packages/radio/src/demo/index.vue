<script setup>
  import { ref } from 'vue'
  import { TwoRadio, TwoRadioGroup } from '../index'
  const radio = ref('2')
  const radio2 = ref('6')
  const handelClick = () => {
    radio2.value = '4'
  }
</script>

<template>
 
  <TwoRadioGroup v-model="radio">
    <two-radio value="1" disabled>单选框1</two-radio>
    <two-radio value="2">单选框2</two-radio>
    <two-radio value="3">单选框3</two-radio>
  </TwoRadioGroup>

  <two-radio value="4" v-model="radio2">单选框4</two-radio>
  <two-radio value="5" v-model="radio2">单选框5</two-radio>
  <two-radio value="6" v-model="radio2">单选框6</two-radio>

  <button @click="handelClick">修改为6</button>
</template>

<style scoped>
</style>
