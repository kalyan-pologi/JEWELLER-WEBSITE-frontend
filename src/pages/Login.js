import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Base from "../components/Base";
import { toast } from "react-toastify";
import { doLogin } from "../services/auth";
import { useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { LoginUser } from "../services/userService";
import { Container } from "@mui/material";

const Login = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const theme = createTheme();

  const [loginDetail, setLoginDetail] = useState({
    user_email: "",
    user_password: "",
  });

  const [error, setError] = useState({
    errors: "enter wrong",
    isError: false,
  });

  const navigate = useNavigate();

  
  const handleChange = (event, property) => {
    setLoginDetail({ ...loginDetail, [property]: event.target.value });
  };

   const [validationError, setValidationError] = useState({
     validateError: false,
     emailError: "",
     passwordError: "",
   });
 
  // useEffect(() => {
  //   console.log(loginDetail);
  // }, [loginDetail]);

  // const restData = () => {
  //   setLoginDetail({
  //     user_email: "",
  //     user_password: "",
  //   });
  // };

  const submitForm = (event) => {
    event.preventDefault();
    // console.log(loginDetail);

    // if (error.isError) {
    //   toast.error("form data is invalid!!");
    //   setError({ ...error, isError: false });
    //   return;
    // }
    //data validate

    //call server api to generate token
    LoginUser(loginDetail)
      .then((jwtTokenData) => {
        console.log(jwtTokenData);
        //save the token to local storage
        doLogin(jwtTokenData, () => {
          // after login and saving the token...redirect to home page
          navigate("/");
        });
        toast.success("You are Logged In");
        setLoginDetail({
          user_email: "",
          user_password: "",
        });
      })
      .catch((error) => {
       
        console.log(error.response);
         console.log(error.response.data.user_email);
         console.log(error.response.data.user_password);

         setValidationError({
           validateError: true,
           emailError: error.response.data.user_email,
           passwordError: error.response.data.user_password,
         });
        toast.error("error");
        setError({
          errors: error,
          isError: false,
        });
      });
  };

  return (
    <Base>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => submitForm(e)}
              method="post"
              noValidate
              sx={{ mt: 0.5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => handleChange(e, "user_email")}
                value={loginDetail.user_email}
                {...(validationError.validateError && {
                  error: validationError.validateError,
                  helperText: validationError.emailError,
                })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handleChange(e, "user_password")}
                value={loginDetail.user_password}
                {...(validationError.validateError && {
                  error: validationError.validateError,
                  helperText: validationError.passwordError,
                })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <ReactLink to={"/forgot-password"}>Forgot password?</ReactLink>
              </Grid>
              <Grid item>
                <ReactLink to={"/sign-up"}>
                  {"Don't have an account? Sign Up"}
                </ReactLink>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Base>
  );
};

export default Login;
