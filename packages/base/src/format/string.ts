const camelizeRE = /-(\w)/g

/**
 *
 * @description 把-换成驼峰命名
 * @export camelize
 * @param {string} str
 * @return {*}  {string}
 */
export function camelize (str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}
