import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

  const user = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      Login
    </div>
  );
};

export default Login;