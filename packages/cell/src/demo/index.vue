<script setup>
  import { TwoCell, TwoCellGroup } from '../index'
</script>

<template>
  <h3>基本使用</h3>
  <div>
      <two-cell title="这是title" value="内容" ></two-cell>
  </div>

  <h3>带箭头的</h3>
  <div>
     <TwoCellGroup title="分组一">
        <two-cell title="这是title" is-link value="内容" />
        <two-cell title="这是title" is-link arrow-direction="down" value="内容" />
        <two-cell title="这是title" is-link arrow-direction="up-bold" value="内容" />
        <two-cell title="这是title" is-link >
          <template #rightIcon>
            这是自定义的图标
          </template>
        </two-cell>
      </TwoCellGroup>
  </div>

  <h3>路由跳转</h3>
  <div>
     <TwoCellGroup title="分组一">
        <two-cell title="这是title" is-link value="页面跳转" />
        <two-cell title="这是title" is-link value="路由跳转" />
      </TwoCellGroup>
  </div>

  <h3>分组标题</h3>
  <div>
    <TwoCellGroup title="分组一">
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
    </TwoCellGroup>
    <TwoCellGroup title="分组二">
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
    </TwoCellGroup>
  </div>

  <h3>卡片风格</h3>
  <div>
    <TwoCellGroup title="分组一" inset>
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
      <two-cell title="这是title" value="内容" />
    </TwoCellGroup>
  </div>
</template>

<style scoped>
</style>

<style>
  @import "@two-ui/icon/dist/esm/index.css";
  body {
    background: #f7f8fa;
    padding-bottom: 100px;
  }
</style>
