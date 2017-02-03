const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const request = require('superagent')
const Logout = require ('./Logout')

const LoginButton = (props) => {
  const { dispatch } = props
  const loggedIn = props.loggedIn

  function login () {
    dispatch({type: 'SHOWING_LOGIN'})
  }

  return loggedIn
    ? <Logout {...props} />
    : <button onClick={login}> Login </button>
}
module.exports = (LoginButton)
