import React from 'react'
import { shallow } from 'enzyme'
import Sidebar, { Classifications } from '.'

describe('Sidebar', () => {
  it('should render Sidebar with hypertension active', () => {
    const component = shallow(<Sidebar activeItem={Classifications.HYPERTENSION} />)
    expect(component).toMatchSnapshot()
  })
})
