import React, { Component, useState } from "react"
import { handleLogin, isLoggedIn} from "../service/auth"
import { navigate, Link } from "gatsby"

const Auth = () => {
  const [userState, setUserState] = useState({
    userName: '',
    password: ''
  })
  const [password, setPassword] = useState('')

  const handleUpdate = (event)=> {
    setUserState({...userState, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(userState)
    navigate(`/app/secret`)
  }
  
  return (
    <div>
      認証ページ
      {isLoggedIn() ?
      <Link
        to="/app/secret"
      >認証後ページへ</Link>
      :
      <>
        <dl>
          <dt>名前</dt>
          <dd>
            <input
              name="userName"
              onChange={e => handleUpdate(e)}
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>パスワード</dt>
          <dd>
            <input
              name="password"
              onChange={e => handleUpdate(e)}
            />
          </dd>
        </dl>
        <button
        type="submit"
        onClick={e => handleSubmit(e)}
      >送信</button>
      </>
      }
    </div>
  )
}
 
export default Auth
