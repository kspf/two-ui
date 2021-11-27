import twoIcon from './../src/index'
import { mount } from '@vue/test-utils'

describe('two-icon', () => {
  // 测试默认状态
  test('icon-default', () => {
    const wrapper = mount(twoIcon)
    expect(wrapper.html()).toContain('')
  })
})
