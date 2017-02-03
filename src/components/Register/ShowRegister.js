const React = require('react')
const { RaisedButton } = require('material-ui/RaisedButton')
const RegisterForm = require('./RegisterForm')

const ShowRegister = (props) => {
  console.log('props in show register', props)
  return props.showingRegister
  ? <RegisterForm {...props} />
  : <button onClick={() => props.dispatch({type: 'SHOWING_REGISTER'})}> Register </button>
}
module.exports = (ShowRegister)
