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

用于在打开和关闭的状态切换

## 演示

<block>
  <h3>基础用法</h3>
  <p>通过 <span>v-model</span> 绑定开关的状态， <span>true</span> 表示开， <span>false</span> 表示关</p>
```html
  <two-button v-model="checked" />
```

```javascript
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
};
```

</block>