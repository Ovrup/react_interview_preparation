import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
    const navigate = useNavigate()
    const isLoggedin = localStorage.getItem('isLoggedin') === "true";

    return isLoggedin ? component : <Navigate to='/login' />;

}

export default ProtectedRoute