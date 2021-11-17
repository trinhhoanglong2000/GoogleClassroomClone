import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import moment from 'moment';
import { Register as RegisterAccount } from "../../api";
import { useNavigate,Navigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: "10px!important",
    width: "100%",
  },
}));
function Register() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [height, setHeight] = useState(630);
  const [err, setErr] = useState(false);
  const [errmessage,setErrmessage] = useState("")
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
    dob: "",
    gender: true,
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
  const handleOnChange = (value) => {
    setInput({
      ...input,
      phone: value,
    });
  };
  const handleChangeGender = (event) => {
    setInput({
      ...input,
      gender: event.target.value,
    });
  };

  const register = async () => {
    setLoading(true);
    let result = {};
    
    try {
      const DateOfBirth = (moment(input.dob, 'DD/MM/YYYY').format('YYYY/MM/DD'))
     
      let phone = input.phone.slice(3)
      phone='0'+phone
      result = await RegisterAccount (
        input.firstname,
        input.lastname,
        input.email,
        input.password,
        phone,
      
        DateOfBirth,
        input.gender
      )
    } catch (error) {
      
    }
    
    if (result.success) {
     
      setHeight(630);
      setErr(false);
    
      
      navigate("/Login",{replace:true});

    } else {
     

      setHeight(700);
      setErr(true);
      setErrmessage(result.message)
    }
    setLoading(false);
  };
  useEffect(() => {
    
    return () => {
      setErr({}); 
    };
}, []);
  return (
    <>
    {localStorage.getItem('token') && <Navigate to="/"/>}

    {loading && <LinearProgress />}
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
          height: {height},
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            align="center"
            sx={{ width: 60, height: 60, marginTop: 3, marginBottom: 3 }}
            variant="square"
            alt="Logo"
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
          Sign Up
        </Typography>
        {err && (<Container>
            <Alert variant="outlined" severity="error">
              {errmessage}
            </Alert></Container>
          )}
        <Container maxWidth="sm">
          <Toolbar sx={{ padding: "0!important" }} variant="regular">
            <TextField
              autoFocus
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
              sx={{ flexGrow: 1, marginLeft: 2 }}
              fullWidth
              onChange={handleChange}
            />
          </Toolbar>
          <MuiPhoneNumber
            defaultCountry={"vn"}
            onChange={handleOnChange}
            inputClass={classes.mt}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="standard"
            fullWidth
            margin="dense"
            value={input.name}
            onChange={handleChange}
          />
        </Container>
        <Container maxWidth="sm">
          <TextField
            name="password"
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              name="dob"
              label="Date of birth"
              value={input.dob}
              inputFormat	='dd/MM/yyyy'
              onChange={(value) => {
                setInput({
                  ...input,
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
        <Container sx={{marginTop:'15px'}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={input.gender}
              onChange={handleChangeGender}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel value={false} control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </Container>
        <Container>
          <Typography
            gutterBottom
            variant="a"
            component="div"
            noWrap
            align="center"
            sx={{ marginTop: 2 }}
          >
            Already have an account?
            <Link to="/Login"> Sign In</Link>
          </Typography>
          <Button
            onClick={register}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 5,
              background: "linear-gradient(to right, #536976, #292e49);",
              marginBottom: 1,
              marginTop: 1,
            }}
          >
            Sign Up
          </Button>
        </Container>
      </Box>
    </Container></>
  );
}

export default Register;
