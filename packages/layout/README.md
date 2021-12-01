# two-ui layout component

## 安装

```shell
npm install @two-ui/layout
```

## 使用

```javascript
import twoLayout from '@two-ui/layout';

export default {
  components: {
    [twoLayout.name]: twoLayout,
  },
};

```

## 介绍

这是 layout 组件

## 演示

<block>
  <h3>基础用法</h3>
  <p></p>

```html
    <two-row>
      <two-col v-for="item in 4" :key="item" :span="6">
        span 6
      </two-col>
      <two-col offset="9" span="9">
        span 9; offset 9
      </two-col>
    </two-row>
```
</block>

<block>
  <h3>对齐方式</h3>
  <p></p>

```html
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
```
</block>

<block>
  <h3>间距</h3>
  <p></p>

```html
    <two-row gutter="20">
      <two-col v-for="item in 4"  :key="item" :span="6">就这</two-col>
    </two-row>
```
</block>