/**
 * Create a basic component with common options
 */
import { App, defineComponent, ComponentOptionsWithObjectProps } from 'vue'
import { camelize } from '../format/string'

/**
 *
 * @description 创建组件
 * @export createComponent
 * @param {string} name
 * @return {*} defineComponent
 */
export function createComponent (name: string) {
  return function (sfc: ComponentOptionsWithObjectProps) {
    sfc.name = name
    sfc.install = (app: App) => {
      app.component(name as string, sfc)
      app.component(camelize(`-${name}`), sfc)
    }

    return defineComponent(sfc)
  } as typeof defineComponent
}
