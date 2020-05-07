import React from 'react'
import { Paper, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'
import { FavoriteRounded, EcoSharp } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { Classifications } from '.'

const Sidebar = ({ activeItem, onItemChange }) => (
  <Paper variant="outlined">
    <List component="ul" aria-label="main mailbox folders">
      <ListSubheader>Perform Classification</ListSubheader>
      <ListItem
        button
        selected={activeItem === Classifications.HYPERTENSION}
        onClick={() => onItemChange(Classifications.HYPERTENSION)}
      >
        <ListItemIcon>
          <FavoriteRounded />
        </ListItemIcon>
        <ListItemText primary="Classify Hypertension" />
      </ListItem>
      <ListItem
        button
        selected={activeItem === Classifications.KIDNEY}
        onClick={() => onItemChange(Classifications.KIDNEY)}
      >
        <ListItemIcon>
          <EcoSharp />
        </ListItemIcon>
        <ListItemText primary="Classify Kidney Disease" />
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
