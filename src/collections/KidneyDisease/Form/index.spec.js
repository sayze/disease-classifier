import React from 'react'
import { shallow } from 'enzyme'
import Form from '.'

describe('Kidney disease form', () => {
  it('should render a default kidney disease form', () => {
    const component = shallow(<Form />)
    expect(component).toMatchSnapshot()
  })
})
