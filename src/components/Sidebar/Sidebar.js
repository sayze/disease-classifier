import React from 'react'
import { Paper, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'
import { FavoriteRounded, EcoSharp } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { menu } from '.'

const Sidebar = ({ activeItem, onItemChange }) => (
  <Paper variant="outlined" style={{ height: '100%' }}>
    <List component="ul" aria-label="main mailbox folders">
      <ListSubheader>Perform Classification</ListSubheader>
      <ListItem button selected={activeItem === menu.HYPERTENSION} onClick={() => onItemChange(menu.HYPERTENSION)}>
        <ListItemIcon>
          <FavoriteRounded />
        </ListItemIcon>
        <ListItemText primary="Hypertension" />
      </ListItem>
      <ListItem button selected={activeItem === menu.KIDNEY} onClick={() => onItemChange(menu.KIDNEY)}>
        <ListItemIcon>
          <EcoSharp />
        </ListItemIcon>
        <ListItemText primary="Kidney Disease" />
      </ListItem>
    </List>
  </Paper>
)

Sidebar.defaultProps = {
  onItemChange: () => {},
}

Sidebar.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onItemChange: PropTypes.func,
}

export default Sidebar
