const React = require('react')
const LoginForm = require('./Login')
const LoginButton = require('./LoginButton')

const LoginShowing = (props) => {
  const showing = props.showingLogin
  const loginShowing =
  (
    <LoginForm {...props} />
  )

  const loginNotShowing =
  (
    <LoginButton {...props} />
  )
  return showing
    ? loginNotShowing
    : loginShowing
}
module.exports = (LoginShowing)
