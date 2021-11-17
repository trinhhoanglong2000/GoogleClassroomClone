// import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate, Navigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
//api
import { Login as LoginAccount } from "../../api";
function Login() {
  const navigate = useNavigate();
  const [height, setHeight] = useState(520);
  const [err, setErr] = useState(false);
  const [errmessage, setErrmessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",

    showPassword: false,
  });

  useEffect(() => {
    return () => {
      setErr({});
    };
  }, []);

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
  // const responseFacebook = (response) => {
  //   console.log(response);
  // };
  const responseGoogle = async (response) => {
    if (!response.tokenId) {
      return;
    }
    setLoading(true);
    let data = {};
    // let url ="http://localhost:5000/Login/Google?tokenId=" + response.tokenId;

    let url = `${process.env.REACT_APP_API_URL}/Login/Google?tokenId=${response.tokenId}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        data = responseData;
      })
      .catch(function (res) {
        data = res.err;
        console.log(res.err);
      });
    if (data.success) {
      setHeight(520);
      setErr(false);
      localStorage.setItem("token", data.token);

      navigate("/", { replace: true });
    } else {
      setHeight(560);
      setErr(true);
      setErrmessage(data.message);
    }
    setLoading(false);
  };
  const Login = async () => {
    setLoading(true);
    let result = {};
    try {
      result = await LoginAccount(input.email, input.password);
    } catch (error) {}
    if (result.success) {
      setHeight(520);
      setErr(false);
      localStorage.setItem("token", result.token);

      navigate("/", { replace: true });
    } else {
      setHeight(560);
      setErr(true);
      setErrmessage(result.message);
    }
    setLoading(false);
  };
  return (
    <>
      {localStorage.getItem("token") && <Navigate to="/" />}
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
            height: { height },
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
          {err && (
            <Container>
              <Alert variant="outlined" severity="error">
                {errmessage}
              </Alert>
            </Container>
          )}
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
            <Typography
              gutterBottom
              variant="a"
              component="div"
              noWrap
              align="center"
              sx={{ marginTop: 2 }}
            >
              Don't have an account?
              {!loading && <Link to="/Register"> Sign Up</Link>}
            </Typography>
            <Button
              onClick={Login}
              disabled={loading}
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

            <GoogleLogin
              clientId="1033685070621-hdqk1q42vbkd9d8vv595i3ij9gqopvf6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              disabled={loading}
              render={(renderProps) => (
                <Button
                  disabled={renderProps.disabled}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  fullWidth
                  onClick={renderProps.onClick}
                  sx={{
                    borderRadius: 5,
                    marginBottom: 1,
                    marginTop: 1,
                    background: "#DD4B39",
                    "&:hover": {
                      background: "#DD4B39",
                    },
                  }}
                >
                  Sign in with Google
                </Button>
              )}
            />
            {/* <FacebookLogin
              appId="2971266416460358"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              icon="fa-facebook"
            /> */}
           
          </Container>
        </Box>
      </Container>
    </>
  );
}
export default Login;
