import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services/auth";
import { toast } from "react-toastify";

const PrivateRoutes = () => {
  const token = isLoggedIn();
  // const token = false;
  return token ? (
    <Outlet />
  ) : (
     <Navigate to="/login" />
  )
};

export default PrivateRoutes;
