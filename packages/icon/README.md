# two-ui icon component

## 安装

```shell
npm install @two-ui/icon
```

## 使用

```javascript
import twoIcon from '@two-ui/icon';

export default {
  components: {
    [twoIcon.name]: twoIcon,
  },
};

```

## 介绍

图标组件

基于字体的图标集，也可以使用使用者的图标在Icon组件中使用

## 演示

<block>
  <h3>基础用法</h3>
  <p>通过 <span>name</span> 属性置顶需要使用的图标，two-ui内置了一套图标库</p>

```html
   <two-icon name="success-filling"></two-icon>
```
</block>

<block>
  <h3>颜色图标</h3>
  <p>通过 <span>color</span> 指定图标的颜色给css颜色一样</p>

```html
<two-icon name="success-filling" color="red"></two-icon>
```
</block>

<block>
  <h3>图标大小</h3>
  <p>通过 <span>size</span> 设置图标的大小，默认单位是 <span>px</span></p>

```html
<two-icon name="success-filling" color="red" size="50"></two-icon>
```
</block>

<block>
  <h3>图片图标</h3>
  <p>在<span>name</span>中传入一个图片url来作为图标</p>

```html
  <two-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"></two-icon>
```
</block>