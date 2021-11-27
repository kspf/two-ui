import { createNamespace } from '@two-ui/base'
import { getCurrentInstance } from 'vue'
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
  setup (props, { slots, emit }) {
    const current = getCurrentInstance()

    const getRadioGroupComponent = () => {
      let parent = current
      do {
        if (parent?.parent) {
          parent = parent?.parent
        }
        if (parent && parent.type && parent.type.name === 'two-radio-group') {
          return parent
        }
      } while (parent?.parent)
      return current
    }
    const parent = getRadioGroupComponent()
    const isChecked = () => {
      const par = parent ? parent.props.modelValue : props.modelValue
      return par === props.value
    }
    const hanleClick = () => {
      const { value } = props
      parent?.emit('update:modelValue', value)
    }
    return () => {
      const { name, disabled } = props
      return <div class={bem()} onClick={hanleClick}>
        <input class={bem('input')} type="radio" name={name} disabled={disabled} checked={isChecked()}></input>
        <label class={bem('label')}></label>
        <span>
          {slots.default && slots.default()}
        </span>
      </div>
    }
  }
})
