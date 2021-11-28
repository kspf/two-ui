import { createNamespace } from '@two-ui/base'

const [createComponent] = createNamespace('radio-group')

const radioProps = {
  modelValue: {
    type: String
  }
}

export const TwoRadioGroup = createComponent({
  props: {
    ...radioProps
  },
  emits: ['update:modelValue'],
  methods: {
    click () {

    }
  },
  setup (props, { slots, attrs }) {
    return () => {
      return <>
        {slots.default && slots.default()}
      </>
    }
  }
})
