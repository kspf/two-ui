import { reactive, provide, ComponentInternalInstance } from 'vue'

export function useChildren (key: string) {
  const children = reactive<any[]>([])
  const internalChildren = reactive<any[]>([])
  // const parent = getCurrentInstance()
  const linkChildren = (spaces: any) => {
    const link = (child: ComponentInternalInstance) => {
      children.push(child.proxy)
      internalChildren.push(child)
    }
    const unlink = (child: ComponentInternalInstance) => {
      const index = internalChildren.indexOf(child)
      children.splice(index, 1)
      internalChildren.splice(index, 1)
    }
    provide(
      key,
      {
        link,
        unlink,
        children,
        internalChildren,
        spaces
      }
    )
  }

  return {
    children,
    linkChildren
  }
}
