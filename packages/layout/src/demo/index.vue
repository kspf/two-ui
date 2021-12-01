<script setup>
  import { TwoRow, TwoCol } from '../index'
</script>

<template>
  <h3>基本使用</h3>
  <div>
     <two-row>
       <two-col v-for="item in 4" :key="item" :span="6">
            span 6
       </two-col>
       <two-col offset="9" span="9">
          span 9; offset 9
       </two-col>
     </two-row>
  </div>

  <h3>对齐方式</h3>
  <div>
      <two-row justify="center">
        <two-col v-for="item in 4" :key="item" :span="2">
          就这
        </two-col>
      </two-row>

      <two-row justify="end">
        <two-col v-for="item in 4" :key="item" :span="2">
          就这
        </two-col>
      </two-row>

      <two-row justify="space-between">
        <two-col v-for="item in 4" :key="item" :span="2">
          就这
        </two-col>
      </two-row>

      <two-row justify="space-around">
        <two-col v-for="item in 4" :key="item" :span="2">
          就这
        </two-col>
      </two-row>
  </div>

  <h3>间距</h3>
  <div>
      <two-row gutter="20">
        <two-col v-for="item in 4"  :key="item" :span="6">就这</two-col>
      </two-row>
  </div>
</template>

<style scoped>
.two-col {
  color: white;
  background-clip: content-box;
  background-color: red;
  /* font-size: 12px; */
  text-align: center;
}
.two-col:nth-child(odd) {
  background-color: blue;
}
</style>
