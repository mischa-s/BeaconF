const React = require('react')
const LoginForm = require('./Login')
const LoginButton = require('./LoginButton')

const LoginShowing = (props) => {
  const showing = props.showingLogin
  const loginShowing =
  (
    <LoginForm />
  )

  const loginNotShowing =
  (
    <LoginButton {...props} />
  )
  return showing
    ? loginShowing
    : loginNotShowing
}
module.exports = (LoginShowing)
