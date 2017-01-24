import React from 'react';
import '../App.css';

module.exports = function(props) {
  const farms = props.farms
  const style = {marginLeft: 20}
    console.log('anybody home?', farms);
    return (
      <div className = 'listOfFarms'>
        {
          farms.map((farm) => (
            <div className = 'eachFarm' key={farm.id}>
              <h3>{farm.name}, {farm.location}</h3>
              <div className = 'farmImage'>
                <img src= {farm.mainImage} />
              </div>
            </div>
          ))
        }
      </div>
    )
}
