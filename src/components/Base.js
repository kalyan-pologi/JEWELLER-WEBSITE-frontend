import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DrawerComp from "./DrawerComp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import { getCurrentUserDetail, isLoggedIn, doLogout } from "../services/auth";

const Base = ({ title = "children", children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //   const Search = styled("div")(({theme}) => ({
  //     background: 'white',
  //     padding: "0 10px",
  //     borderRadius: theme.shape.borderRadius,
  //     width: "30%"
  //   }));

  const [value, setValue] = useState();

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      //after logged out
      setLogin(false);
      setUser(undefined);
      //redirect to home page
      navigate("/");
      toast.success("You are Logged Out");
    });
  };

  return (
    <>
      <AppBar sx={{ background: "#1B1A1A" }}>
        <Toolbar>
          {matches ? (
            <>
              <DrawerComp />
              <Box flex={3} sx={{ marginLeft: "auto", textAlign: "center" }}>
                <Box>
                  <ReactLink
                    to={"/"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        marginLeft: "auto",
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                    >
                      <Box>SRI DARSHINI</Box>
                      <Box sx={{ fontSize: "1rem" }}>
                        Gold and silver merchant
                      </Box>
                    </Typography>
                  </ReactLink>
                </Box>
                {/* <Search>
                  <InputBase placeholder="search..." />
                </Search> */}
              </Box>
            </>
          ) : (
            <>
              <Box flex={6} sx={{ marginLeft: "auto", textAlign: "center" }}>
                <Box>
                  <ReactLink
                    to={"/"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        marginLeft: "auto",
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                    >
                      <Box>SRI DARSHINI</Box>
                      <Box sx={{ fontSize: "1rem" }}>
                        Gold and silver merchant
                      </Box>
                    </Typography>
                  </ReactLink>
                </Box>

                {/* <Search>
                  <InputBase placeholder="search..." />
                </Search> */}
              </Box>
              <Box flex={4} sx={{ marginLeft: "auto" }}>
                <Tabs
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  textColor="white"
                  indicatorColor="secondary"
                >
                  <ReactLink
                    to={"/"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Tab
                      sx={{
                        padding: "0.5rem",
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                      label="Home"
                    />
                  </ReactLink>

                  <ReactLink
                    to={"/category"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Tab
                      sx={{
                        padding: "0.5rem",
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                      label="Category"
                    />
                  </ReactLink>

                  <ReactLink
                    to={"/products"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Tab
                      sx={{
                        padding: "0.5rem",
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                      label="Products"
                    />
                  </ReactLink>
                  {/* 
                  <ReactLink
                    to={"/contacts"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Tab sx={{ padding: "0.5rem" }} label="Contacts" />
                  </ReactLink> */}

                  <ReactLink
                    to={"/favorite"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Tab
                      icon={<FavoriteIcon />}
                      // iconPosition="end"
                      // label="favorite"
                      sx={{
                        "&:hover": {
                          color: "#FDBD01",
                        },
                      }}
                    />
                  </ReactLink>
                </Tabs>
              </Box>
              {!login && (
                <Box sx={{ marginLeft: "auto" }}>
                  <ReactLink
                    to={"/login"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<LoginIcon />}
                    >
                      LogIn
                    </Button>
                  </ReactLink>
                  <ReactLink
                    to={"/sign-up"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      sx={{ marginLeft: "10px" }}
                      variant="contained"
                      size="small"
                      startIcon={<LoginIcon />}
                    >
                      SignUp
                    </Button>
                  </ReactLink>
                </Box>
              )}
              {login && (
                <Box sx={{ marginLeft: "auto" }}>
                  <ReactLink
                    onClick={logout}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "flex",
                    }}
                  >
                    <p>{user}</p>
                    <Button
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        height: "35px",
                      }}
                      variant="contained"
                      size="small"
                      startIcon={<LogoutIcon />}
                    >
                      LogOut
                    </Button>
                  </ReactLink>
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Base;
