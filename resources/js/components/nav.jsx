import React from 'react'
import {
  AppBar, Toolbar, IconButton, Typography, Button,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * NavBar of the main app
 *
 * @return {NavBarComponent}
 */
const NavBar = () => (
  <AppBar
    position="static"
  >
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <FontAwesomeIcon icon="coffee" />
      </IconButton>
      <Typography variant="h6">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)

export default NavBar
