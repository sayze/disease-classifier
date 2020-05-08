import React from 'react'
import { shallow } from 'enzyme'
import HypeSummary from '.'
import { stages } from 'services/Hypertension'

describe('HypeSummary', () => {
  it('should render a valid hypertension summary', () => {
    const component = shallow(<HypeSummary stage={stages.STAGE_3} />)
    expect(component).toMatchSnapshot()
  })
})
