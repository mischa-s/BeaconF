const React = require('react')
const LoginForm = require('./LoginForm')
const ShowLoginOrLogoutButton = require('./ShowLoginOrLogoutButton')

const LoginShowing = (props) => {
  return props.showingLogin
    ? <LoginForm {...props} />
    : <ShowLoginOrLogoutButton {...props} />
}
module.exports = (LoginShowing)
