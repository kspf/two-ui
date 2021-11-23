import { createBEM } from './bem'
import { createComponent } from './component'

/**
 *
 *  @description 创建命名空间
 * @export
 * @param {string} name
 * @return {*} [createComponent(name), createBEM(name)]
 */
export function createNamespace (name: string) {
  name = 'two-' + name
  return [createComponent(name), createBEM(name)] as const
}
