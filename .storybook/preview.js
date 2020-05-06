import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { addDecorator } from '@storybook/react'
import 'index.css'
import theme from 'theme'

addDecorator(story => <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>)
