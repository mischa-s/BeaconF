import React from 'react'
import ReactDOM from 'react-dom'
import AddFarmForm from './AddFarmForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddFarmButton from './AddFarmButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import '../App.css'



import ListOfFarms from './ListOfFarms'

module.exports = function App (props) {
    injectTapEventPlugin();
    return (
      <div>
        <div>
          <ListOfFarms farms={props.state.farms} />
        </div>
        <div className = 'addFarm'>
          <MuiThemeProvider>
            < AddFarmForm />
          </MuiThemeProvider>
          <MuiThemeProvider>
            < AddFarmButton />
          </MuiThemeProvider>
        </div>
      </div>
    );
}
