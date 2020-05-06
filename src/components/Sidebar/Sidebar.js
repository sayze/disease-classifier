import React, { useState } from 'react'
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core'
import { FavoriteRounded, TurnedIn } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { Classifications } from '.'

const Sidebar = ({ onItemChange }) => {
  const [activeItem, setActiveItem] = useState(Classifications.HYPEREXTENSION)

  const handleItemChange = newItem => {
    setActiveItem(newItem)
    onItemChange(newItem)
  }

  return (
    <Paper variant="outlined">
      <List component="ul" aria-label="main mailbox folders">
        <ListSubheader>Perform Classification</ListSubheader>
        <ListItem
          button
          selected={activeItem === Classifications.HYPEREXTENSION}
          onClick={() => handleItemChange(Classifications.HYPEREXTENSION)}
        >
          <ListItemIcon>
            <FavoriteRounded />
          </ListItemIcon>
          <ListItemText primary="Classify Hypertension" />
        </ListItem>
        <ListItem
          button
          selected={activeItem === Classifications.KIDNEY}
          onClick={() => handleItemChange(Classifications.KIDNEY)}
        >
          <ListItemIcon>
            <TurnedIn />
          </ListItemIcon>
          <ListItemText primary="Classify Kidney Disease" />
        </ListItem>
      </List>
    </Paper>
  )
}

Sidebar.defaultProps = {
  activeItem: 0,
}

Sidebar.propTypes = {
  activeItem: PropTypes.number,
}

export default Sidebar
