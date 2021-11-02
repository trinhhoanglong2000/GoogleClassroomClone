import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { makeStyles } from "@mui/styles";
import {default as UseContext} from '../../Context/context'

import CreateClass from "../Dialog/CreateClass";
const useStyles = makeStyles((theme) => ({
  pos: {
    position: "fixed",
    bottom: 40,
    right: 40,
    
  },
}));


export default function BasicSpeedDial() {
  const classes = useStyles();
  
  const { createClassDialog, setCreateClassDialog } =UseContext()

  const createClass = () =>{
    setCreateClassDialog(true)
  }
  const joinClass = () =>{
  
  }
  const actions = [
    { icon: <AddIcon />, name: "Create" ,onClick: createClass},
    { icon: <GroupAddIcon />, name: "Join" ,onClick: joinClass},
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
      <CreateClass />
    </Box>
  );
}
