import twoDemo from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-demo', () => {
  // 测试默认状态
  test('demo-default', () => {
    const wrapper = mount(twoDemo)
    expect(wrapper.html()).toContain('')
  })
})
