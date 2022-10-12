import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Base from "../components/Base";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../services/userService";
import { useState } from "react";

const SignUp = () => {
  const theme = createTheme();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const regex = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const [errors, setErrors] = useState({
    userNameError: "",
    emailError: "",
    passwordError: "",
    userNameValid: false,
    emailValid: false,
    passwordValid: false,
  });

  const handleChange = (event, property) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    if (name === "userName") {
      if (value.length === 0) {
        setErrors({
          userNameValid: true,
          userNameError: "user name is required",
        });
      } else if (value.length < 4 || value.length > 10) {
        setErrors({
          userNameValid: true,
          userNameError: "min 4 and max 20 characters are allowed",
        });
      } else {
        setErrors({
          userNameValid: false,
          userNameError: "",
        });
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setErrors({
          emailValid: true,
          emailError: "Email is required",
        });
      } else if (!regex.test(value)) {
        setErrors({
          emailValid: true,
          emailError: "Enter valid Email address",
        });
      } else {
        setErrors({
          emailValid: false,
          emailError: "",
        });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setErrors({
          passwordValid: true,
          passwordError: "Password is required",
        });
      } else if (value.length < 4 || value.length > 10) {
        setErrors({
          passwordValid: true,
          passwordError: "min 4 and max 20 characters are allowed",
        });
      } else {
        setErrors({
          passwordValid: false,
          passwordError: "",
        });
      }
    }

    setUser({ ...user, [property]: event.target.value });
  };

  // useEffect( ()=>{
  //    console.log(user);
  // },[user])

  const submitForm = (event) => {
    event.preventDefault();

    //data validate

    if (
      errors ||
      user.user_name === "" ||
      user.user_email === "" ||
      user.user_password === ""
    ) {
      toast.error("Please Enter Valid Details");
      return;
    }

    //call server api
    signUp(user)
      .then((resp) => {
        console.log(resp);
        navigate("/login");
        toast.success("user is register successfully");
        setUser({
          user_name: "",
          user_email: "",
          user_password: "",
        });
      })
      .catch((error) => {
        // console.log(error.response.data.user_name);
        // console.log(error.response.data.user_email);
        // console.log(error.response.data.user_password);

        toast.error("Enter Valid Details");
        //handling error
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(e) => submitForm(e)}
              method="post"
              sx={{ mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    type="text"
                    autoFocus
                    onChange={(e) => handleChange(e, "user_name")}
                    value={user.user_name}
                    {...(errors.userNameValid && {
                      error: errors.userNameValid,
                      helperText: errors.userNameError,
                    })}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => handleChange(e, "user_email")}
                    value={user.user_email}
                    {...(errors.emailValid && {
                      error: errors.emailValid,
                      helperText: errors.emailError,
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => handleChange(e, "user_password")}
                    value={user.user_password}
                    {...(errors.passwordValid && {
                      error: errors.passwordValid,
                      helperText: errors.passwordError,
                    })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2.5, mb: 1.5 }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <ReactLink to={"/login"}>
                  Already have an account? Sign in
                </ReactLink>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Base>
  );
};

export default SignUp;
