import { createNamespace } from '@two-ui/base'
import './../style/demo-info.scss'

const [createComponent, bem] = createNamespace('demo-info')

const demoProps = {

}

export const TwoDemoInfo = createComponent({
  props: {
    ...demoProps
  },
  setup (props, { slots, attrs }) {
    return () => {
      return <div class={bem()}>
        {slots.default && slots.default()}
      </div>
    }
  }
})
