import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import MyNavbar from '../layouts/Navbar';
import { auth } from "./Auth";

function PublicRoutes(props) {
    const isAuth = auth();
    if (isAuth) {
        return <Navigate to="/" />;
    }
    return (
       <><MyNavbar isAuth={false} /><Outlet/></>
    );
}

export default PublicRoutes;