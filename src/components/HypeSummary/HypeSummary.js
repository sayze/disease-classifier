import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Stage from 'services/Hypertension'

const useStyles = makeStyles(theme => ({
  resultLabel: {
    backgroundColor: theme.palette.grey[50],
  },
}))

const HypeSummary = ({ date, sysBp, dialBp, stage }) => {
  const classes = useStyles()
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="body1" component="p">
          {date}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="p">
          Systolic Blood Pressure: {sysBp}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="p">
          Diastolic Blood Pressure: {dialBp}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.resultLabel} variant="h6" component="h6">
          Results: {stage.toString()}
        </Typography>
      </Grid>
    </Grid>
  )
}

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
