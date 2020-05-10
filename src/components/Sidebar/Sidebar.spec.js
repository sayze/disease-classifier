import React from 'react'
import { shallow } from 'enzyme'
import Sidebar, { menu } from '.'

describe('Sidebar', () => {
  it('should render Sidebar with hypertension active', () => {
    const component = shallow(<Sidebar activeItem={menu.HYPERTENSION} />)
    expect(component).toMatchSnapshot()
  })
})
