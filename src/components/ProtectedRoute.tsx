import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any; // Rest of the props
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
