import { createNamespace } from '@two-ui/base'
import './../style/index.scss'

const [createComponent, bem] = createNamespace('radio')

const radioProps = {
  name: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Object, String, Boolean]
  },
  value: {
    type: [String, Object, String, Boolean]
  }
}

export const TwoRadio = createComponent({
  props: {
    ...radioProps
  },
  emits: ['update:modelValue'],
  setup (props, { slots, attrs }) {
    return () => {
      const { name, disabled, value } = props
      return <div class={bem()}>
        <input class={bem('input')} type="radio" name={name} disabled={disabled} ></input>
        <label class={bem('label')}></label>
        <span>
          {slots.default && slots.default()}
        </span>
      </div>
    }
  }
})
