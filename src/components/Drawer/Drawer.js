import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "15px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
}));

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate()
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const goHome = () => {
    navigate('/')
  }
  const goShowGrade = () => {
    navigate('/ShowGrade')
  }
  const item = [{
    text: 'Classes',
    onClick: goHome,
  }]
  const downItem = [{
    text: 'Grade',
    onClick: goShowGrade,
  }, {
    text: 'Sent mail',
    onClick: goHome,
  }, {
    text: 'Inbox',
    onClick: goHome,
  }]
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {item.map((item, index) => (
          <ListItem button key={index} onClick={item.onClick}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {downItem.map((text, index) => (
          <ListItem button key={text.text} onClick={text.onClick}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box >
            {/* {anchor} */}
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              className={classes.icon}
              edge="start"

              aria-label="menu"
              sx={{ m: 0, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
