import switch from '../src/index'
import { mount } from '@vue/test-utils'

describe('two-switch', () => {
  // 测试默认状态
  test('badge-default', () => {
    const wrapper = mount(switch)
    expect(wrapper.html()).toContain('')
  })
})