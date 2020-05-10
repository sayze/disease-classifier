import React from 'react'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import PropTypes from 'prop-types'

const Datepicker = props => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
      autoOk
      variant="inline"
      format="dd/MM/yyyy"
      inputVariant="outlined"
      margin="normal"
      label="Date picker inline"
      {...props}
    />
  </MuiPickersUtilsProvider>
)

Datepicker.defaultProps = {
  props: {},
}

Datepicker.propTypes = {
  props: PropTypes.object,
}

export default Datepicker
