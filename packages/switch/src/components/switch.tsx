import { createNamespace, toCssCompany } from '@two-ui/base'
import './../style/index.scss'

const [createComponent, bem] = createNamespace('switch')
const switchProps = {
  // v-model传递过来的值
  modelValue: {
    type: null as any,
    default: false
  },
  // 选中的时候的值
  activeValue: {
    type: null as any,
    default: true
  },
  // 没有选中的时候的值
  inactiveValue: {
    type: null as any,
    default: false
  },
  // 加载中状态
  loading: {
    type: Boolean,
    default: false
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 大小
  size: {
    type: [String, Number]
  },
  // 选中状态的颜色
  activeColor: {
    type: String
  },
  // 未选中的颜色
  inactiveColor: {
    type: String
  }
}

export default createComponent({
  props: {
    ...switchProps
  },

  emits: ['change', 'update:modelValue'],
  setup (props, { slots, attrs, emit }) {
    // 选中状态
    const isChecked = () => props.modelValue === props.activeValue

    /**
     * @name handleSwitchClick
     * @description Switch 组件点击事件
     */
    const handleSwitchClick = () => {
      if (props.disabled || props.loading) {
        return
      }
      const newValue = isChecked() ? props.inactiveValue : props.activeValue
      emit('update:modelValue', newValue)
      emit('change', newValue)
    }

    const renderLoading = () => {
      if (props.loading) {
        return '加'
      }
      return ''
    }

    const calcStyle = (checked: boolean) => {
      let style = ''
      if (props.size) {
        style += `font-size: ${toCssCompany(props.size)};`
      }

      if (checked && props.activeColor) {
        style += `background-color: ${props.activeColor};`
      }
      return style
    }

    return () => {
      const checked = isChecked()
      const { loading, disabled } = props

      return <div
        class={bem({
          on: checked,
          loading,
          disabled
        })}
        style={calcStyle(checked)}
        onClick={handleSwitchClick}
      >
        <div class={bem('spot')}>
          {renderLoading()}
        </div>
      </div>
    }
  }
})
