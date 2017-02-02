import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const LoginButton = (props) => {
  const loggedIn = props.loggedIn

  function login () {
    props.dispatch({type: 'SHOWING_LOGIN'})
  }
  function logout () {
    props.dispatch({type: 'LOGIN', payload: null})
    props.dispatch({type: 'SHOWING_LOGIN'})
  }

  const loginButton =
  (
    <div className='button'>
      <RaisedButton onClick={login}> Login </RaisedButton>
    </div>
  )
  const logoutButton =
  (
    <div className='button' >
      <RaisedButton onClick={logout}>Logout</RaisedButton>
    </div>
  )
  return loggedIn
    ? logoutButton
    : loginButton
}
module.exports = (LoginButton)
