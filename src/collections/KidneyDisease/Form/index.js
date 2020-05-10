import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Datepicker from 'components/Datepicker'

const useStyles = makeStyles(theme => ({
  inputs: {
    display: 'flex',
  },
  inputField: {
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  submit: {
    float: 'right',
  },
}))

const Form = ({ onFormSubmit }) => {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{ eGFR: 0 }}
      validationSchema={Yup.object({
        eGFR: Yup.number()
          .typeError('eGFR must be a number')
          .required('eGFR is required'),
      })}
      onSubmit={onFormSubmit}
    >
      {({ errors, touched, values, handleChange, handleSubmit, setFieldValue }) => (
        <>
          <div className={classes.inputs}>
            <Datepicker
              autoFocus
              name="date"
              onChange={date => setFieldValue('date', date)}
              className={classes.inputField}
              value={values.date}
              label="Date of Reading"
            />
            <TextField
              margin="normal"
              autoFocus
              className={classes.inputField}
              name="eGFR"
              variant="outlined"
              label="eGFR"
              error={Boolean(touched.eGFR && errors.eGFR)}
              helperText={errors.eGFR && touched.eGFR ? errors.eGFR : 'Number for eGFR'}
              onChange={handleChange}
              defaultValue={values.eGFR}
            />
          </div>
          <Button className={classes.submit} variant="contained" onClick={handleSubmit} color="primary">
            Classify
          </Button>
        </>
      )}
    </Formik>
  )
}

Form.defaultProps = {
  eGFR: 0,
  onFormSubmit: () => {},
}

Form.propTypes = {
  eGFR: PropTypes.number,
}

export default Form
