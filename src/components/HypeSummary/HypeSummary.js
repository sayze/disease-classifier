import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Stage from 'services/Hypertension'

const useStyles = makeStyles(theme => ({
  inputField: {
    marginBottom: theme.spacing(3),
  },
}))

const HypeSummary = ({ date, sysBp, dialBp, stage }) => (
  <>
    <Typography>{date}</Typography>
    <Typography>{sysBp}</Typography>
    <Typography>{dialBp}</Typography>
    <Typography>{stage.toString}</Typography>
  </>
)

HypeSummary.defaultProps = {
  date: new Date(),
  sysBp: 0,
  dialBp: 0,
}

HypeSummary.propTypes = {
  date: PropTypes.Object,
  sysBp: PropTypes.number,
  dialBp: PropTypes.number,
  stage: PropTypes.Object.isRequired,
}

export default HypeSummary
