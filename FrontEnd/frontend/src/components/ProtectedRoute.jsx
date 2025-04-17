import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Store/AuthContext';


export const ProtectedRoute = ({ children, allowedRoles }) => {
 const{role,user}=useContext(AuthContext)
  console.log("ProtectedRoute - user:", user);
  console.log("ProtectedRoute - role:", role);

  if (!user) {
    return <Navigate to="/" />;
  }

  const isAllowed = allowedRoles.includes(role);
  if (!isAllowed) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
