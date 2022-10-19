import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./Auth";
import MyNavbar from '../layouts/Navbar';

export const ProtectedRoute = () => {
  const isAuth = auth();
  if (!isAuth) {
    // user is not authenticated
    return <Navigate to="/sign-in" />;
  }
  return <><MyNavbar isAuth={isAuth} /><Outlet /></>
};