import React from 'react'
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext for authentication
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { state } = useAuth(); // Get the user authentication state from your AuthContext

    if (!state.user) {
        return <Navigate to="/login" />;
    }



    return children;
};

export default PrivateRoute

