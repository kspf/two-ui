<script setup>
  import { ref } from 'vue'
  import TwoIcon from '../index'
  import Icons from './../iconfonts/iconfont.json'
</script>

<template>
  <h3>基础用法</h3>
  <div>
    <two-icon name="success-filling"></two-icon>
  </div>

  <h3>颜色图标</h3>
  <div>
    <two-icon name="success-filling" color="red"></two-icon>
  </div>

  <h3>图标大小</h3>
  <div>
    <two-icon name="success-filling" color="red" size="50"></two-icon>
  </div>

  <h3>图片图标</h3>
  <div>
    <two-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"></two-icon>
    <two-icon name="success-filling" class-prefix="con"></two-icon>
  </div>


  <h3>全部图标</h3>
  <div class="icon_content">
      <div v-for="(item) in Icons.glyphs" :key="item.index">
        <two-icon :name="item.name"></two-icon>
        <p>{{ item.name }}</p>
      </div>
  </div>
  
</template>

<style scoped>
  .icon_content {
    display: flex;
    flex-wrap: wrap;
  }
  .icon_content > div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 190px;
    height: 100px;
    text-align: center;
  }
  .icon_content > p{
    white-space: normal;
  }
</style>
