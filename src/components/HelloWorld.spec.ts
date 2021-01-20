import { mount } from '@vue/test-utils'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a greeting', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Vue and TDD' } })
    expect(wrapper.text()).toMatch('Vue and TDD')
    expect(wrapper.html()).toContain('count is: 0')

    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count is: 1')
  })
})
