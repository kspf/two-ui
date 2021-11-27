const camelizeRE = /-(\w)/g
const company = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', '%']
const testPath = /\//
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

/**
 * @description 转化为字符串 不符合规则转换为 空字符串
 * @export toString
 * @param {string} str
 * @return {*}  {string}
 */
export function toString () {

}

/**
 * @description 把传入的内容转化为有css单位的字符串
 * @export toCssCompany
 * @param {string} str
 * @return {*}  {string}
 */
export function toCssCompany (str: string | number, comp: string = 'px'): string {
  const pre = str + ''
  if (company.some(item => (pre.indexOf(item) !== -1))) {
    return pre
  }
  return pre + comp
}

/**
 * @description 把传入的内容转化为有css单位的字符串
 * @export isPath
 * @param {string} str
 * @return {*}  {boolean}
 */
export function isPath (str: any): boolean {
  return testPath.test(str)
}
