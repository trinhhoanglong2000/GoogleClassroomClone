import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {default as Drawer} from '../Drawer/Drawer'
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ background: 'linear-gradient(to right, #434343 0%, black 100%);'}}>
        <Toolbar>
          
            <Drawer/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: "#FFFFFF" }}>
            Classroom
          </Typography>
          <Button color="inherit" sx={{ color: "#FFFFFF" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
