import React from 'react'
import { mount } from 'enzyme'
import Datepicker from '.'

describe('Datepicker', () => {
  it('should render default date picker', () => {
    const component = mount(<Datepicker />)
    expect(component).toMatchSnapshot()
  })
})
