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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const navigate = useNavigate();
  
   const [user, setUser] = useState({
     user_name: "",
     user_email: "",
     user_password: "",
   });

   const [error, setError] = useState({
     errors: {},
     isError: false,
   });

   const handleChange = (event, property) => {
     setUser({ ...user, [property]: event.target.value });
   };

   // useEffect( ()=>{
   //    console.log(user);
   // },[user])

   const restData = () => {
     setUser({
       user_name: "",
       user_email: "",
       user_password: "",
     });
   };

   const submitForm = (event) => {
     event.preventDefault();
     // console.log(user);

     // if(error.isError){
     //   toast.error("form data is invalid!!")
     //   setError({...error , isError:false})
     //   return;
     // }
     //data validate

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
         console.log(error);
         toast.error("error");
         //handling error
         setError({
           errors: error,
           isError: true,
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
                    // error
                    // helperText="Incorrect entry."
                    // invalid={error.errors?.response?.data?.user_name ? true : false}
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
                    // error
                    // helperText="Incorrect entry."
                    // invalid={error.errors?.response?.data?.user_email ? true : false}
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
                    // error
                    // helperText="Incorrect entry."
                    // invalid={error.errors?.response?.data?.user_password ? true : false}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2.5, mb: 1.5}}
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
