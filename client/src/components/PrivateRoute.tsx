import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../service/auth"

const PrivateRoute = ({ component: Component, path, ...rest}) => {
  if (!isLoggedIn() && path !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute