import { createNamespace, toCssCompany, isPath } from '@two-ui/base'
import { CSSProperties, PropType } from 'vue'
import './../style/index.scss'

const [createComponent, bem] = createNamespace('icon')

const iconProps = {
  // 图标名字
  name: {
    type: String
  },
  // html
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'i'
  },
  // 按钮颜色
  color: {
    type: String
  },
  // 图标大小
  size: {
    type: String
  },
  // 自定义图标前缀
  classPrefix: {
    type: String
  }
}

export const TwoIcon = createComponent({
  props: {
    ...iconProps
  },
  emits: ['click'],
  setup (props, { emit }) {
    const calcClass = () => {
      const classObject: any = {}
      const { name, classPrefix } = props

      if (classPrefix) {
        classObject[classPrefix] = classPrefix
        classObject[`${classPrefix}-${name}`] = classPrefix
        return classObject
      }
      if (name && !isPath(name)) {
        classObject[name] = name
      }

      return bem(classObject)
    }
    const calcStyle = () => {
      const { color, size } = props
      const cssStyle: CSSProperties = {}
      if (color) {
        cssStyle.color = color
      }
      if (size) {
        cssStyle.fontSize = toCssCompany(size)
      }
      return cssStyle
    }
    const renderImageIcon = () => {
      const { name } = props
      if (isPath(name)) {
        return <img class={bem('img')} src={name} />
      }
    }
    const handleClick = () => {
      emit('click')
    }
    return () => {
      // eslint-disable-next-line no-unused-vars
      const { tag } = props
      return <tag class={calcClass()} style={calcStyle()} onClick={handleClick}>
        {renderImageIcon()}
      </tag>
    }
  }
})
