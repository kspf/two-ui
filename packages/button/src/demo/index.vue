<script>
  import { TwoButton } from '../index'

  export default {
    data () {
      return {
      }
    },
    components: {
      TwoButton
    },
    methods: {
    }
  }
</script>

<template>

  <h3>按钮类型</h3>
  <div>
    <two-button type="primary">主要按钮</two-button>
    <two-button type="success">成功按钮</two-button>
    <two-button>默认按钮</two-button>
    <two-button type="danger">危险按钮</two-button>
    <two-button type="warning">警告按钮</two-button>
  </div>

  <h3>禁用状态</h3>
  <div>
    <two-button :disabled="true">禁用按钮</two-button>
    <two-button :disabled="true" type="success">禁用按钮</two-button>
  </div>

  <h3>极细边框按钮</h3>
  <div>
    <two-button hairline type="primary" plain>极细边框主要按钮</two-button>
    <two-button hairline type="success" plain>极细边框成功按钮</two-button>
  </div>

  <h3>朴素按钮</h3>
  <div>
    <two-button type="primary" plain>主要按钮</two-button>
    <two-button type="success" plain>成功按钮</two-button>
    <two-button type="danger" plain>危险按钮</two-button>
    <two-button type="warning" plain>警告按钮</two-button>
  </div>

  <h3>加载状态</h3>
  <div>
    <two-button :loading="true"></two-button>
    <two-button :loading="true" loading-type="spinner"></two-button>
    <two-button :loading="true" loading-text="加载中的文字就是这个了啊..."></two-button>
  </div>

  <h3>图标按钮</h3>
  <div>
    <two-button icon="https://img.yzcdn.cn/vant/user-active.png"></two-button>
    <two-button icon="https://img.yzcdn.cn/vant/user-active.png">圆形按钮</two-button>
    <two-button icon="https://img.yzcdn.cn/vant/user-active.png" icon-position="right" >图标在右边</two-button>
  </div>

  <h3>按钮尺寸</h3>
  <div>
    <div>
      <two-button size="large" type="primary">大号按钮</two-button>
    </div>
    <two-button size="normal" type="primary">普通按钮</two-button>
    <two-button size="small" type="primary">小型按钮</two-button>
    <two-button size="mini" type="primary">迷你按钮</two-button>
  </div>

  <h3>块级元素</h3>
  <div>
    <two-button block>大号按钮</two-button>
  </div>

  <h3>跳转页面地址</h3>
  <div>
    <two-button url="https://www.baidu.com">url跳转</two-button>
    <two-button to="index">路由跳转</two-button>
  </div>

  <h3>自定义颜色</h3>
  <div>
    <two-button textColor="white" color="red">单色按钮</two-button>
    <two-button textColor="white" color="red" plain hairline>单色按钮</two-button>
    <two-button textColor="white" color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</two-button>
  </div>
</template>

<style>
  .two-button {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .two-button:last-child{
    margin-right: 0;
  }
</style>
