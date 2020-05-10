import React from 'react'
import Summary from '.'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'Kidney Disease Summary',
  component: Summary,
  decorators: [withKnobs],
}
export const Default = () => {
  const eGFR = number('eGFR', 0)
  const percentage = number('Percentage', 0)
  return <Summary eGFR={eGFR} percentage={percentage} />
}
