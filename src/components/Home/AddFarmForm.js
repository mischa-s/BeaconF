import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import FindLatLong from './FindLatLang'

const request = require('superagent')

const SubmitFarm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    console.log(this.props, 'top of file props')
    const { dispatch } = this.props
    const farmName = this.refs.farmName.input.value
    const farmLocation = this.refs.farmLocation.input.value
    const farmType = this.refs.farmType.input.value
    const mainImage = this.refs.mainImage.input.value

    if (farmName.length > 0 && farmLocation.length > 0) {

      FindLatLong(farmLocation, function (result) {
        const longitude = result.Longitude
        const latitude = result.Latitude
        console.log(longitude, latitude, 'geocodeAddress result from submit')

        request.post('api/v1/farms')
          .send({ name: farmName, location: farmLocation, type: farmType, mainImage: mainImage, latitude, longitude})
          .end((err, data) => {
          dispatch({type: 'GET_ALL_FARMS', payload: data.body})
        })
      })

      this.refs.farmName.input.value = ''
      this.refs.farmLocation.input.value = ''
      this.refs.farmType.input.value = ''
      this.refs.mainImage.input.value = ''
    } else {
      this.refs.farmName.focus()
    }
  },
  render: function () {
    return (
      <div>
        <form>
          <Paper className='paper' zDepth={3}>
            <TextField hintText='Farm Name' className='input' ref='farmName' fullWidth={true} />
            <br />
            <TextField hintText='Farm Location' className='input' ref='farmLocation' fullWidth={true} />
            <br />
            <TextField hintText='Type of Farm' className='input' ref='farmType' fullWidth={true} />
            <br />
            <TextField hintText='Image URL' className='input' ref='mainImage' fullWidth={true} />
          </Paper>
          <br />
          <RaisedButton onClick={this.handleSubmit} label='Add Farm' fullWidth={true} />
        </form>
      </div>
    )
  }
})

module.exports = connect((state) => state)(SubmitFarm)
