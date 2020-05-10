import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import dateWithFormat from 'services/Date'

const Summary = ({ date, eGFR, percentage }) => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="body1" component="p">
        Reading Date: {dateWithFormat(date)}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1" component="p">
        eGFR: {eGFR}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1" component="p">
        Percent Change: {percentage}%
      </Typography>
    </Grid>
  </Grid>
)

Summary.defaultProps = {
  date: new Date(),
  eGFR: 0,
  percentage: 0,
}

Summary.propTypes = {
  date: PropTypes.object,
  eGFR: PropTypes.number,
  percentage: PropTypes.number,
}

export default Summary
