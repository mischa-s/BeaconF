
import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const request = require ('superagent')

const SubmitFarm = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault()

    const farmName = this.refs.farmName.input.value
    const farmLocation = this.refs.farmLocation.input.value
    const farmType = this.refs.farmType.input.value
    const mainImage = this.refs.mainImage.input.value

    if (farmName.length > 0) {
    request.post('api/v1/farms')
      .send({name:farmName, location:farmLocation, type:farmType, mainImage:mainImage })
      .end((err, data) => {
        console.log('heard back from api', data.body, err)
        this.props.store.dispatch({type: 'GET_ALL_FARMS', payload: data.body})
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
          <Paper zDepth={5}>
            <TextField hintText="Farm Name" ref='farmName' fullWidth={true}/>
            <br/>
            <TextField hintText="Farm Location" ref='farmLocation' fullWidth={true} />
            <br/>
            <TextField hintText="Type of Farm" ref='farmType' fullWidth={true} />
            <br/>
            <TextField hintText="Image URL" ref='mainImage' fullWidth={true} />
          </Paper>
          <br/>
          <RaisedButton onClick={this.handleSubmit} label="Add Farm" fullWidth={true} />
        </form>
      </div>
    )
  }
})

module.exports = SubmitFarm
