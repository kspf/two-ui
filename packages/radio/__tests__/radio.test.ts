import twoRadio from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-radio', () => {
  // 测试默认状态
  test('radio-default', () => {
    const wrapper = mount(twoRadio)
    expect(wrapper.html()).toContain('')
  })
})
