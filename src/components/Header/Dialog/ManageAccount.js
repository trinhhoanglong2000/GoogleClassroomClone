import React, { useState } from "react";
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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ManageAccount({ open, setOpen, account, setAccount }) {
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
    setAccount({ ...account, [e.target.name]: e.target.value });
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
              defaultValue={account.firstname}
            />
            <TextField
              label="LastName"
              name="lastname"
              variant="standard"
              sx={{ marginLeft: 2 }}
              onChange={handleChange}
              defaultValue={account.lastname}
            />
          </Toolbar>
          
          <TextField
          sx={{width:'50%',display:'block',marginBottom:'10px'}}
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
          
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                name="dob"
                label="Date of birth"
                value={account.dob}
                inputFormat="dd/MM/yyyy"
                onChange={(value) => {
                  setAccount({
                    ...account,
                    dob: value,
                  });
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <TextField
                    label="Date of birth"
                    inputProps={inputProps}
                    InputProps={InputProps}
                    inputRef={inputRef}
                    variant="standard"
                  ></TextField>
                )}
              />
            </LocalizationProvider>
          
        </Container>
      </Dialog>
    </div>
  );
}
