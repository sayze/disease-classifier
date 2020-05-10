import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Sidebar, { menu } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withKnobs],
}

// Setup variables for select knob.
const options = [menu.HYPERTENSION, menu.KIDNEY]
const defaultValue = menu.HYPERTENSION

export const Default = () => <Sidebar activeItem={select('Acive Item', options, defaultValue)} />
