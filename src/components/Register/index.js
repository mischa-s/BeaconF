const React = require('react')
const ShowRegister = require('./ShowRegister')

const DisplayRegister = (props) => {
  return props.loggedIn
    ? <div className='EmptyRegisterDiv' />
    : <ShowRegister {...props} />
}
module.exports = (DisplayRegister)
