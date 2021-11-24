import { PropType } from 'vue'
import { createNamespace } from '@two-ui/base'

// 导入样式文件
import './../style/index.scss'

const [createComponent, bem] = createNamespace('button')

// 大 ｜ 小 ｜ 迷你
type sizeType = 'large' | 'small' | 'mini' | 'normal'
// “主要”|“成功”|“警告”|“危险”|“默认”
type typeType = 'primary' | 'success' | 'warning' | 'danger' | 'default'
// 按钮位置 左 ｜ 右
type iconPositionType = 'left' | 'right'

// 组件的Props
const buttonProps = {
  // 大小
  size: {
    type: String as PropType<sizeType>,
    default: 'normal'
  },
  // 按钮类型
  type: {
    type: String as PropType<typeType>,
    default: 'default'
  },
  // 按钮文字
  text: {
    type: String
  },
  // 按钮颜色，支持传入 linear-gradient 渐变色
  color: {
    type: String
  },
  // 左侧图标名称或图片链接
  icon: {
    type: String
  },
  // 图标类名前缀，等同于 Icon 组件的 class-prefix 属性 类名前缀，用于使用自定义图标
  iconPrefix: {
    type: String,
    default: 'two-icon'
  },
  // 图标展示位置，可选值为 right | left
  iconPosition: {
    type: String as PropType<iconPositionType>,
    default: 'left'
  },
  // 按钮根节点的 HTML 标签
  tag: {
    // eslint-disable-next-line no-undef
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  },
  // 原生 button 标签的 type 属性
  nativeType: {
    type: String,
    default: 'button'
  },
  // 是否是块级元素
  block: {
    type: Boolean,
    default: false
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否使用0.5px边框
  hairline: {
    type: Boolean,
    default: false
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  },
  // 加载状态提示文字
  loadingText: {},
  // 加载图标类型，可选值为 spinner circular
  loadingType: {},
  // 加载图标大小，默认单位为 px
  loadingSize: {},
  // 点击后跳转的链接地址
  url: {},
  // 点击后跳转的目标路由对象
  to: {},
  // 是否在跳转时替换当前页面历史
  replace: {}
}

export default createComponent({
  props: {
    ...buttonProps
  },
  setup (props, { emit, slots }) {
    const renderIcon = () => {
      return <span>loading</span>
    }
    const renderContent = () => {
      return <div class={bem('content')}>
        {props.loading && renderIcon()}
        {slots.default && slots.default()}
      </div>
    }

    return () => {
      // 使用传入的html标记
      const { tag, nativeType, type, size, block } = props
      return (<tag
        type={nativeType} class={[bem(), bem(type), bem(size)]} disabled={props.disabled}>
      {renderContent()}
    </tag>)
    }
  }
})
