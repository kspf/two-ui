import twoSwitch from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-switch', () => {
  // 测试默认状态
  test('测试传入禁用状态是否正确', () => {
    const wrapper = mount(twoSwitch, {
      propsData: {
        // 传入禁用状态之后
        disabled: true
      }
    })
    // 查看是否加入了禁用的类名
    expect(wrapper.html()).toContain('two-switch--disabled')
  })
})
