const React = require('react')
const LoginForm = require('./Login')
const ShowLoginOrLogoutButton = require('./ShowLoginOrLogoutButton')

const LoginShowing = (props) => {
  const showing = props.showingLogin
  const loginShowing =
  (
    <LoginForm {...props} />
  )

  const loginNotShowing =
  (
    <ShowLoginOrLogoutButton {...props} />
  )
  return showing
    ? loginNotShowing
    : loginShowing
}
module.exports = (LoginShowing)
