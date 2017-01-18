import React, { Component } from 'react';
import '../App.css';

module.exports = function App (props) {
    const farms = props.state.farms
    const arrOfFarms = objToArr(farms)
    console.log(arrOfFarms);

    return (
      <div>
        <div className='listOfFarms'>
          {arrOfFarms.map((farm) => <p className = 'eachFarm' key={farm.id}>{farm.name}, {farm.location}</p>)}
        </div>
      </div>
    );
}

function objToArr (obj){
  return Object.keys(obj).map(function(oneObj){
      return obj[oneObj]
  })
}
