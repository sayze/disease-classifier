import React from 'react'
import HypeSummary from '.'
import { stages } from 'services/Hypertension'

export default {
  title: 'HyperSummary',
  component: HypeSummary,
}

export const Default = () => <HypeSummary stage={stages.STAGE_1} />
