import React from 'react'
import { shallow } from 'enzyme'
import HypeSummary from '.'

describe('HypeSummary', () => {
  it('should render a valid hypertension summary', () => {
    const component = shallow(<HypeSummary date={new Date('2020-01-01').toDateString()} />)
    expect(component).toMatchSnapshot()
  })
})
