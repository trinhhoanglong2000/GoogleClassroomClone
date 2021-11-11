import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";
function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",

    showPassword: false,
  });
  const handleChange = (e) => {
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
    <Container
      maxWidth="xl"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          width: 368,
          height: 520,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            align="center"
            sx={{ width: 60, height: 60, marginTop: 3, marginBottom: 3 }}
            variant="square"
            alt="Remy Sharp"
            src="https://i.ibb.co/JmZbWBK/743532.png"
          />
        </Box>

        <Typography
          gutterBottom
          variant="h4"
          component="div"
          noWrap
          align="center"
        >
          Sign In
        </Typography>
        <Container maxWidth="sm">
          <TextField
            type="email"
            name="email"
           
            label="Email"
            variant="standard"
            fullWidth
            autoFocus
            margin="dense"
            value={input.name}
            onChange={handleChange}
          />
        </Container>
        <Container maxWidth="sm">
          <TextField
            password="password"
            
            label="Password"
            variant="standard"
            fullWidth
            margin="dense"
            value={input.password}
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
        <Container>
          <Typography
            gutterBottom
            variant="a"
            component="div"
            noWrap
            align="center"
            sx={{marginTop:2}}
          >
            Don't have an account?
            <Link to="/Register"> Sign Up</Link>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 5,
              background: "linear-gradient(to right, #536976, #292e49);",
              marginBottom: 1,
              marginTop: 3,
            }}
          >
            Sign In
          </Button>
          
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            noWrap
            align="center"
          >
            or
          </Typography>
         
          <Button
            variant="contained"
            startIcon={<GoogleIcon/>}
            fullWidth
            sx={{
              borderRadius: 5,
              background: "#DD4B39",
              marginBottom: 1,
              marginTop: 1,
              "&:hover": {
                background: "#DD4B39",
              },
            }}
          >
            Sign in with Google
          </Button>
        </Container>
      </Box>
    </Container>
  );
}

export default Login;
