import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

import ListOfFarms from './ListOfFarms'

const individualFarm = (props) => {
  const {farms} = props

  return (
    <div>

    </div>
  )
}

module.exports = connect((state) => state)(individualFarm)
