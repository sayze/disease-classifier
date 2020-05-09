import React, { useState } from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Form, Summary } from '.'
import { stages, classify } from 'services/Hypertension'

/**
 * Get the severity level using the provided hypertension stage.
 * @param stage
 * @return {string}
 */
const getSeverity = stage => {
  switch (stage) {
    case stages.STAGE_1:
      return 'warning'
    case stages.STAGE_2:
    case stages.STAGE_3:
      return 'error'
    default:
      return 'success'
  }
}

const Hypertension = () => {
  const [bpValues, setBpValues] = useState({ sysBp: 0, dialBp: 0 })
  const stage = classify(bpValues.sysBp, bpValues.dialBp)

  const handleFormSubmit = values => {
    setBpValues({ sysBp: Number(values.sysBp), dialBp: Number(values.dialBp) })
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Typography component="p" color="textSecondary" variant="body1">
          Classify Hypertension
        </Typography>
      </Grid>
      <Grid item xs>
        <Form onFormSubmit={handleFormSubmit} />
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid item xs>
        <Typography component="p" color="textSecondary" variant="body1">
          Results
        </Typography>
      </Grid>
      <Grid item xs>
        <Alert severity={getSeverity(stage)}>
          <AlertTitle>{stage.toString()}</AlertTitle>
          <Summary {...bpValues} />
        </Alert>
      </Grid>
    </Grid>
  )
}

export default Hypertension
