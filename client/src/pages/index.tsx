import React from "react"
import { navigate } from "gatsby"
import { PrivateRoute } from '../components/Routes'
import  Profile  from '../components/Profile'


export default () => {
  return <PrivateRoute component={Profile} />;
}
