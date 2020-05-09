import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

const Summary = ({ date, sysBp, dialBp }) => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="body1" component="p">
        Reading Date: {date}
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
  </Grid>
)

Summary.defaultProps = {
  date: new Date().toDateString(),
  sysBp: 0,
  dialBp: 0,
}

Summary.propTypes = {
  date: PropTypes.string,
  sysBp: PropTypes.number,
  dialBp: PropTypes.number,
}

export default Summary
