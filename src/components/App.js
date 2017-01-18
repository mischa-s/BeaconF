import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AddFarmForm from './AddFarmForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DefaultButton from './DefaultButton'
import injectTapEventPlugin from 'react-tap-event-plugin';

module.exports = function App (props) {
    const farms = props.state.farms
    const arrOfFarms = objToArr(farms)
    const style = {marginLeft: 20}
    injectTapEventPlugin();

    return (
      <div>
        <div className='listOfFarms'>
          {arrOfFarms.map((farm) =>
            <div className = 'eachFarm' key={farm.id}>{farm.name}, {farm.location}
              
            </div>)}
        </div>
        <div className = 'addFarm'>
          <MuiThemeProvider>
            < AddFarmForm />
          </MuiThemeProvider>
          <MuiThemeProvider>
            < DefaultButton />
          </MuiThemeProvider>
        </div>
      </div>
    );
}


function objToArr (obj){
  return Object.keys(obj).map(function(oneObj){
      return obj[oneObj]
  })
}
