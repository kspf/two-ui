import { createNamespace } from '@two-ui/base'
import highlight from 'highlight.js'
import './../style/demo-code.scss'
import 'highlight.js/styles/monokai-sublime.css'
import { onMounted, ref } from 'vue'

const [createComponent, bem] = createNamespace('demo-code')

const demoProps = {

}

export const TwoDemoCode = createComponent({
  props: {
    ...demoProps
  },
  setup (props, { slots, attrs }) {
    const box = ref(null)

    onMounted(() => {
      highlight.highlightElement(box.value)
    })
    return () => {
      return <pre ref={box} class={bem()}>
        <code>
          { slots.default && slots.default() }
        </code>
      </pre>
    }
  }
})
