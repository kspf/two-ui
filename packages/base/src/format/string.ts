const camelizeRE = /-(\w)/g
const company = 'cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%'

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
export function toCssCompany (str: any, comp: string = 'px'): string {
  str = str + ''
  if (company?.indexOf(str) > -1) {
    return str
  }
  return str + comp
}
