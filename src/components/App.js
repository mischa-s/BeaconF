import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import '../App.css'
import Home from './Home'

const App = (props) => {
  const {farms} = props
  console.log('location', props);
  return (
    <div>
      <h1>Beacon Farms</h1>
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
