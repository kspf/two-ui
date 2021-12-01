import { createNamespace, useParent } from '@two-ui/base'
import { PropType, computed } from 'vue'
import './../style/col.scss'

const [createComponent, bem] = createNamespace('col')

const layoutProps = {
  // 占用宽度最大24
  span: {
    type: [String, Number],
    default: 1
  },
  // 偏移度
  offset: {
    type: [String, Number],
    default: 0
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  }
}

export const TwoCol = createComponent({
  props: {
    ...layoutProps
  },
  setup (props, { slots }) {
    const { parent, index } = useParent('two-row')
    const { spaces } = parent
    const style = computed(() => {
      if (!parent) {
        return
      }
      if (spaces && spaces.value && spaces.value[index]) {
        const { left, right } = spaces.value[index]
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null
        }
      }
    })

    return () => {
      // eslint-disable-next-line no-unused-vars
      const { span, offset, tag } = props
      return <tag style={style.value} class={bem({
        [span]: span,
        [`offset--${offset}`]: offset
      })}>
        { slots.default && slots.default() }
      </tag>
    }
  }
})
