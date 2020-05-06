import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Logo from 'components/Logo'

const NavBar = () => (
  <AppBar position="sticky" elevation={1}>
    <Toolbar variant="dense">
      <Logo />
    </Toolbar>
  </AppBar>
)

export default NavBar
