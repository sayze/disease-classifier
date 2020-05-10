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
    justifyContent: 'space-between',
  },
  inputField: {
    marginBottom: theme.spacing(3),
  },
  submit: {
    float: 'right',
  },
}))

const Form = ({ onFormSubmit }) => {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{ dialBp: 0, sysBp: 0, date: new Date() }}
      validationSchema={Yup.object({
        sysBp: Yup.number()
          .typeError('Systolic Blood Pressure must be a number')
          .required('Systolic Blood Pressure is required'),
        dialBp: Yup.number()
          .typeError('Diastolic Blood Pressure must be a number')
          .required('Diastolic Blood Pressure is required'),
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
              className={classes.inputField}
              margin="normal"
              name="sysBp"
              variant="outlined"
              label="Systolic Blood Pressure"
              error={Boolean(touched.sysBp && errors.sysBp)}
              helperText={errors.sysBp && touched.sysBp ? errors.sysBp : 'Number for Systolic Blood Pressure'}
              onChange={handleChange}
              defaultValue={values.sysBp}
            />
            <TextField
              className={classes.inputField}
              margin="normal"
              name="dialBp"
              variant="outlined"
              label="Diastolic Blood Pressure"
              error={Boolean(touched.dialBp && errors.dialBp)}
              helperText={errors.dialBp && touched.dialBp ? errors.dialBp : 'Number for Diastolic Blood Pressure'}
              onChange={handleChange}
              defaultValue={values.dialBp}
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
  sysBp: 0,
  dialBp: 0,
  onFormSubmit: () => {},
}

Form.propTypes = {
  sysBp: PropTypes.number,
  dialBp: PropTypes.number,
  onFormSubmit: PropTypes.func,
}

export default Form
