import React from 'react'
import { Formik } from 'formik'
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
      initialValues={{ eGFR: 0 }}
      validationSchema={Yup.object({
        eGFR: Yup.number()
          .typeError('eGFR must be a number')
          .required('eGFR is required'),
      })}
      onSubmit={onFormSubmit}
    >
      {({ errors, touched, values, handleChange, handleSubmit }) => (
        <>
          <TextField
            fullWidth
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
          <Button variant="contained" onClick={handleSubmit} color="primary" fullWidth>
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
