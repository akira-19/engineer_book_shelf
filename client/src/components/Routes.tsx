import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

export const PrivateRoute = ({ component: Component, ...rest }) => {
 if (!isLoggedIn() && window.location.pathname !== `/app/login`) {
   navigate("/app/login")
   return null
 }

 return <Component {...rest} />
}

export const PublicRoute = ({ component: Component, ...rest }) => <Component {...rest} />