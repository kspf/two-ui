import { createNamespace } from '@two-ui/base'
import { TwoIcon } from '@two-ui/icon'
import { PropType } from 'vue'
// 样式文件
import './../style/index.scss'

type arrowDirectionType = 'up' | 'right' | 'down'

const [createComponent, bem] = createNamespace('cell')

export const cellProps = {
  // 单元格标题
  title: [String, Number],
  // 单元格内容
  value: [String, Number],
  // 是否有箭头并且点击反馈
  isLink: {
    type: Boolean,
    default: false
  },
  // 箭头朝向
  arrowDirection: {
    type: String as PropType<keyof arrowDirectionType>,
    default: 'right'
  }
}

export const TwoCell = createComponent({
  props: {
    ...cellProps
  },
  setup (props, { slots, attrs }) {
    const renderLeftIcon = () => {

    }
    const renderTitle = () => {
      return <div class={bem('title')}>
          {slots.title ? slots.title() : <span>{props.title}</span>}
        </div>
    }
    const renderValue = () => {
      return <div class={bem('value')}>
        {slots.value ? slots.value() : props.value}
      </div>
    }
    const renderRgihtIcon = () => {
      const { isLink, arrowDirection } = props
      if (slots.rightIcon) {
        return slots.rightIcon()
      }
      if (isLink) {
        return <TwoIcon class={ bem('right-icon') } name={ `arrow-${String(arrowDirection)}` } />
      }
    }
    return () => {
      const { isLink } = props
      return (
        <div
          class={bem({
            hover: isLink
          })}
        >
          {renderLeftIcon()}
          {renderTitle()}
          {renderValue()}
          {renderRgihtIcon()}
        </div>
      )
    }
  }
})
