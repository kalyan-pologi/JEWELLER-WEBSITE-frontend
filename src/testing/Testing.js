// // import { alpha, AppBar, Box, Button, Grid, IconButton, InputBase, Tab, Tabs, Toolbar, Typography } from '@mui/material'
// // import React, { useState } from 'react'
// // import LogoutIcon from "@mui/icons-material/Logout";
// // import LoginIcon from "@mui/icons-material/Login";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import DrawerComp from './DrawerComp';
// // import { styled, useTheme } from "@mui/material/styles";
// // import useMediaQuery from "@mui/material/useMediaQuery";


// // const Testing = () => {
 
// //   const theme = useTheme();
// //   const matches = useMediaQuery(theme.breakpoints.down("md"));

// // //   const Search = styled("div")(({theme}) => ({
// // //     background: 'white',
// // //     padding: "0 10px",
// // //     borderRadius: theme.shape.borderRadius,
// // //     width: "30%"
// // //   }));

// //   const [value,setValue] = useState();
// //   return (
// //     <React.Fragment>
// //       <AppBar sx={{ background: "#1B1A1A" }}>
// //         <Toolbar>
// //           {matches ? (
// //             <>
// //               <DrawerComp />
// //               <Box flex={3} sx={{ marginLeft: "auto", textAlign: "center" }}>
// //                 <Typography sx={{ fontSize: "1.5rem", marginLeft: "auto" }}>
// //                   Jewellery
// //                 </Typography>
// //                 {/* <Search>
// //                   <InputBase placeholder="search..." />
// //                 </Search> */}
// //               </Box>
// //             </>
// //           ) : (
// //             <>
// //               <Box flex={6} sx={{ marginLeft: "auto", textAlign: "center" }}>
// //                 <Typography sx={{ fontSize: "1.5rem", marginLeft: "auto" }}>
// //                   Jewellery
// //                 </Typography>
// //                 {/* <Search>
// //                   <InputBase placeholder="search..." />
// //                 </Search> */}
// //               </Box>
// //               <Box flex={4} sx={{ marginLeft: "auto" }}>
// //                 <Tabs
// //                   value={value}
// //                   onChange={(e, value) => setValue(value)}
// //                   textColor="inherit"
// //                   indicatorColor="secondary"
// //                 >
// //                   <Tab sx={{ padding: "0.5rem" }} label="Home" />
// //                   <Tab sx={{ padding: "0.5rem" }} label="Category" />
// //                   <Tab sx={{ padding: "0.5rem" }} label="Products" />
// //                   <Tab sx={{ padding: "0.5rem" }} label="Contacts" />
// //                   <Tab icon={<FavoriteIcon />} aria-label="favorite" />
// //                 </Tabs>
// //               </Box>

// //               <Box sx={{ marginLeft: "auto" }}>
// //                 <Button
// //                   variant="contained"
// //                   size="small"
// //                   startIcon={<LoginIcon />}
// //                 >
// //                   LogIn
// //                 </Button>
// //                 {/* <Button
// //                   sx={{ marginLeft: "10px" }}
// //                   variant="contained"
// //                   size="small"
// //                   startIcon={<LogoutIcon />}
// //                 >
// //                   LogOut
// //                 </Button> */}
// //                 <Button
// //                   sx={{ marginLeft: "10px" }}
// //                   variant="contained"
// //                   size="small"
// //                   startIcon={<LoginIcon />}
// //                 >
// //                   SignUp
// //                 </Button>
// //               </Box>
// //             </>
// //           )}
// //         </Toolbar>
// //       </AppBar>
// //     </React.Fragment>
// //   );
// // }

// // export default Testing;


             
            


// //  // <div className="app">
// //     //   <ThemeProvider theme={darkTheme}>
// //     //     <Box >
// //     //       {/* <Testing /> */}
// //     //       {/* <CardComponent /> */}
// //     //       {/* <Login /> */}
// //     //       <SignUp />
// //     //     </Box>
// //     //   </ThemeProvider>
// //     // </div>




//    const [validationError, setValidationError] = useState({
//      userNameValidateError: false,
//      userNameError: "",
//      emailValidateError: false,
//      emailError: "",
//      passwordValidateError: false,
//      passwordError: "",
//    });

//    const userNameHandleChange = (event, property) => {
//      if (event.target.name === "userName") {
//        console.log("name");
//        if (event.target.value.length === 0)
//          setValidationError({
//            userNameValidateError: true,
//            userNameError: "user name required !!",
//          });
//        if (event.target.value.length < 4 || event.target.value.length > 20)
//          setValidationError({
//            userNameValidateError: true,
//            userNameError: "min 4 and max 20 characters are allowed !!",
//          });
//        else {
//          setValidationError({
//            userNameValidateError: false,
//            userNameError: "",
//          });
//        }
//      }
//      setUser({ ...user, [property]: event.target.value });
//    };
//    const emailHandleChange = (event, property) => {
//      console.log("email");
//      if (event.target.name === "email") {
//        if (event.target.value.length === 0)
//          setValidationError({
//            emailValidateError: false,
//            emailError: "Email address is required !!",
//          });
//        const regex = new RegExp(
//          "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"
//        );
//        if (!regex.test(event.target.value))
//          setValidationError({
//            emailValidateError: false,
//            emailError: "Enter valid Email address !!",
//          });
//        else {
//          setValidationError({
//            emailValidateError: false,
//            emailError: "",
//          });
//        }
//      }
//      setUser({ ...user, [property]: event.target.value });
//    };
//    const passwordHandleChange = (event, property) => {
//      console.log("password");
//      if (event.target.name === "password") {
//        if (event.target.value.length === 0)
//          setValidationError({
//            passwordValidateError: true,
//            passwordError: "Password is required !!",
//          });
//        else if (event.target.value.length < 4 || event.target.value.length > 20)
//          setValidationError({
//            passwordValidateError: true,
//            passwordError: "min 4 and max 20 characters are allowed !!",
//          });
//        else {
//          setValidationError({
//            passwordValidateError: false,
//            passwordError: "",
//          });
//        }
//      }
//      setUser({ ...user, [property]: event.target.value });
//    };

//    // useEffect( ()=>{
//    //    console.log(user);
//    // },[user])

//    const restData = () => {
//      setUser({
//        user_name: "",
//        user_email: "",
//        user_password: "",
//      });
//    };


    // if (true) {
    //    console.log(error.response.data.user_name);

    //   setErrors({

    //     userNameValid: true,
    //     userNameError: error.response.data.user_name,
    //   });
    // }
    //  if (true) {
    //    console.log(error.response.data.user_email);
    //    setErrors({
    //      emailValid: true,
    //      emailError: error.response.data.user_email,
    //    });
    //  }
    //   if (true) {
    //     console.log(error.response.data.user_password);
    //     setErrors({
    //       passwordValid: true,
    //       passwordError: error.response.data.user_password,
    //     });
    //   }

      // switch (name) {
    //   case "userName":
    //     errors.userNameValid = value.length < 4 || value.length > 10;
    //     errors.userNameError = errors.userNameValid
    //       ? "min 4 and max 20 characters are allowed"
    //       : "";

    //     break;

    //   case "email":
    //     errors.emailValid = !regex.test(value);
    //     errors.emailError = errors.emailValid ? "email is invalid" : "";
    //     break;

    //   case "password":
    //     errors.passwordValid = value.length < 4 || value.length > 10;
    //     errors.passwordError = errors.passwordValid
    //       ? "min 4 and max 20 characters are allowed"
    //       : "";
    //     break;

    //   default:
    //     break;
    // }