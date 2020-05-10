import React, { useState } from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Form, Summary } from '.'
import { classifyKidneyDisease, eGFR, getPercentageDrop } from 'services/Classification'

/**
 * Get the severity level using the provided KidneyDisease classification.
 * @param {eGFR} eGFRVal
 * @return {string}
 */
const getSeverity = eGFRVal => {
  switch (eGFRVal) {
    case eGFR.MILD_DECREASE:
    case eGFR.MILD_TO_MODERATE:
    case eGFR.MODERATE_TO_SEVERE:
      return 'warning'
    case eGFR.SEVERE_DECREASE:
    case eGFR.SEVERE:
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
