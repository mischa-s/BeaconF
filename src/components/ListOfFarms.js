import React from 'react';
import '../App.css';

module.exports = function(props) {
  const farms = props.farms
  const arrOfFarms = objToArr(farms)
  const style = {marginLeft: 20}

    return (
      <div className = 'listOfFarms'>
        {arrOfFarms.map((farm) =>
        <div className = 'eachFarm' key={farm.id}>{farm.id}. {farm.name}, {farm.location}
          <div className = 'farmImage'>
            <img src= {farm.mainImageURL} />
          </div>
        </div>)}
      </div>
    )
}

function objToArr (obj){
  return Object.keys(obj).map(function(oneObj){
      return obj[oneObj]
  })
}
