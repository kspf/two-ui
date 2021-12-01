import twoLayout from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-layout', () => {
  // 测试默认状态
  test('layout-default', () => {
    const wrapper = mount(twoLayout)
    expect(wrapper.html()).toContain('')
  })
})
