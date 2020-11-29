import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import { PrivateRoute, PublicRoute } from "../components/Routes"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/app/profile" component={Profile} />
      <PublicRoute path="/app/login" component={Login} />
    </Router>
  </Layout>
 )
 
 export default App