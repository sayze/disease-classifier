import React from 'react'
import { mount } from 'enzyme'
import Logo from '.'

describe('Logo', () => {
  it('should render default Logo', () => {
    const component = mount(<Logo />)
    expect(component).toMatchSnapshot()
  })
})
