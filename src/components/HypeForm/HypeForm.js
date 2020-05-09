import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inputField: {
    marginBottom: theme.spacing(3),
  },
}))

const HypeForm = ({ onFormSubmit }) => {
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
        <Form>
          <TextField
            fullWidth
            autoFocus
            className={classes.inputField}
            name="sysBp"
            variant="outlined"
            label="Systolic Blood Pressure"
            error={Boolean(touched.sysBp && errors.sysBp)}
            helperText={errors.sysBp && touched.sysBp ? errors.sysBp : ' '}
            onChange={handleChange}
            placeholder="Systolic Blood Pressure"
          />
          <TextField
            fullWidth
            className={classes.inputField}
            name="dialBp"
            variant="outlined"
            label="Diastolic Blood Pressure"
            error={Boolean(touched.dialBp && errors.dialBp)}
            helperText={errors.dialBp && touched.dialBp ? errors.dialBp : ' '}
            onChange={handleChange}
            placeholder="Diastolic Blood Pressure"
          />
          <Button variant="contained" size="small" type="submit" color="primary" fullWidth>
            Classify
          </Button>
        </Form>
      )}
    </Formik>
  )
}

HypeForm.defaultProps = {
  sysBp: 0,
  dialBp: 0,
  onFormSubmit: () => {},
}

HypeForm.propTypes = {
  sysBp: PropTypes.number,
  dialBp: PropTypes.number,
  onFormSubmit: PropTypes.func,
}

export default HypeForm
