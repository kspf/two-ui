import { inject, getCurrentInstance, ComponentInternalInstance } from 'vue'

interface provideType {
  link: (child: ComponentInternalInstance) => {};
  unlink: () => {};
  children: [any];
  internalChildren: [any];
  spaces: any;
}

export function useParent (key: string) {
  const parent = inject<provideType | null>(key, null)

  if (parent) {
    const current = getCurrentInstance()
    if (current) {
      parent.link(current)
      return {
        parent: parent.spaces,
        index: parent.internalChildren.indexOf(current)
      }
    }
  }
  return {
    parent,
    index: 0
  }
}
