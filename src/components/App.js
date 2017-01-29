import React from 'react'
import { connect } from 'react-redux'
import AddFarmForm from './AddFarmForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import GoogleMap from './GoogleMap'
import '../App.css'

import ListOfFarms from './ListOfFarms'

const App = (props) => {
  const {farms} = props
  console.log('props', props)
  console.log('farms', farms)

  return (
    <div>
      <h1>Beacon Farms</h1>
      <div className='map'>
        <GoogleMap farms={farms} />
      </div>
      <div>
        <ListOfFarms farms={farms} />
      </div>
      <div className='addFarm'>
        <MuiThemeProvider>
          < AddFarmForm store={props.store} />
        </MuiThemeProvider>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(App)
