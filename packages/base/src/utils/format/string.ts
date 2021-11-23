
/**
 *
 *
 * @description 判断是否是字符串
 * @export isString
 * @param {any} str 任意数据
 * @return {boolean}
 */
export function isString (str: any) {
  return Object.prototype.toString.call(str) === '[object String]'
}
