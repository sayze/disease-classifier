import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Form, Summary } from '.'
import { classify, readings } from 'services/KidneyDisease'

/**
 * Get the severity level using the provided KidneyDisease classification.
 * @param eGFR
 * @return {string}
 */
const getSeverity = eGFR => {
  switch (eGFR) {
    case readings.MILD_DECREASE:
    case readings.MILD_MODERATE:
    case readings.MODERATE_SEVERE:
      return 'warning'
    case readings.SEVERE_DECREASE:
    case readings.SEVERE:
      return 'error'
    default:
      return 'success'
  }
}

const KidneyDisease = () => {
  const [eGFRData, seteGFRData] = useState([])

  const handleFormSubmit = values => {
    const eGFRValue = Number(values.eGFR)
    seteGFRData([...eGFRData, { eGFR: eGFRValue, date: new Date().toDateString(), percentage: 0 }])
  }

  return (
    <Grid container spacing={4} direction="column">
      <Grid item xs>
        <Form onFormSubmit={handleFormSubmit} />
      </Grid>
      <Grid item container spacing={2} direction="column">
        <Grid item xs>
          <Typography component="p" color="textSecondary" variant="body1">
            Classification
          </Typography>
        </Grid>
        {eGFRData.map(eGFRItem => {
          const classification = classify(eGFRItem.eGFR)
          return (
            <Grid item xs>
              <Alert severity={getSeverity(classification)}>
                <AlertTitle>{classification.toString()}</AlertTitle>
                <Summary date={eGFRItem.date} percentage={eGFRItem.percentage} eGFR={eGFRItem.eGFR} />
              </Alert>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default KidneyDisease
