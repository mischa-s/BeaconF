import React from 'react';
import '../App.css';

module.exports = function(props) {
  const farms = props.farms
  console.log('farms :', farms);
  const style = {marginLeft: 20}

    return (
      <div className = 'listOfFarms'>
        {farms.map((farm) =>
        <div className = 'eachFarm' key={farm.id}>{farm.id}. {farm.name}, {farm.location}
          <div className = 'farmImage'>
            <img src= {farm.mainImage} />
          </div>
        </div>)}
      </div>
    )
}
