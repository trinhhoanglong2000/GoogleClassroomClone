import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";

//import Divider from "@mui/material/Divider";

import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ManageAccount({ open, setOpen, account }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",

    phone: "",
    showPassword: false,
    
    
  });

  
  const handleChange = (e) => {
    console.log(e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => {
    setInput({
      ...input,
      showPassword: !input.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            background: "linear-gradient(to right, #434343 0%, black 100%);",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Manage Profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Toolbar sx={{ padding: "0!important" }} variant="regular">
            <TextField
              label="FirstName"
              name="firstname"
              variant="standard"
              size="medium"
              onChange={handleChange}
              
            />
            <TextField
              label="LastName"
              name="lastname"
              variant="standard"
              sx={{ marginLeft: 2 }}
              onChange={handleChange}
              
            />
          </Toolbar>
          
          <TextField
            name="password"
            label="Password"
            variant="standard"
            fullWidth
            margin="dense"
            onChange={handleChange}
            type={input.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {input.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              ),
            }}
          />
          
        </Container>
      </Dialog>
    </div>
  );
}
