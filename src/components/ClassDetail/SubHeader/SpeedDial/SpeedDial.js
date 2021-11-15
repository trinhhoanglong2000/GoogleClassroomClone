import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from '@mui/icons-material/Edit';

import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
//import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  pos: {
    position: "fixed",
    bottom: 40,
    right: 40,
    
  },
}));
const clicked = () => {
  
}

export default function BasicSpeedDial() {
  const classes = useStyles();

  const actions = [
    { icon: <EmailIcon />, name: "Mail invitation" ,onClick: clicked},
    { icon: <LinkIcon />, name: "Get link invitation" ,onClick: clicked},
  ];


  
  return (
    <Box
      className={classes.pos}
      sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
    >
      <SpeedDial FabProps={{ style: { backgroundColor: '#434343' } }} ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
        {actions.map((action) => (
          <SpeedDialAction
            onClick={action.onClick}
            
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              background: "#D4D4D4",
              "&:hover": {
                background: "#808080",
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
