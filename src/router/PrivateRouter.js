import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivetRouter = ({ children }) => {
  const { user, userLoading } = useContext(AuthContext);

  if (userLoading) {
    return <div>Loding...</div>
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to='/login'></Navigate>;
};

export default PrivetRouter;