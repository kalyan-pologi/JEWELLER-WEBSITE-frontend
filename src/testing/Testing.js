// import { alpha, AppBar, Box, Button, Grid, IconButton, InputBase, Tab, Tabs, Toolbar, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import LogoutIcon from "@mui/icons-material/Logout";
// import LoginIcon from "@mui/icons-material/Login";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import DrawerComp from './DrawerComp';
// import { styled, useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";


// const Testing = () => {
 
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

// //   const Search = styled("div")(({theme}) => ({
// //     background: 'white',
// //     padding: "0 10px",
// //     borderRadius: theme.shape.borderRadius,
// //     width: "30%"
// //   }));

//   const [value,setValue] = useState();
//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#1B1A1A" }}>
//         <Toolbar>
//           {matches ? (
//             <>
//               <DrawerComp />
//               <Box flex={3} sx={{ marginLeft: "auto", textAlign: "center" }}>
//                 <Typography sx={{ fontSize: "1.5rem", marginLeft: "auto" }}>
//                   Jewellery
//                 </Typography>
//                 {/* <Search>
//                   <InputBase placeholder="search..." />
//                 </Search> */}
//               </Box>
//             </>
//           ) : (
//             <>
//               <Box flex={6} sx={{ marginLeft: "auto", textAlign: "center" }}>
//                 <Typography sx={{ fontSize: "1.5rem", marginLeft: "auto" }}>
//                   Jewellery
//                 </Typography>
//                 {/* <Search>
//                   <InputBase placeholder="search..." />
//                 </Search> */}
//               </Box>
//               <Box flex={4} sx={{ marginLeft: "auto" }}>
//                 <Tabs
//                   value={value}
//                   onChange={(e, value) => setValue(value)}
//                   textColor="inherit"
//                   indicatorColor="secondary"
//                 >
//                   <Tab sx={{ padding: "0.5rem" }} label="Home" />
//                   <Tab sx={{ padding: "0.5rem" }} label="Category" />
//                   <Tab sx={{ padding: "0.5rem" }} label="Products" />
//                   <Tab sx={{ padding: "0.5rem" }} label="Contacts" />
//                   <Tab icon={<FavoriteIcon />} aria-label="favorite" />
//                 </Tabs>
//               </Box>

//               <Box sx={{ marginLeft: "auto" }}>
//                 <Button
//                   variant="contained"
//                   size="small"
//                   startIcon={<LoginIcon />}
//                 >
//                   LogIn
//                 </Button>
//                 {/* <Button
//                   sx={{ marginLeft: "10px" }}
//                   variant="contained"
//                   size="small"
//                   startIcon={<LogoutIcon />}
//                 >
//                   LogOut
//                 </Button> */}
//                 <Button
//                   sx={{ marginLeft: "10px" }}
//                   variant="contained"
//                   size="small"
//                   startIcon={<LoginIcon />}
//                 >
//                   SignUp
//                 </Button>
//               </Box>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }

// export default Testing;


             
            


//  // <div className="app">
//     //   <ThemeProvider theme={darkTheme}>
//     //     <Box >
//     //       {/* <Testing /> */}
//     //       {/* <CardComponent /> */}
//     //       {/* <Login /> */}
//     //       <SignUp />
//     //     </Box>
//     //   </ThemeProvider>
//     // </div>