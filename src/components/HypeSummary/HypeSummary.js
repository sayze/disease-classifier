import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Stage from 'services/Hypertension'

const HypeSummary = ({ date, sysBp, dialBp, stage }) => (
  <>
    <Typography component="span">{date}</Typography>
    <Typography component="span">{sysBp}</Typography>
    <Typography component="span">{dialBp}</Typography>
    <Typography component="span">{stage.toString()}</Typography>
  </>
)

HypeSummary.defaultProps = {
  date: new Date().toDateString(),
  sysBp: 0,
  dialBp: 0,
}

HypeSummary.propTypes = {
  date: PropTypes.string,
  sysBp: PropTypes.number,
  dialBp: PropTypes.number,
  stage: PropTypes.instanceOf(Stage).isRequired,
}

export default HypeSummary
