import React, { useState } from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import firebase from 'firebase';
import Login from './login';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTokenChecking, setIsTokenChecking] = useState(true);
  const canMove = async () => {
    let result = false;
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('auth success');
        result = true;
      }
      setIsTokenChecking(false);
    });

    return result || window.location.pathname === '/app/login';
  };

  canMove();
  console.log(isLoggedIn);
  if (isTokenChecking) {
    return <div>Loading</div>;
  } else {
    if (!isLoggedIn) {
      console.log('not login');

      return <Login />;
    }
  }

  return <Component />;
};

export const PublicRoute = ({ component: Component, ...rest }) => <Component {...rest} />