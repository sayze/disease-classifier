import React, { useState } from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Form, Summary } from '.'
import { classifyKidneyDisease, readings, getPercentageDrop } from 'services/Classification'

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

/**
 * Helper to encapsulate logic for rendering a classification summary.
 * @param {object} eGFRPrev
 * @param {object} eGFRCurr
 */
const renderSummary = (eGFRPrev = {}, eGFRCurr = {}) => {
  const classification = classifyKidneyDisease(eGFRCurr.value)
  const percentDrop = getPercentageDrop(eGFRPrev.value, eGFRCurr.value)
  const title =
    percentDrop >= 20
      ? `${classification.toString()} (eGFR has declined 20% than the previous reading, refer to below readings)`
      : classification.toString()

  return (
    <Grid item xs>
      <Alert severity={getSeverity(classification)}>
        <AlertTitle>{title}</AlertTitle>
        <Summary date={eGFRCurr.date} percentage={percentDrop} eGFR={eGFRCurr.value} />
        {percentDrop >= 20 && (
          <>
            <br />
            <Divider light />
            <br />
            <Summary date={eGFRPrev.date} eGFR={eGFRPrev.value} />
          </>
        )}
      </Alert>
    </Grid>
  )
}

const KidneyDisease = () => {
  const [eGFRPrev, seteGFRPrev] = useState({})
  const [eGFRCurr, seteGFRCurr] = useState({})

  const handleFormSubmit = values => {
    const eGFRValue = Number(values.eGFR)

    // Update previous and current states.
    seteGFRPrev({ ...eGFRCurr })
    seteGFRCurr({ value: eGFRValue, date: values.date })
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
        {renderSummary(eGFRPrev, eGFRCurr)}
      </Grid>
    </Grid>
  )
}

export default KidneyDisease
