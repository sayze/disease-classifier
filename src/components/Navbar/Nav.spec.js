import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '.'

describe('NavBar', () => {
  it('should render default NavBar', () => {
    const component = shallow(<NavBar />)
    expect(component).toMatchSnapshot()
  })
})
