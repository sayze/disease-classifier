import React from 'react'
import Summary from '.'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'Hypertension Summary',
  component: Summary,
  decorators: [withKnobs],
}
export const Default = () => {
  const dialBp = number('Diastolic Blood Pressure', 0)
  const sysBp = number('Systolic Blood Pressure', 0)
  return <Summary dialBp={dialBp} sysBp={sysBp} />
}
