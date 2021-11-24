# two-ui switch component

## 安装

```shell
npm install @two-ui/switch
```

## 使用

```javascript
import twoSwitch from '@two-ui/switch';

export default {
  components: {
    [twoSwitch.name]: twoSwitch,
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
  <two-switch v-model="checked" />
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

<block>
  <h3>禁用状态</h3>
  <p>通过 disabled 属性来控制开关的禁用状态 <span>true</span> 表示禁用状态 <span>false</span> 取消禁用状态， 默认状态为 false</p>

```html
  <two-switch v-model="checked" :disabled="disabled" />
```

```javascript
  import { ref } from 'vue';

  export default {
    setup() {
      const checked = ref(true);
      const disabled = ref(true);
      return { checked, disabled };
    },
  };
```
</block>

<block>

  <h3>加载中</h3>
  <p>通过 loading 属性来控制开关的禁用状态 <span>true</span> 表示禁用状态 <span>false</span> 取消禁用状态， 默认状态为 false</p>

```html
  <two-switch v-model="checked" :loading="loading" />
```

```javascript
  import { ref } from 'vue';

  export default {
    setup() {
      const checked = ref(true);
      const loading = ref(true);
      return { checked, loadings };
    },
  };
```

</block>

<block>
  <h3>自定义大小</h3>
  <p>通过 size 属性来控制开关的大小 字符串和数字都可以 默认单位为 <span>px</span></p>

```html
  <two-switch v-model="checked" size="50" />
```

</block>

<block>
  <h3>自定义颜色</h3>
  <p>通过 size 属性来控制开关的颜色</p>

```html
  <two-switch v-model="checked" activeColoe="red" />
```
</block>

<block>
  <h3>异步改变状态</h3>
  <p>通过 size 属性来控制开关的颜色， 通过 <span>:model-value</span> 和 <span>@update:model-value</span> 来 代替 <span>v-model</span></p>

```html
  <two-switch :model-value="checked" @update:model-value="update" />
```

```javascript
import { ref } from 'vue';

  export default {
    setup() {
      const checked = ref(true);
      const update = () => {
        if (window.confirm('是否要改变状态')) {
          checked = !checked
        }
      }
      return { checked, update };
    },
  };
```
</block>