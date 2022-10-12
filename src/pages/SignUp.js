import React, { useEffect } from "react";
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

  const [userNameErrors, setUserNameErrors] = useState({
    userNameValid: false,
    userNameError: "",
  });

  const [emailErrors, setEmailErrors] = useState({
    emailValid: false,
    emailError: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    passwordValid: false,
    passwordError: "",
  });

  const handleChange = (event, property) => {
    const { name, value } = event.target;

    if (name === "userName") {
      if (value.length === 0) {
        setUserNameErrors({
          userNameValid: true,
          userNameError: "user name is required",
        });
      } else if (value.length < 4 || value.length > 10) {
        setUserNameErrors({
          userNameValid: true,
          userNameError: "min 4 and max 20 characters are allowed",
        });
      } else {
        setUserNameErrors({
          userNameValid: false,
          userNameError: "",
        });
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setEmailErrors({
          emailValid: true,
          emailError: "Email is required",
        });
      } else if (!regex.test(value)) {
        setEmailErrors({
          emailValid: true,
          emailError: "Enter valid Email address",
        });
      } else {
        setEmailErrors({
          emailValid: false,
          emailError: "",
        });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setPasswordErrors({
          passwordValid: true,
          passwordError: "Password is required",
        });
      } else if (value.length < 4 || value.length > 10) {
        setPasswordErrors({
          passwordValid: true,
          passwordError: "min 4 and max 20 characters are allowed",
        });
      } else {
        setPasswordErrors({
          passwordValid: false,
          passwordError: "",
        });
      }
    }

    setUser({ ...user, [property]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    //data validate

    if (
      userNameErrors.userNameValid ||
      emailErrors.emailValid ||
      passwordErrors.passwordValid ||
      user.user_name === "" ||
      user.user_email === "" ||
      user.user_password === ""
    ) {
      toast.error("please ENter Valid Details");
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
        // console.log(error);

        toast.error(error.response.data.message);
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
                    {...(userNameErrors.userNameValid && {
                      error: userNameErrors.userNameValid,
                      helperText: userNameErrors.userNameError,
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
                    {...(emailErrors.emailValid && {
                      error: emailErrors.emailValid,
                      helperText: emailErrors.emailError,
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
                    {...(passwordErrors.passwordValid && {
                      error: passwordErrors.passwordValid,
                      helperText: passwordErrors.passwordError,
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
