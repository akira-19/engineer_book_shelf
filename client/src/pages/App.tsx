import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/login"
import { PrivateRoute, PublicRoute } from "../components/routes"

const App = () => (
 <Layout>
   <Router basepath="/app">
     <PrivateRoute path="/profile" component={Profile} />
     <PublicRoute path="/login" component={Login} />
   </Router>
 </Layout>
)

export default App