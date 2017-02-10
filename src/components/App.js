const React = require('react')
const { connect } = require('react-redux')
import '../App.css'
const LoginShowing = require('./Login')
const RegisterShowing = require('./Register')

const App = (props) => {
  console.log('app props', props);
  return (
    <div>
      <div className='appBar'>
        <h1>Beacon Farms</h1>
        <LoginShowing {...props} />
        <RegisterShowing {...props} />
      </div>
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
