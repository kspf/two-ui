import button from '../src/index'
import { mount } from '@vue/test-utils'

describe('two-button', () => {
  // 测试默认状态
  test('badge-default', () => {
    const wrapper = mount(button)
    expect(wrapper.html()).toContain('')
  })
})