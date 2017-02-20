import React from 'react'
import { connect } from 'react-redux'
import '../../App.css'

import AddFarmForm from './AddFarmForm'
import GoogleMap from './GoogleMap'
import ListOfFarms from './ListOfFarms'
import MyFarmsButton from './MyFarmsButton'

const Home = (props) => {
  const {farms, geocoderResult, forGeocoding} = props

  return (
    <div>
      <div className='button'>
        < MyFarmsButton {...props} />
      </div>
      <div className='map'>
        <GoogleMap farms={farms} forGeocoding={forGeocoding} geocoderResult={geocoderResult} />
      </div>
      <div>
        <ListOfFarms props={props} />
      </div>
      <div className='addFarm'>
        < AddFarmForm store={props.store} />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
