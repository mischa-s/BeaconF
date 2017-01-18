import React, { Component } from 'react';
import '../App.css';

module.exports = function App (props) {
    const farms = props.state.farms
    // const arrOfFarms = objToArr(farms)
    // console.log(arrOfFarms);

    return (
      <div className="App">
        <div className="App-header">
          <h2>This is live reloading</h2>
        </div>
        <div className='listOfFarms'>

        </div>
      </div>
    );
}

// function objToArr (obj){
// return Object.keys(obj).map(function(oneObj){
// return obj[oneObj]
// })
