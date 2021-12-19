import twoToast from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-toast', () => {
  // 测试默认状态
  test('toast-default', () => {
    const wrapper = mount(twoToast)
    expect(wrapper.html()).toContain('')
  })
})
