import { ref } from 'vue'
import { createNamespace } from '@two-ui/base'

import './../style/index.scss'

const [ createComponent, bem ] = createNamespace('button')

export default createComponent({
  props: {
    data: {
      default: 2
    }
  },
  setup (props, { emit, slots }) {
    console.log(props)
    const data = ref(1)
    const show = ref(false)
    const onInput = (e: any) => {
      data.value = e.target.value
    }
    const onShow = () => {
      show.value = !show.value
    }
  
    return () => {
      return <button>
        { slots.default && slots.default()}
      </button>
    }
    
  }
})
