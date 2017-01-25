import React from 'react'
import ReactDOM from 'react-dom'
import AddFarmForm from './AddFarmForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import GoogleMap from './GoogleMap'
import '../App.css'

import ListOfFarms from './ListOfFarms'

module.exports = function App (props) {
  const { farms } = props.state
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
