import { createNamespace } from '@two-ui/base'

const [createComponent, bem] = createNamespace('switch')

const switchProps = {

}

export default createComponent({
  props: {
    ...switchProps
  },
  setup (props, { slots, attrs }) {
    return () => {
      return <div>
      </div>
    }
  }
})
