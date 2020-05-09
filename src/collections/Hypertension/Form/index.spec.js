import React from 'react'
import { shallow } from 'enzyme'
import Form from '.'

describe('Hypertension Form', () => {
  it('should render a default hypertension form', () => {
    const component = shallow(<Form />)
    expect(component).toMatchSnapshot()
  })
})
