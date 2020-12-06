import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

export default () => {
  navigate(`/app/profile`)

  return <></>;
}
