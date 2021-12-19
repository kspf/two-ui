import { createNamespace } from '@two-ui/base'
import './../style/demo-block.scss'

const [createComponent, bem] = createNamespace('demo-block')

const demoProps = {
  title: {
    type: String
  }
}

export const TwoDemoBlock = createComponent({
  props: {
    ...demoProps
  },
  setup (props, { slots, attrs }) {
    return () => {
      const { title } = props
      return <div class={bem()}>
        <h3 class={bem('title')}>{title}</h3>
        <div>
          { slots.default && slots.default() }
        </div>
      </div>
    }
  }
})
