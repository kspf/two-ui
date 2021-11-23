
/**
 *
 *
 * @description 判断是否是数字
 * @export isNumber
 * @param {any} num
 * @return {boolean}
 */
export function isNumber (num: any) {
  return !isNaN(num)
}

/**
 *
 * @description 判断是否是正数
 * @export isPositiveNumber
 * @param {*} num
 * @return {boolean}
 */
export function isPositiveNumber (num: any) {
  return num > 0
}

/**
 *
 * @description 字符串转换为数字
 * @export toNumber
 * @param {string} str
 * @param {boolean} zero 转换不成功时是否用0补位
 * @param {number} [radix=10]
 * @return {number | boolean}
 */
export function toNumber (str: any, zero: boolean = true, radix: number = 10) {
  const num = parseInt(str, radix)

  if (!isNumber(num) && zero) {
    return false
  }

  return num
}
