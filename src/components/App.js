import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AddFarmForm from './AddFarmForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

module.exports = function App (props) {
    const farms = props.state.farms
    const arrOfFarms = objToArr(farms)
    const style = {marginLeft: 20}

    return (
      <div>
        <div className='listOfFarms'>
          {arrOfFarms.map((farm) => <p className = 'eachFarm' key={farm.id}>{farm.name}, {farm.location}</p>)}
        </div>
        <MuiThemeProvider>
          < AddFarmForm />
        </MuiThemeProvider>
      </div>
    );
}


function objToArr (obj){
  return Object.keys(obj).map(function(oneObj){
      return obj[oneObj]
  })
}
