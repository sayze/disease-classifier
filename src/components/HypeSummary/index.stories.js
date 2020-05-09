import React from 'react'
import HypeSummary from '.'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'HyperSummary',
  component: HypeSummary,
  decorators: [withKnobs],
}
export const Default = () => {
  const dialBp = number('Diastolic Blood Pressure', 0)
  const sysBp = number('Systolic Blood Pressure', 0)
  return <HypeSummary date="21/05/2020" dialBp={dialBp} sysBp={sysBp} />
}
