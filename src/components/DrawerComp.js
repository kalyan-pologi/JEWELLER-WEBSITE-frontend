import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { getCurrentUserDetail, isLoggedIn, doLogout } from "../services/auth";
import { toast } from "react-toastify";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
     toast.success("logged out successfully");
   });
 };
  return (
    <React.Fragment>
      <IconButton
        variant="white"
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ fontSize: "2.2rem" }} />
      </IconButton>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Container
          sx={{
            marginTop: 10,
            width: "auto",
            // backgroundColor: "#1B1A1A",
          }}
        >
          <Box>
            <List>
              <ReactLink
                to={"/"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ReactLink>

              <ReactLink
                to={"/category"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>Category</ListItemText>
                </ListItemButton>
              </ReactLink>

              <ReactLink
                to={"/products"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>Products</ListItemText>
                </ListItemButton>
              </ReactLink>
              {/* 
              <ReactLink
                to={"/contacts"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <ContactPageIcon />
                  </ListItemIcon>
                  <ListItemText>Contacts</ListItemText>
                </ListItemButton>
              </ReactLink> */}

              <ReactLink
                to={"/favorite"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText>Favorite</ListItemText>
                </ListItemButton>
              </ReactLink>

              {!login && (
                <>
                  <ReactLink
                    to={"/login"}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                      <ListItemIcon>
                        <LoginIcon />
                      </ListItemIcon>
                      <ListItemText>Login</ListItemText>
                    </ListItemButton>
                  </ReactLink>

                  <ReactLink
                    to={"/sign-up"}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                      <ListItemIcon>
                        <LoginIcon />
                      </ListItemIcon>
                      <ListItemText>SignUp</ListItemText>
                    </ListItemButton>
                  </ReactLink>
                </>
              )}

              {login && (
                <>
                  <ReactLink
                    onClick={logout}
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText>
                        <p>Logout</p>
                        <p>{user}</p>
                      </ListItemText>
                    </ListItemButton>
                  </ReactLink>
                </>
              )}
            </List>
          </Box>
        </Container>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComp;
