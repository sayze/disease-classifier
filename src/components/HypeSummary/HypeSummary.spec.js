import React from 'react'
import { shallow } from 'enzyme'
import HypeForm from '.'

describe('HypeForm', () => {
  it('should render a default hypertension form', () => {
    const component = shallow(<HypeForm />)
    expect(component).toMatchSnapshot()
  })
})
