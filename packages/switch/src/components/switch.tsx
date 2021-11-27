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

export const TwoSwitch = createComponent({
  props: {
    ...switchProps
  },

  emits: ['change', 'update:modelValue'],
  setup (props, { emit }) {
    // 选中状态
    const isChecked = () => props.modelValue === props.activeValue

    /**
     * @name handleSwitchClick
     * @description Switch 组件点击事件
     */
    const handleSwitchClick = () => {
      const { disabled, loading, inactiveValue, activeValue } = props
      if (disabled || loading) {
        return
      }
      const newValue = isChecked() ? inactiveValue : activeValue
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
      const { size, activeColor } = props
      let style = ''
      if (size) {
        style += `font-size: ${toCssCompany(size)};`
      }

      if (checked && activeColor) {
        style += `background-color: ${activeColor};`
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
