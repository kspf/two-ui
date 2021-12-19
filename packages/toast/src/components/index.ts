import { createApp } from 'vue'
import { TwoToast } from './toast'
const toast = createApp(TwoToast)

export const Toast = function (message: string) {
  console.log(toast)
  // toast.$props.message = message
}
Toast.loading = () => {

}

const el = document.createElement('div')
el.id = 'two-ui-toast'
document.body.append(el)
toast.mount('#two-ui-toast')
