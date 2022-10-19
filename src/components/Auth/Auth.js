import React from "react";
import { Navigate } from 'react-router-dom';
import { useJwt } from "react-jwt";

export const auth = () => {
    const token = localStorage.getItem('token');
    if(token){
        const { isExpired } = useJwt(token);
        if (token && !isExpired) {
            return token ? token : false;
        }
        SignOut();
    }
    
    return false;
}

export const SignOut = () => {
    localStorage.clear();
    return <Navigate to="/sign-in" />
}

export const getUser = () => {
    return JSON.parse( localStorage.getItem('user') );
}