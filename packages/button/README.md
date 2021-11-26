# two-ui button component

## 安装

```shell
npm install @two-ui/button
```

## 使用

```javascript
import twoButton from '@two-ui/button';

export default {
  components: {
    [twoButton.name]: twoButton,
  },
};

```

## 介绍

按钮触发一个操作，譬如提交表单

## 演示

<block>
  <h3>基础用法</h3>
  <p>通过 使用<span>type</span>属性来控制按钮的主题 <span>primary<span> 主要按钮 <span>success<span> 成功按钮 <span>danger<span> 危险按钮 <span>warning<span> 警告按钮. 不指定 <span>type</span>属性的话为 <span>default</span></p>

```html
  <two-button type="primary">主要按钮</two-button>
  <two-button type="success">成功按钮</two-button>
  <two-button>默认按钮</two-button>
  <two-button type="danger">危险按钮</two-button>
  <two-button type="warning">警告按钮</two-button>
```
</block>

<block>
  <h3>禁用状态</h3>
  <p>通过 使用<span>type</span>属性来控制按钮的禁用状态，默认为不禁用状态</p>

```html
  <two-button disabled>主要按钮</two-button>
  <two-button type="success" disabled>成功按钮</two-button>
```
</block>

<block>
  <h3>极细边框按钮</h3>
  <p>通过 使用<span>hairline</span>属性来控制按钮来设置极细边框</p>

```html
  <two-button hairline type="primary" plain>极细边框主要按钮</two-button>
  <two-button hairline type="success" plain>极细边框成功按钮</two-button>
```
</block>

<block>
  <h3>朴素按钮</h3>
  <p>通过 使用<span>plain</span>属性来控制按钮来设置为朴素按钮，朴素按钮边框和文字颜色背景颜色为白色</p>

```html
  <two-button type="primary" plain>主要按钮</two-button>
  <two-button type="success" plain>成功按钮</two-button>
  <two-button type="danger" plain>危险按钮</two-button>
  <two-button type="warning" plain>警告按钮</two-button>
```
</block>

<block>
  <h3>加载状态</h3>
  <p>通过 使用<span>loading</span>属性来控制按钮loading状态，<span>loading-text</span>属性设置加载中的文字</p>

```html
  <two-button :loading="true"></two-button>
  <two-button :loading="true" loading-type="spinner"></two-button>
  <two-button :loading="true" loading-text="加载中的文字就是这个了啊..."></two-button>
```
</block>

<block>
  <h3>图标按钮</h3>
  <p>通过 使用<span>icon</span>属性设置按钮的图标，<span>icon-postiton</span>设置按钮位置 有两个值<span>left | right</span></p>

```html
 <two-button icon="https://img.yzcdn.cn/vant/user-active.png"></two-button>
  <two-button icon="https://img.yzcdn.cn/vant/user-active.png">圆形按钮</two-button>
  <two-button icon="https://img.yzcdn.cn/vant/user-active.png" icon-position="right" >图标在右边</two-button>
```
</block>

<block>
  <h3>按钮尺寸</h3>
  <p>通过 使用<span>size</span>属性设置按钮的大小， 可选值为 
  <span>large</span>大号按钮<span>normal</span>普通按钮<span>small</span>小型按钮<span>mini</span>迷你按钮</p>

```html
  <two-button size="large" type="primary">大号按钮</two-button>
  <two-button size="normal" type="primary">普通按钮</two-button>
  <two-button size="small" type="primary">小型按钮</two-button>
  <two-button size="mini" type="primary">迷你按钮</two-button>
```
</block>

<block>
  <h3>块级元素</h3>
  <p>通过 使用<span>block</span>属性设置按钮为块级元素，默认是<span>inline-block</span></p>

```html
  <two-button block>大号按钮</two-button>
```
</block>

<block>
  <h3>跳转页面地址</h3>
  <p>通过 使用<span>url</span>和<span>to</span>来设置目标页面地址，<span>url</span>属性是 <span>location.href</span>跳转的，<span>to</span>属性是用<span>vue-route</span>对象来跳转的，<span>to</span>为跳转的路由对象</p>

```html
  <two-button url="https://www.baidu.com">url跳转</two-button>
  <two-button to="index">路由跳转</two-button>
```
</block>

<block>
  <h3>自定义颜色</h3>
  <p>通过 使用<span>color</span>属性来设置自定义颜色，可以设置渐变色给css设置背景颜色一致，<span>textColor</span>属性来控制文字颜色</p>

```html
  <two-button textColor="white" color="red">单色按钮</two-button>
  <two-button textColor="white" color="red" plain hairline>单色按钮</two-button>
  <two-button textColor="white" color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</two-button>
```
</block>