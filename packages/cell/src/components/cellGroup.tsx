import { createNamespace } from '@two-ui/base'
import './../style/indexGroup.scss'

const [createComponent, bem] = createNamespace('cell-group')

const cellProps = {
  // cell组的标题
  title: {
    type: String
  },
  // 圆角卡片风格
  inset: {
    type: Boolean,
    default: false
  }
}

export const TwoCellGroup = createComponent({
  props: {
    ...cellProps
  },
  setup (props, { slots, attrs }) {
    const renderTitle = () => {
      const { title } = props
      if (title) {
        return <div class={bem('title')}>{ title }</div>
      }
    }
    return () => {
      const { inset } = props
      return <div class={bem({
        inset: inset
      })}>
        { renderTitle() }
        <div>
          { slots.default && slots.default() }
        </div>
      </div>
    }
  }
})
