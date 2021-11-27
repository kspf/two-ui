import { createNamespace } from '@two-ui/base'

const [createComponent, bem] = createNamespace('radio-group')

const radioProps = {

}

export const TwoRadioGroup = createComponent({
  props: {
    ...radioProps
  },
  setup (props, { slots, attrs }) {
    return () => {
      return <div>
        radio
      </div>
    }
  }
})
