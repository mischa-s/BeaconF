import React from 'react';


module.exports = function(props) {
  const farms = props.state.farms
  const arrOfFarms = objToArr(farms)
    return (
      <div className='listOfFarms'>
        {arrOfFarms.map((farm) => <p className = 'eachFarm' key={farm.id}>{farm.name}, {farm.location}</p>)}
      </div>
    )
}

function objToArr (obj){
  return Object.keys(obj).map(function(oneObj){
    return obj[oneObj]
  })
}
