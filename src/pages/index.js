import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  ThemeProvider } from '@material-ui/styles';

import theme from '../components/theme'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
 
}));

const index = () => {
  return (
    <div>
       <ThemeProvider theme={theme}>
       <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" >
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    </ThemeProvider>
    </div>
  )
}

export default index;
