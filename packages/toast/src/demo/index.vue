<script setup>
  import { Toast } from '../index'

  const ToastShow = () => {
    Toast('提示内容')
  }
</script>

<template>
  <h3>基本使用</h3>
  <div>
    <button @click="ToastShow">显示提示</button>
      <!-- <two-toast message="提示内容"></two-toast> -->
  </div>
</template>

<style>

</style>
