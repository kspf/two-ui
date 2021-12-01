import { PropType, computed } from 'vue'
import { createNamespace, useChildren } from '@two-ui/base'
import './../style/row.scss'

const [createComponent, bem] = createNamespace('row')

type justifyType = 'end' | 'center' | 'space-around' | 'space-between'

const layoutProps = {
  // 对其方式与 justify-content 中一致
  justify: {
    type: String as PropType<keyof justifyType>
  },
  // 设置间距
  gutter: {
    type: String
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  }
}

export const TwoRow = createComponent({
  props: {
    ...layoutProps
  },
  setup (props, { slots }) {
    const { children, linkChildren } = useChildren('two-row')

    const groups = computed(() => {
      const groups: any[] = [[]]
      children.forEach((child, index) => {
        groups[groups.length - 1].push(index)
      })
      return groups
    })

    const spaces = computed(() => {
      const gutter = Number(props.gutter)
      if (!gutter) {
        return
      }
      const spaces: any[] = []

      groups.value.forEach(group => {
        const averagePadding = (gutter * (group.length - 1)) / group.length
        group.forEach((item: number, index: number) => {
          if (index === 0) {
            spaces.push({ right: averagePadding })
          } else {
            const left = gutter - spaces[item - 1].right
            const right = averagePadding - left
            spaces.push({ left, right })
          }
        })
      })
      return spaces
    })

    linkChildren({ spaces })

    return () => {
      // console.log(props.gutter)
      const { justify } = props
      return <div class={bem({
        [`justify--${String(justify)}`]: justify
      })}>
        { slots.default && slots.default()}
      </div>
    }
  }
})
