import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import "../App.css"
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (

    <>
    <div className='App'>
          <h1 className='head'>Welcome</h1>
          <div className="box">
          <h2>Please Login/Signup to Continue</h2>
    <Button
      id="buttons"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
    </div>
    </div>
    </>
  );
};

export default Login;