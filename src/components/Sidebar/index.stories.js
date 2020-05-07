import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Sidebar, { Classifications } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withKnobs],
}

// Setup variables for select knob.
const options = [Classifications.HYPERTENSION, Classifications.KIDNEY]
const defaultValue = Classifications.HYPERTENSION

export const Default = () => <Sidebar activeItem={select('Acive Item', options, defaultValue)} />
