import React from 'react'
import { Form as FormikForm, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inputField: {
    marginBottom: theme.spacing(3),
  },
}))

const Form = ({ onFormSubmit }) => {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{ dialBp: 0, sysBp: 0 }}
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
      {({ errors, touched, values, handleChange }) => (
        <FormikForm>
          <TextField
            fullWidth
            autoFocus
            className={classes.inputField}
            name="sysBp"
            variant="outlined"
            label="Systolic Blood Pressure"
            error={Boolean(touched.sysBp && errors.sysBp)}
            helperText={errors.sysBp && touched.sysBp ? errors.sysBp : 'Number for Systolic Blood Pressure'}
            onChange={handleChange}
            defaultValue={values.sysBp}
          />
          <TextField
            fullWidth
            className={classes.inputField}
            name="dialBp"
            variant="outlined"
            label="Diastolic Blood Pressure"
            error={Boolean(touched.dialBp && errors.dialBp)}
            helperText={errors.dialBp && touched.dialBp ? errors.dialBp : 'Number for Diastolic Blood Pressure'}
            onChange={handleChange}
            defaultValue={values.dialBp}
          />
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Classify
          </Button>
        </FormikForm>
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
