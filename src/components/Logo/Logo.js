import React from 'react'
import { SvgIcon, Typography, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ReactComponent as BrandIcon } from './icon.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  text: {
    marginLeft: theme.spacing(1),
    fontFamily: 'Chalkboard',
  },
})

const Logo = ({ classes }) => (
  <div className={classes.root}>
    <SvgIcon component={BrandIcon} viewBox="0 0 600 476.6" />
    <Typography className={classes.text} variant="h6">
      Disease Classifier
    </Typography>
  </div>
)

Logo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(styles)(Logo)
