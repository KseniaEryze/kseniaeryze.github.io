import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.user?.role);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (userRole === 'admin') {
        return <Outlet />;
    } else {
        return <Navigate to="/main" />;
    }
};

export default ProtectedRoute;