import twoCell from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-cell', () => {
  // 测试默认状态
  test('cell-default', () => {
    const wrapper = mount(twoCell)
    expect(wrapper.html()).toContain('')
  })
})
