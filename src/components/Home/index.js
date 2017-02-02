import React from 'react'
import { connect } from 'react-redux'
import AddFarmForm from './AddFarmForm'
import GoogleMap from './GoogleMap'
import '../../App.css'

import ListOfFarms from './ListOfFarms'

const Home = (props) => {
  const {farms} = props

  return (
    <div>
      <div className='map'>
        <GoogleMap farms={farms} />
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
