import { createNamespace } from '@two-ui/base'
import { TwoIcon } from '@two-ui/icon'
import './../style/index.scss'
import '@two-ui/icon/dist/esm/index.css'

const [createComponent, bem] = createNamespace('toast')

const toastProps = {
  message: {
    type: String
  }
}

export const TwoToast = createComponent({
  props: {
    ...toastProps
  },
  setup (props, { slots, attrs }) {
    const renderToast = () => {
      const { message } = props
      return <div class={bem('toast')}>
        { message }
      </div>
    }
    const renderLoading = () => {
      const { message } = props

      return <div class={bem('loading')}>
        <TwoIcon class={bem('icon')} name="success-filling"></TwoIcon>
        <span class={bem('text')}>{ message }</span>
      </div>
    }
    return () => {
      return <div class={bem()}>
        { renderToast() }
        { renderLoading() }
      </div>
    }
  }
})
