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

  return loggedIn
    ? <RaisedButton onClick={logout}>Logout</RaisedButton>
    : <RaisedButton onClick={login}> Login </RaisedButton>
}
module.exports = (LoginButton)
