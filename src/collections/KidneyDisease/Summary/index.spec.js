import React from 'react'
import { shallow } from 'enzyme'
import Summary from '.'

describe('Kidney Disease Summary', () => {
  it('should render a valid kidney disease summary', () => {
    const component = shallow(<Summary date={new Date('2020-01-01')} />)
    expect(component).toMatchSnapshot()
  })
})
