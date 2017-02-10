import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const listOfFarms = (props) => {
  const farms = props.farms
  return (
    <div className='listOfFarms'>
      {
        _.map(farms, (farm) => (
          <div className='eachFarm' key={farm.id}>
            <h3>{farm.name}, {farm.location}</h3>
            <div className='farmImage'>
              <img src={farm.mainImage} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

module.exports = connect((state) => state)(listOfFarms)
